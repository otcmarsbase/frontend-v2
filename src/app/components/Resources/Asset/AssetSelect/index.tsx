import { useCallback } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { Text, Image } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { HStack, UIKit } from '@shared/ui-kit';

type SelectType = Resource.Asset.Asset;

export interface AssetSelectProps extends Omit<UIKit.SelectAsyncProps<SelectType>, 'load' | 'renderItem'> {}

export const AssetSelect: React.FC<AssetSelectProps> = (props) => {
  const rpcSchema = useRpcSchemaClient();

  const renderItem = useCallback(
    (item: SelectType) => (
      <HStack>
        <Image borderRadius="50%" src={item?.info.logo_url} w="1.5rem" h="1.5rem" />
        <Text>{item?.info.title}</Text>
      </HStack>
    ),
    [],
  );
  const renderIcon = useCallback(
    (item: SelectType) => <Image borderRadius="50%" src={item?.info.logo_url} w="1.5rem" h="1.5rem" />,
    [],
  );
  const renderValue = useCallback((item: SelectType) => item?.info.title, []);
  const equalsItems = useCallback((item1: SelectType, item2: SelectType) => Object.is(item1?.id, item2?.id), []);
  const load = useCallback(async () => {
    const pagination = await rpcSchema.send('asset.list', {});
    return pagination.items;
  }, []);

  return (
    <UIKit.SelectAsync
      renderValue={renderValue}
      renderItem={renderItem}
      renderIcon={renderIcon}
      load={load}
      equalsItems={equalsItems}
      {...props}
    />
  );
};
