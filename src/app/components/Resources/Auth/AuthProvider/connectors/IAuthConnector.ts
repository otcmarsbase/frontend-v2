export interface IAuthConnector<TStatus, TInfo> {
  status: TStatus | null;
  info: TInfo;

  execute: () => Promise<void>;
}
