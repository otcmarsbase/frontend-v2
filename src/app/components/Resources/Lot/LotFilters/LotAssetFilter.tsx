import { useCallback } from 'react';

import { AssetIconButton } from '@app/components';
import { SimpleGrid } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface LotAssetFilterProps {
  assets: DeskGatewaySchema.Asset[];
  value: DeskGatewaySchema.Asset[];
  onChange: (value: DeskGatewaySchema.Asset[]) => any;
}

export function LotAssetFilter({ assets, value, onChange }: LotAssetFilterProps) {
  const isEqualsCallback = useCallback(
    (asset1: DeskGatewaySchema.Asset, asset2: DeskGatewaySchema.Asset) => asset1?.id === asset2?.id,
    [],
  );

  const isSelectedCallback = useCallback(
    (asset: DeskGatewaySchema.Asset) =>
      value.findIndex((selectedAsset) => isEqualsCallback(asset, selectedAsset)) !== -1,
    [value, isEqualsCallback],
  );

  const onChangeCallback = useCallback(
    (asset: DeskGatewaySchema.Asset) => {
      return (isSelected: boolean) => {
        const newValues = isSelected ? value.concat(asset) : value.filter((m) => !isEqualsCallback(m, asset));
        if (onChange) onChange(newValues);
      };
    },
    [isEqualsCallback, value, onChange],
  );

  return (
    <SimpleGrid
      display={{ base: 'flex', md: 'grid' }}
      minH="3.5rem"
      columns={20}
      autoFlow="column"
      w="full"
      gap="0.5rem"
      overflowX="auto"
    >
      {assets.slice(0, 20).map((asset) => (
        <AssetIconButton
          asset={asset}
          key={asset.id}
          onSelect={onChangeCallback(asset)}
          isSelected={isSelectedCallback(asset)}
        />
      ))}
    </SimpleGrid>
  );
}
