import { PropsWithChildren, useMemo } from 'react';

import { Button, HStack, Text, useMultiStyleConfig } from '@chakra-ui/react';

import { SelectSync } from '../../forms';
import { useLoadingCallback } from '../Loader';

export interface PaginationViewButtonProps {
  key: React.Key;
  page: number;
  display: string;
  isSelected: boolean;
}

export interface PaginationViewProps {
  showCaption?: boolean;
  page: number;
  lastPage: number;

  showPageSize?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];

  currentPageFromItem: number;
  currentPageToItem: number;

  totalItems: number;

  buttons: PaginationViewButtonProps[];
  onChangePage?: (page: number) => void;
  onShowSizeChange?: (size: number) => void;
}

export const PaginationView: React.FC<PaginationViewProps> = (props) => {
  const { showCaption, showPageSize } = props;
  return (
    <PaginationViewContainer {...props}>
      {showCaption && <PaginationViewCaption {...props} />}
      <PaginationViewButtonGroup {...props} />
      {showPageSize && <PaginationViewPageSize {...props} />}
    </PaginationViewContainer>
  );
};

export const PaginationViewContainer: React.FC<PropsWithChildren<PaginationViewProps>> = ({ children }) => {
  const styles = useMultiStyleConfig('Pagination');
  return (
    <HStack __css={styles.container} gap="1.5rem" flexDirection={{ base: 'column', md: 'row' }}>
      {children}
    </HStack>
  );
};

export const PaginationViewCaption: React.FC<PaginationViewProps> = ({
  currentPageFromItem,
  currentPageToItem,
  totalItems,
}) => {
  return (
    <Text color="dark.50" fontSize="sm" fontWeight="500">
      Showing {currentPageFromItem} - {currentPageToItem} out of {totalItems}
    </Text>
  );
};

export const PaginationViewPageSize: React.FC<PaginationViewProps> = ({
  pageSize,
  onShowSizeChange,
  pageSizeOptions,
}) => {
  return (
    <HStack spacing="0.75rem" flexShrink="0">
      <Text fontSize="sm" color="dark.50" fontWeight="500" whiteSpace="nowrap">
        Show records
      </Text>
      <SelectSync<number, false>
        value={pageSize}
        onChange={onShowSizeChange ?? undefined}
        items={pageSizeOptions}
        renderItem={(item) => item}
      />
    </HStack>
  );
};

export const PaginationViewButtonGroup: React.FC<PaginationViewProps> = ({
  onChangePage,
  page,
  currentPageFromItem,
  currentPageToItem,
  totalItems,
  buttons,
  ...props
}) => {
  const styles = useMultiStyleConfig('Pagination', props);
  const onChangePageLoading = useLoadingCallback(onChangePage);

  const buttonElements = useMemo(
    () =>
      buttons.map(({ key, page, display, isSelected }) => (
        <Button
          key={key}
          variant={isSelected ? 'solid' : 'outline'}
          onClick={() => onChangePageLoading.keyLoad(key)(page)}
          isLoading={onChangePageLoading.keyLoad(key).isLoading}
          disabled={onChangePageLoading.isLoadingAny}
          __css={{
            ...styles.page,
            ...(isSelected ? styles.activePage : {}),
          }}
        >
          {display}
        </Button>
      )),
    [onChangePageLoading, buttons, styles],
  );

  return (
    <HStack spacing="3" __css={styles.buttonGroup}>
      <Button
        isDisabled={currentPageFromItem <= 1 || onChangePageLoading.isLoadingAny}
        onClick={() => onChangePageLoading.keyLoad('prev')(page - 1)}
        isLoading={onChangePageLoading.keyLoad('prev').isLoading}
        __css={styles.pageControl}
      >
        Prev
      </Button>

      {buttonElements}

      <Button
        isDisabled={currentPageToItem >= totalItems || onChangePageLoading.isLoadingAny}
        onClick={() => onChangePageLoading.keyLoad('next')(page + 1)}
        isLoading={onChangePageLoading.keyLoad('next').isLoading}
        __css={styles.pageControl}
      >
        Next
      </Button>
    </HStack>
  );
};
