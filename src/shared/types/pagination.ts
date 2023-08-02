export namespace Paginate {
  export interface PaginationOptions {
    page?: number;
    limit?: number;
    fromId?: string;
    startTime?: number;
    endTime?: number;
    sorting?: 'descending' | 'ascending';
  }

  export interface PaginationItems<T> extends PaginationOptions {
    total: number;
    items: T[];
  }
}
