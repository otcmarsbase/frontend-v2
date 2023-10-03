import { useMemo, useCallback, useEffect, useState } from 'react';

import { UIHooks } from '@app/hooks';
import { useLoadingCallback } from '@shared/ui-kit';

import { SelectSync, SelectSyncProps } from './SelectSync';

export interface SelectAsyncProps<T, M extends boolean = boolean> extends Omit<SelectSyncProps<T, M>, 'items'> {
  load: () => T[] | Promise<T[]>;
  unload?: () => any;
  filterItems?: (items: T[], search?: string) => T[];
}

export function SelectAsync<T, M extends boolean = boolean>({
  load,
  unload,
  isDisabled,
  isLoading,
  filterItems,
  ...props
}: SelectAsyncProps<T, M>) {
  const [data, setData] = useState<T[]>([]);
  const filteredData = useMemo(() => (filterItems ? filterItems(data) : data), [filterItems, data]);

  const loader = useCallback(async () => {
    const items = await load();
    setData(items);
  }, [load]);

  const toastLoadingCallback = UIHooks.useToastInnerCallback(loader, {});
  const loadingCallback = useLoadingCallback(toastLoadingCallback);

  useEffect(() => {
    loadingCallback();

    return () => {
      if (unload) unload();
    };
  }, [loadingCallback, unload]);

  return (
    <SelectSync
      items={filteredData}
      // isDisabled={typeof isDisabled === 'boolean' ? isDisabled : loadingCallback.isLoading}
      isLoading={typeof isLoading === 'boolean' ? isLoading : loadingCallback.isLoading}
      {...props}
    />
  );
}
