import { Resource } from '../../Resource';

export namespace FindOffersQuery {
  // TODO Уточнить payload с учетом пагинации и фильтрации
  export type Payload = {};
  export type Result = Resource.Offer.Offer[];
}
