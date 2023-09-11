export interface ICommandHandler<Payload, Result> {
  validate(payload: Payload): Promise<any>;
  execute(payload: Payload): Promise<Result>;
}
