import { useState, useMemo } from 'react';

export function usePagination(defaultPage, defaultPageSize: number) {
  const [page, setPage] = useState(defaultPage);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [total, setTotal] = useState(0);

  const paginationOptions = useMemo(
    () => ({
      page,
      total,
      pageSize,
    }),
    [page, pageSize, total],
  );
  const isEmpty = useMemo(() => !total, [total]);

  const onChangePage = (page: number) => setPage(page);
  const onShowSizeChange = (size: number) => setPageSize(size);

  return {
    page,
    pageSize,
    total,
    setTotal,
    paginationOptions,
    isEmpty,
    onChangePage,
    onShowSizeChange,
  };
}
