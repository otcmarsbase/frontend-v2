import { useState, useMemo, useCallback } from 'react';

import { useQueryParams } from '@shared/hooks';
import * as yup from 'yup';

export const PaginationQueryParamsSchema = yup.lazy((_, { context }) =>
  yup.object({
    skip: yup.number().default(0),
    limit: yup.number().default(context.defaultPageSize),
  }),
);

export function usePagination(defaultPageSize: number = 10) {
  const { queryParams, setQueryParams } = useQueryParams(
    PaginationQueryParamsSchema.resolve({ context: { defaultPageSize } }),
  );
  const [page, setPage] = useState(() => queryParams.skip / queryParams.limit + 1);
  const [pageSize, setPageSize] = useState(() => queryParams.limit);
  const [total, setTotal] = useState(0);

  const isEmpty = useMemo(() => !total, [total]);

  const skip = useMemo(() => (page - 1) * pageSize, [page, pageSize]);

  const onChange = useCallback(
    (page: number) => {
      setQueryParams({ ...queryParams, skip: (page - 1) * pageSize });
      setPage(page);
    },
    [setQueryParams, pageSize, queryParams],
  );
  const onShowSizeChange = useCallback(
    (size: number) => {
      setQueryParams({ ...queryParams, limit: size });
      setPage(1);
      setPageSize(size);
    },
    [setQueryParams, queryParams],
  );

  return {
    page,
    pageSize,
    total,
    skip,
    limit: pageSize,
    setTotal,
    isEmpty,
    onChange,
    onShowSizeChange,
  };
}
