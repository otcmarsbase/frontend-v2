export type PaginationPayload<Props extends Record<string, any> = {}> = Props & {
  skip?: number;
  limit?: number;
};

export interface Pagination<T> {
  items: T[];
  total: number;
}

export type CompositeFilter<TRawFilter extends Record<string, any>> = Partial<TRawFilter> & {
  AND?: CompositeFilter<TRawFilter>[];
  OR?: CompositeFilter<TRawFilter>[];
  NOT?: CompositeFilter<TRawFilter>;
};

export type QueryListPayload<TFilter extends Record<string, any>> = {
  page?: PaginationPayload;
  filter?: TFilter;
};

// export type FilterPayloadInferRawFilter<T> = T extends FilterPayload<infer RawFilter> ? RawFilter : never;
