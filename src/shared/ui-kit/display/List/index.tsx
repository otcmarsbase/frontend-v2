import { Fragment } from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

import { Empty } from '../Empty';
import { Loader } from '../Loader';

export interface ListProps<T> extends StackProps {
  items: T[];
  itemRender: (value: T, index: number, data: T[]) => React.ReactNode;
  itemKey: (value: T, index: number, data: T[]) => React.Key;
  emptyText?: React.ReactNode;
  isLoading?: boolean;
}

export function List<T>({
  items = [],
  itemKey = (value, key) => key,
  itemRender = () => <></>,
  emptyText = (
    <Empty
      createButton={{
        label: 'Create',
        onCreate: () => {},
      }}
    />
  ),
  isLoading = false,
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
    </Loader>
  );
}
