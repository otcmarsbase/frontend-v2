import { useCallback } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { Text, Image } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { HStack, UIKit } from '@shared/ui-kit';

type SelectType = Resource.Asset.Asset;

export interface AssetSelectProps extends Omit<UIKit.SelectAsyncProps<SelectType>, 'load' | 'renderItem'> {}

export const AssetSelect: React.FC<AssetSelectProps> = (props) => {
  const rpcSchema = useRpcSchemaClient();

  const renderKey = useCallback((item: SelectType) => item.id, []);
  const renderItem = useCallback(
    (item: SelectType) => (
      <HStack>
        <Image borderRadius="50%" src={item?.info.logo_url} w="1.5rem" h="1.5rem" />
        <Text>{item?.info.title}</Text>
      </HStack>
    ),
    [],
  );

  const equalsItems = useCallback((item1: SelectType, item2: SelectType) => Object.is(item1?.id, item2?.id), []);
  const load = useCallback(async () => {
    const pagination = await rpcSchema.send('asset.list', { limit: 5 });
    return pagination.items;
  }, [rpcSchema]);

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
