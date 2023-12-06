import { Fragment, useCallback, useMemo, useState } from 'react';

import { SelectDefaultView } from './SelectDefaultView';
import { SelectOption, SelectViewProps, MultiDependentValue } from './types';

export interface SelectSyncProps<T, M extends boolean = boolean> {
  items: T[];
  renderKey?: (item: T, index: number) => React.Key;
  renderItem?: (item: T, index: number) => React.ReactNode;
  equalsItems?: (first: T, second: T) => boolean;
  searchItem?: (item: T, search?: string) => boolean;

  value?: MultiDependentValue<T, M>;
  onChange?: (item: MultiDependentValue<T, M>) => void;
  onSearch?: (search: string) => void;

  children?: (props: SelectViewProps<T, M>) => React.ReactNode;

  isDisabled?: boolean;
  isLoading?: boolean;
  placeholder?: React.ReactNode;
  isClearable?: boolean;
  isInvalid?: boolean;
  isMulti?: M;
}

export function SelectSync<T, M extends boolean = boolean>({
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
  isMulti,
}: SelectSyncProps<T, M>) {
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
    (key: string[] | string) => {
      if (!onChange) return;

      if (!key) {
        onChange(null);
        return;
      }

      if (key instanceof Array) {
        const items = key.map((k) => getByKey(k)?.item).filter(Boolean);

        onChange(items as MultiDependentValue<T, M>);
        return;
      }

      const option = getByKey(key);
      onChange(option?.item as MultiDependentValue<T, M>);
    },
    [onChange, getByKey],
  );

  const renderOption = useCallback(
    (option: SelectOption<T>) => {
      return renderItem(option.item, option.index);
    },
    [renderItem],
  );

  const selectedOption = useMemo(() => {
    if (Array.isArray(value)) {
      return value.map((item) => getByItem(item)) as MultiDependentValue<SelectOption<T>, M>;
    } else {
      return getByItem(value as T) as MultiDependentValue<SelectOption<T>, M>;
    }
  }, [value, getByItem]);

  const selectedKey = useMemo(() => {
    if (Array.isArray(selectedOption)) {
      return selectedOption?.map(({ key }) => key) as MultiDependentValue<string, M>;
    }

    return selectedOption?.key as MultiDependentValue<string, M>;
  }, [selectedOption]);

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
        isMulti,
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
