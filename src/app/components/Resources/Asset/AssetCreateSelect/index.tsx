import { useCallback, useRef, useState } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { HStack, UIKit } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';

import { AssetImage } from '../AssetImage';

type SelectType = DeskGatewaySchema.AssetKey | DeskGatewaySchema.Asset | string;

export interface AssetCreateSelectProps
  extends Omit<UIKit.SelectAsyncProps<SelectType, false>, 'load' | 'renderItem'> {}

export const AssetCreateSelect: React.FC<AssetCreateSelectProps> = ({ value, ...props }) => {
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();
  const itemsRef = useRef<DeskGatewaySchema.Asset[]>([]);
  const [search, setSearch] = useState<string>();

  const equalsItems = useCallback((item1: SelectType, item2: SelectType) => {
    if (typeof item1 === 'string') return typeof item2 === 'string' && item1 === item2;
    if (typeof item1 === 'object') return typeof item2 === 'object' && item1?.id === item2?.id;
    return false;
  }, []);

  const renderKey = useCallback((item: SelectType) => (typeof item === 'string' ? item : item.id), []);
  const renderItem = useCallback(
    (item: SelectType) => {
      if (typeof item === 'string') return <Text>{item}</Text>;
      if (item.resource === 'asset_key') {
        item = itemsRef.current.find((m) => equalsItems(item, m));
      }
      if (item.resource === 'asset')
        return typeof item === 'string' ? (
          <Text>{item}</Text>
        ) : (
          <HStack>
            <AssetImage asset={item} borderRadius="50%" w="1.5rem" h="1.5rem" />
            <Text>{item?.info.title}</Text>
          </HStack>
        );

      return null;
    },
    [equalsItems],
  );

  const load = useCallback(async () => {
    const { items } = await queryClient.fetchQuery({
      queryKey: ['asset.list', { search }],
      queryFn: () => rpcSchema.send('asset.list', { filter: { search, status: ['ACTIVE'] } }),
    });
    itemsRef.current = items;
    const notFound = !search ? (typeof value === 'string' ? value : void 0) : search;

    return [...items, notFound].filter(Boolean);
  }, [rpcSchema, search, value, queryClient]);

  return (
    <UIKit.SelectAsync
      isClearable
      onSearch={setSearch}
      renderKey={renderKey}
      renderItem={renderItem}
      load={load}
      equalsItems={equalsItems}
      value={value}
      {...props}
    />
  );
};
