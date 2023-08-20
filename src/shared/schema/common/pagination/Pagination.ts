export namespace Pagination {
  export interface Params {}

  export interface Result<T> {
    items: T[];
    total: number;
  }
}
