import { Resource } from '../../Resource';

export namespace FindLotsQuery {
  // TODO Уточнить payload с учетом пагинации и фильтрации
  export type Payload = {};
  export type Result = Resource.Lot.Lot[];
}
