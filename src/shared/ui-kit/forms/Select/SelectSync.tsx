import { useCallback, useMemo } from 'react';

import { SelectView, SelectViewChildrenProps, SelectViewProps } from './SelectView';

export interface SelectSyncProps<T> extends Omit<SelectViewProps, 'value' | 'onChange' | 'keys' | 'renderItem' | 'children'> {
  items: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
  equalsItems?: (item1: T, item2: T) => boolean;
  value?: T;
  onChange?: (item: T) => any;
  children?: (props: SelectSyncChildrenProps<T>) => React.ReactNode;
}

export interface SelectSyncChildrenProps<T> extends Omit<SelectViewChildrenProps, 'keys' | 'renderOption'> {
  items: T[];
  renderOptions: React.ReactNode[];
  renderOption: (item: T, index: number) => React.ReactNode;
}

export function SelectSync<T>({
  items,
  renderItem,
  equalsItems = (item1, item2) => Object.is(item1, item2),
  value,
  onChange,
  children,
  ...props
}: SelectSyncProps<T>) {
  const getItemEquals = useCallback<(item: T) => T>(
    (item) => {
      return item && items.find((item2) => equalsItems(item, item2));
    },
    [items, equalsItems],
  );

  const getKeyByItem = useCallback(
    (item: T) => {
      const index = item ? items.indexOf(getItemEquals(item)) : -1;
      if (index === -1) return null;
      return String(index);
    },
    [items, getItemEquals],
  );

  const getItemByKey = useCallback(
    (key: string): T => {
      if (typeof key === 'undefined' || key === null || key === '-1') return null;
      return items && items[key];
    },
    [items],
  );

  const keys = useMemo(() => items.map((_, index) => String(index)), [items]);
  const selectedKey = useMemo(() => getKeyByItem(value), [value, getKeyByItem]);

  const onChangeCallback = useCallback(
    (indexItem: string) => {
      if (onChange) {
        const item = getItemByKey(indexItem);
        onChange?.(item);
      }
    },
    [onChange, getItemByKey],
  );

  const renderKey = useCallback(
    (key: string, index: number) => {
      const item = getItemByKey(key);
      return renderItem ? renderItem(item, index) : String(item);
    },
    [renderItem, getItemByKey],
  );

  const convertChildren = ({ keys, renderOption, ...other }: SelectViewChildrenProps): SelectSyncChildrenProps<T> => {
    return {
      items: keys.map((key) => getItemByKey(key)),
      renderOption: (item, index) => renderOption(getKeyByItem(item), index),
      ...other,
    };
  };

  return (
    <SelectView
      keys={keys}
      selectedKey={selectedKey}
      onChange={onChangeCallback}
      renderKey={renderKey}
      children={children && ((props) => children(convertChildren(props)))}
      {...props}
    />
  );
}
