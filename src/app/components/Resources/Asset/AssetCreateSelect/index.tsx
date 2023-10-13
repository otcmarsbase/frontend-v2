import { useCallback, useState } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { Text } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { HStack, UIKit } from '@shared/ui-kit';

import { AssetImage } from '../AssetImage';

type SelectType = Resource.Asset.Asset | string;

export interface AssetCreateSelectProps extends Omit<UIKit.SelectAsyncProps<SelectType>, 'load' | 'renderItem'> {}

export const AssetCreateSelect: React.FC<AssetCreateSelectProps> = (props) => {
  const rpcSchema = useRpcSchemaClient();
  const [search, setSearch] = useState<string>();

  const renderKey = useCallback((item: SelectType) => (typeof item === 'string' ? item : item.id), []);
  const renderItem = useCallback(
    (item: SelectType) =>
      typeof item === 'string' ? (
        <Text>{item}</Text>
      ) : (
        <HStack>
          <AssetImage asset={item} borderRadius="50%" w="1.5rem" h="1.5rem" />
          <Text>{item?.info.title}</Text>
        </HStack>
      ),
    [],
  );

  const equalsItems = useCallback((item1: SelectType, item2: SelectType) => {
    if (typeof item1 === 'string') return typeof item2 === 'string' && item1 === item2;
    if (typeof item1 === 'object') return typeof item2 === 'object' && item1?.id === item2?.id;
    return false;
  }, []);

  const load = useCallback(async () => {
    const pagination = await rpcSchema.send('asset.list', { limit: 5, search });
    const items = pagination.items;

    if (items.length > 0) return items;
    return [search];
  }, [rpcSchema, search]);

  return (
    <UIKit.SelectAsync
      isClearable
      onSearch={setSearch}
      renderKey={renderKey}
      renderItem={renderItem}
      load={load}
      equalsItems={equalsItems}
      {...props}
    />
  );
};
