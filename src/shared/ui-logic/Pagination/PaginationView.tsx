import { PropsWithChildren, useMemo } from 'react';

import { Button, HStack, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useLoadingCallback } from '@shared/ui-kit';

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

  currentPageFromItem: number;
  currentPageToItem: number;

  totalItems: number;

  buttons: PaginationViewButtonProps[];
  onChangePage?: (page: number) => void;
}

export const PaginationView: React.FC<PaginationViewProps> = (props) => {
  const { showCaption } = props;
  return (
    <PaginationViewContainer {...props}>
      {showCaption && <PaginationViewCaption {...props} />}
      <PaginationViewButtonGroup {...props} />
    </PaginationViewContainer>
  );
};

export const PaginationViewContainer: React.FC<
  PropsWithChildren<PaginationViewProps>
> = ({ children }) => {
  const styles = useMultiStyleConfig('Pagination');
  return <HStack __css={styles.container}>{children}</HStack>;
};

export const PaginationViewCaption: React.FC<PaginationViewProps> = ({
  currentPageFromItem,
  currentPageToItem,
  totalItems,
}) => {
  return (
    <Text color="muted" fontSize="sm">
      Showing {currentPageFromItem} to {currentPageToItem} of {totalItems}{' '}
      results
    </Text>
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
          onClick={() =>
            page !== key ? onChangePageLoading.keyLoad(key)(page) : null
          }
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
    <HStack
      spacing="3"
      justifyContent="space-between"
      width={{ base: 'full', md: 'auto' }}
      __css={styles.buttonGroup}
    >
      <Button
        isDisabled={
          currentPageFromItem <= 1 || onChangePageLoading.isLoadingAny
        }
        onClick={() => onChangePageLoading.keyLoad('prev')(page - 1)}
        isLoading={onChangePageLoading.keyLoad('prev').isLoading}
        __css={styles.pageControl}
      >
        Prev
      </Button>

      {buttonElements}

      <Button
        isDisabled={
          currentPageToItem >= totalItems || onChangePageLoading.isLoadingAny
        }
        onClick={() => onChangePageLoading.keyLoad('next')(page + 1)}
        isLoading={onChangePageLoading.keyLoad('next').isLoading}
        __css={styles.pageControl}
      >
        Next
      </Button>
    </HStack>
  );
};
