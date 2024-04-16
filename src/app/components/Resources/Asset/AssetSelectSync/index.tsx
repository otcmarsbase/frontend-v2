import { useCallback } from 'react';

import { HStack, Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { AssetImage } from '../AssetImage';

export type AssetSelectSyncProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.Asset, true>>,
  'renderItem'
>;

export const AssetSelectSync: React.FC<AssetSelectSyncProps> = (props) => {
  const renderItem = useCallback(
    (item: DeskGatewaySchema.Asset) => (
      <HStack>
        <AssetImage asset={item} borderRadius="50%" w="1.5rem" h="1.5rem" />
        <Text>{item?.info.title}</Text>
      </HStack>
    ),
    [],
  );

  return <UIKit.SelectSync<DeskGatewaySchema.Asset, true> {...props} renderItem={renderItem} />;
};
