export type PaginationPayload<Props extends Record<string, any> = {}> = Props & {
  skip?: number;
  limit?: number;
};

export interface Pagination<T> {
  items: T[];
  total: number;
}
