import { Fragment, useCallback, useMemo, useState } from 'react';

import { SelectDefaultView } from './SelectDefaultView';
import { SelectOption, SelectViewProps } from './types';

export interface SelectSyncProps<T> {
  items: T[];
  renderKey?: (item: T, index: number) => React.Key;
  renderItem?: (item: T, index: number) => React.ReactNode;
  equalsItems?: (first: T, second: T) => boolean;
  searchItem?: (item: T, search?: string) => boolean;

  value?: T;
  onChange?: (item: T) => void;
  onSearch?: (search: string) => void;

  children?: (props: SelectViewProps<T>) => React.ReactNode;

  isDisabled?: boolean;
  isLoading?: boolean;
  placeholder?: React.ReactNode;
  isClearable?: boolean;
  isInvalid?: boolean;
}

export function SelectSync<T>({
  items = [],
  renderKey = defaultRenderKey,
  renderItem = defaultRenderItem,
  equalsItems = defaultEqualsItems,
  searchItem,

  value,
  onChange,
  onSearch,
  children = defaultChildren,
  isDisabled,
  isLoading,
  placeholder,
  isClearable,
  isInvalid,
}: SelectSyncProps<T>) {
  const [search, setSearch] = useState<string>(null);
  const options = useMemo<SelectOption<T>[]>(
    () =>
      items
        .filter((item) => (searchItem && search ? searchItem(item, search) : true))
        .map((item, index) => ({
          item,
          index,
          key: String(renderKey(item, index)),
        })),
    [items, search, searchItem, renderKey],
  );

  const getByItem = useCallback(
    (item: T) => {
      return options.find((infoItem) => equalsItems(infoItem.item, item));
    },
    [equalsItems, options],
  );

  const getByKey = useCallback(
    (key: string) => {
      return options.find((infoItem) => infoItem.key === key);
    },
    [options],
  );

  const onChangeOptionCallback = useCallback(
    (key: string) => {
      if (onChange) {
        const infoItem = getByKey(key);
        if (infoItem) onChange?.(infoItem.item);
      }
    },
    [onChange, getByKey],
  );

  const renderOption = useCallback(
    (option: SelectOption<T>) => {
      return renderItem(option.item, option.index);
    },
    [renderItem],
  );

  const selectedOption = useMemo(() => getByItem(value), [value, getByItem]);
  const selectedKey = useMemo(() => selectedOption?.key, [selectedOption]);

  const onSearchCallback = useCallback(
    (search: string) => {
      search ||= void 0;

      setSearch(search);
      if (onSearch) onSearch(search);
    },
    [onSearch],
  );

  return (
    <Fragment>
      {children({
        options,
        selectedOption,
        selectedKey,
        onChange: onChangeOptionCallback,
        renderOption,
        isDisabled: !!isDisabled,
        isLoading: !!isLoading,
        placeholder: placeholder,
        isClearable: !!isClearable,
        isInvalid: !!isInvalid,
        search:
          searchItem || onSearch
            ? {
                value: search,
                onSearch: onSearchCallback,
              }
            : void 0,
      })}
    </Fragment>
  );
}

const defaultRenderKey: SelectSyncProps<any>['renderKey'] = (item, index) => String(index);
const defaultRenderItem: SelectSyncProps<any>['renderItem'] = (item, index) => String(index);
const defaultEqualsItems: SelectSyncProps<any>['equalsItems'] = (first, second) => Object.is(first, second);
const defaultChildren: SelectSyncProps<any>['children'] = (props) => <SelectDefaultView {...props} />;
