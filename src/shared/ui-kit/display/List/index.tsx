import { Fragment, PropsWithChildren } from 'react';

import { Button, Stack, StackProps } from '@chakra-ui/react';

import { Empty } from '../Empty';
import { Loader as DefaultLoader } from '../Loader';

export interface ListLoaderProps {
  isLoading?: boolean;
}

export interface ListProps<T> extends StackProps {
  items: T[];
  itemRender: (value: T, index: number, data: T[]) => React.ReactNode;
  itemKey: (value: T, index: number, data: T[]) => React.Key;
  emptyText?: React.ReactNode;
  isLoading?: boolean;
  footer?: React.ReactNode;
  loader?: React.ComponentType<PropsWithChildren<ListLoaderProps>>;
}

export function List<T>({
  items = [],
  footer = null,
  itemKey = (value, key) => key,
  itemRender = () => <></>,
  emptyText = <Empty createButton={<Button onClick={() => {}}>Create item</Button>} />,
  isLoading = false,
  loader: Loader = DefaultLoader,
  ...stackProps
}: ListProps<T>) {
  return (
    <Loader isLoading={isLoading}>
      <Stack {...stackProps}>
        {items.length > 0
          ? items.map((item, index, arr) => (
              <Fragment key={itemKey(item, index, arr)}>{itemRender(item, index, arr)}</Fragment>
            ))
          : emptyText}
      </Stack>
      {footer}
    </Loader>
  );
}
