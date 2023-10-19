import React, { useMemo } from 'react';

import { PaginationView, PaginationViewButtonProps, PaginationViewProps } from './PaginationView';

export interface PaginationProps {
  pageSizeOptions?: number[];

  showCaption?: boolean;
  showPageSize?: boolean;
  page?: number;
  total?: number;
  pageSize?: number;

  centerPageGroupNumber?: number;

  onChange?: (page: number, pageSize: number) => any;
  onShowSizeChange?: (size: number) => void;
  itemRender?: (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    element: React.ReactNode,
  ) => React.ReactNode;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;

  renderView?: React.ComponentType<PaginationViewProps>;
}

export const Pagination: React.FC<PaginationProps> = ({
  total = 0,
  pageSizeOptions = [25, 50, 100],
  pageSize = pageSizeOptions[0],
  page = 1,
  centerPageGroupNumber = 5,
  showCaption,
  showPageSize,
  onChange,
  onShowSizeChange,
  renderView = PaginationView,
}) => {
  const totalItems = useMemo(() => Math.ceil(total), [total]);

  const [currentPageFromItem, currentPageToItem] = useMemo(() => {
    const fromItem = pageSize * (page - 1) + 1;
    const toItem = pageSize * page;
    return [fromItem >= totalItems ? totalItems : fromItem, toItem >= totalItems ? totalItems : toItem];
  }, [page, pageSize, totalItems]);

  const lastPage = useMemo(() => Math.ceil(totalItems / pageSize), [totalItems, pageSize]);
  const buttons = useMemo(
    () => prepareButtons(page, centerPageGroupNumber, lastPage),
    [page, centerPageGroupNumber, lastPage],
  );

  return React.createElement(renderView, {
    onChangePage: (page) => onChange?.(page, pageSize),
    onShowSizeChange: onShowSizeChange,
    page,
    showCaption,
    showPageSize,
    lastPage,
    currentPageFromItem,
    currentPageToItem,
    totalItems,
    buttons,
    pageSize,
    pageSizeOptions,
  });
};

function prepareButtons(currentPage: number, centerPageGroupNumber: number, lastPage: number) {
  const beforeSplitter: PaginationViewButtonProps =
    currentPage - centerPageGroupNumber >= 0 && currentPage !== 1
      ? {
          key: 'before_splitter',
          page: currentPage - centerPageGroupNumber > 1 ? currentPage - centerPageGroupNumber : 1,
          display: '...',
          isSelected: false,
        }
      : null;

  const afterSplitter: PaginationViewButtonProps =
    currentPage + centerPageGroupNumber - 1 <= lastPage && currentPage !== lastPage
      ? {
          key: 'after_splitter',
          page: currentPage + centerPageGroupNumber < lastPage ? currentPage + centerPageGroupNumber : lastPage,
          display: '...',
          isSelected: false,
        }
      : null;

  const leftRightElements = Math.floor(centerPageGroupNumber / 2) || 1;
  const [minPage, maxPage] = [currentPage - leftRightElements, currentPage + leftRightElements];

  const centerPages: PaginationViewButtonProps[] = new Array(maxPage - minPage + 1)
    .fill(null)
    .map((m, index) => minPage + index)
    .filter((page) => page > 1 && page < lastPage)
    .map((page) => ({
      key: page,
      page: page,
      display: `${page}`,
      isSelected: currentPage === page,
    }));

  const buttons: PaginationViewButtonProps[] = [
    { key: 1, page: 1, display: '1', isSelected: currentPage === 1 },
    beforeSplitter,
    ...centerPages,
    afterSplitter,
    lastPage !== 0 &&
      lastPage !== 1 && {
        key: lastPage,
        page: lastPage,
        display: `${lastPage}`,
        isSelected: currentPage === lastPage,
      },
  ].filter(Boolean);

  return buttons;
}
