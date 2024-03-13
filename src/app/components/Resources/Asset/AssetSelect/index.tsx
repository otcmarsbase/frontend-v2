import { useCallback } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { HStack, UIKit } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';

import { AssetImage } from '../AssetImage';

type SelectType = DeskGatewaySchema.Asset;

export interface AssetSelectProps extends Omit<UIKit.SelectAsyncProps<SelectType>, 'load' | 'renderItem'> {}

export const AssetSelect: React.FC<AssetSelectProps> = (props) => {
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();

  const renderKey = useCallback((item: SelectType) => item.id, []);
  const renderItem = useCallback(
    (item: SelectType) => (
      <HStack>
        <AssetImage asset={item} borderRadius="50%" w="1.5rem" h="1.5rem" />
        <Text>{item?.info.title}</Text>
      </HStack>
    ),
    [],
  );

  const equalsItems = useCallback((item1: SelectType, item2: SelectType) => Object.is(item1?.id, item2?.id), []);
  const load = useCallback(async () => {
    const { items } = await queryClient.fetchQuery({
      queryKey: ['asset.list', { limit: 5 }],
      queryFn: () => rpcSchema.send('asset.list', { page: { limit: 5 } }),
    });
    return items;
  }, [rpcSchema, queryClient]);

  return (
    <UIKit.SelectAsync
      isClearable
      searchItem={(item, search) => item.info.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1}
      renderKey={renderKey}
      renderItem={renderItem}
      load={load}
      equalsItems={equalsItems}
      {...props}
    />
  );
};
