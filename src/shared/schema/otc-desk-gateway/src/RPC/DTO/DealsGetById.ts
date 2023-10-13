import { Resource } from '../../Resource';

export namespace DealGetById {
  export type Payload = {
    id: number;
  };
  export type Result = Resource.Deal.Deal;
}
