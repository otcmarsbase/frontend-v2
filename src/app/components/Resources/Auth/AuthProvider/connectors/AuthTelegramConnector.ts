import { appManager, ModalController } from '@app/logic';
import { RuntimeError } from '@ddd/errors';
import { PortalInstanceControl } from '@packages/berish-react-portal';
import { AppConfig } from '@shared/config';

import { AuthTelegramConnectorInfo, AuthTelegramConnectorInfoType } from '../info';
import { AuthTelegramQrCodeModal, AuthTelegramQrCodeModalProps } from '../modals';
import { AuthTelegramVerifyModal, AuthTelegramVerifyModalProps } from '../modals';

import { IAuthConnector } from './IAuthConnector';

export type AuthTelegramStatusType = 'CODE_SENT' | 'CODE_EXPIRED';

export class AuthTelegramConnector implements IAuthConnector<AuthTelegramStatusType, AuthTelegramConnectorInfoType> {
  private _code?: string;

  private _status: AuthTelegramStatusType | null;

  private _showQrCodeResolver?: PortalInstanceControl<AuthTelegramQrCodeModalProps, void>;
  private _verifyModalResolver?: PortalInstanceControl<AuthTelegramVerifyModalProps, void>;

  private _interval: NodeJS.Timeout;

  get info() {
    return AuthTelegramConnectorInfo;
  }

  get status() {
    if (this._status) return this._status;

    return null;
  }

  async execute(): Promise<void> {
    await this._generateMessage();
    await this._checkVerifyCode();
  }

  private get tgBotLink() {
    return `${AppConfig.links.telegramBotURL}/?start=${this._code}`;
  }

  private _updateStatus(status: AuthTelegramStatusType) {
    this._status = status;
  }

  private async _generateMessage() {
    const { schema } = appManager.serviceManager.backendApiService;

    const data = await schema.send('auth.generateTelegramCode', {});

    if (data?.code) {
      this._updateStatus('CODE_SENT');

      this._code = data.code;

      if (this._verifyModalResolver && !this._verifyModalResolver.isResulted) {
        this._verifyModalResolver.updateProps({
          code: this._code,
          link: this.tgBotLink,
          onShowQrCode: () => this._onShowQrCode(),
        });
      } else {
        this._verifyModalResolver = ModalController.create(AuthTelegramVerifyModal, {
          code: this._code,
          link: this.tgBotLink,
          onShowQrCode: () => this._onShowQrCode(),
        });
      }
    }
  }

  private async _checkVerifyCode() {
    const { schema } = appManager.serviceManager.backendApiService;

    const _resolveVerifyModalAndClearInterval = () => {
      if (this._verifyModalResolver) {
        this._verifyModalResolver.resolve();
        this._verifyModalResolver = null;
      }
      this._closeQrCodeModal();
      this._clearInterval();
    };

    this._interval = setInterval(async () => {
      try {
        if (this._code) {
          const { status } = await schema.send('auth.telegramCheckSignIn', { code: this._code });
          if (status === 'Success') {
            _resolveVerifyModalAndClearInterval();
          }
        }
      } catch (err) {
        const errorString = this._stringifyError(err);

        this._code = null;
        this._closeQrCodeModal();

        this._verifyModalResolver?.updateProps({
          error: errorString,
          onRegenerateCode: () => this._generateMessage(),
          onShowQrCode: () => this._onShowQrCode(),
        });

        this._updateStatus('CODE_EXPIRED');
      }
    }, 1000);

    await this._verifyModalResolver;
    _resolveVerifyModalAndClearInterval();
  }

  private _onShowQrCode() {
    if (this._code) {
      this._showQrCodeResolver = ModalController.create(AuthTelegramQrCodeModal, { link: this.tgBotLink });
    }
  }

  private _closeQrCodeModal() {
    if (this._showQrCodeResolver && !this._showQrCodeResolver.isResulted) {
      this._showQrCodeResolver.resolve();
      this._showQrCodeResolver = null;
    } else {
      this._showQrCodeResolver = null;
    }
  }

  private _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  private _stringifyError(err: any) {
    if (err instanceof RuntimeError) return err.message;
    if (err instanceof Error) return err.message;

    return String(err);
  }
}
