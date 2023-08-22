export interface PaginationPayload {
  skip: number;
  limit: number;
}

export interface Pagination<T> {
  items: T[];
  total: number;
}
