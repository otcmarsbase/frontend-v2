import { AuthWagmiConnectorDictionary, IAuthWagmiConnectorInfo, AuthWagmiConnectorType } from '@app/components';
import { appManager, ModalController } from '@app/logic';
import { RuntimeError } from '@ddd/errors';
import { PortalInstanceControl } from '@packages/berish-react-portal';
import { connect, getAccount, signMessage } from '@wagmi/core';

import { AuthWagmiVerifyModal, AuthWagmiVerifyModalProps } from '../modals';

import { IAuthConnector } from './IAuthConnector';

export type AuthWagmiStatusType = 'CONNECT_WALLET' | 'VERIFY_WALLET';

export class AuthWagmiConnector implements IAuthConnector<AuthWagmiStatusType, IAuthWagmiConnectorInfo>{
  private _status: AuthWagmiStatusType;

  private _verifyModalResolver?: PortalInstanceControl<AuthWagmiVerifyModalProps, void>;

  private readonly _type: AuthWagmiConnectorType;

  constructor(type: AuthWagmiConnectorType) {
    this._type = type
  }


  get status() {
    if (this._status) return this._status

    return null
  }

  get info() {
    return AuthWagmiConnectorDictionary.get(this._type)
  }

  async execute() {
    await this.signInWithConnector();
  }

  private _updateStatus(status: AuthWagmiStatusType | null) {
    this._status = status
  }

  async signInWithConnector(): Promise<void> {
    if (this._verifyModalResolver && !this._verifyModalResolver.isResulted) {
      // Its already exists, ok - Update initial states
      this._updateStatus('VERIFY_WALLET');
      this._verifyModalResolver.updateProps({});
    } else {
      // Its new, ok - Open Modal
      this._updateStatus('CONNECT_WALLET');
      this._verifyModalResolver = ModalController.create(AuthWagmiVerifyModal, {});
    }

    try {
      await this._signInWithConnector();

      // All ok, close modal
      this._verifyModalResolver?.resolve();
      this._updateStatus('VERIFY_WALLET');
    } catch (err) {
      const errorString = this._stringifyError(err);

      this._verifyModalResolver?.updateProps({
        error: errorString,
        onTryAgain: () => this.signInWithConnector(),
      });
    }

    await this._verifyModalResolver;
    this._verifyModalResolver = null;
    this._updateStatus(null);
  }

  private async _signInWithConnector(): Promise<void> {
    const { schema } = appManager.serviceManager.backendApiService;

    if (!this.info) return void 0;

    const wagmiAccount = getAccount();

    const connectedAddress =
      wagmiAccount.connector?.id === this.info.wagmiConnector.id
        ? wagmiAccount.address
        : await connect({ connector: this.info.wagmiConnector })
          .then((result) => result.account)
          .catch<`0x${string}`>(() => null);
    if (!connectedAddress) return void 0;

    const generatedMessage = await schema.send('auth.generateMessage', {
      domain: window.location.host,
      uri: window.location.origin,
      address: connectedAddress,
    });

    const signature = await signMessage({ message: generatedMessage.message });

    await schema.send('auth.signIn', {
      message: generatedMessage.message,
      signatureHash: generatedMessage.signatureHash,
      signature,
    });
  }

  private _stringifyError(err: any) {
    if (err instanceof RuntimeError) return err.message;
    if (err instanceof Error) return err.message;

    return String(err);
  }
}
