import { useCallback } from 'react';

import { AssetIconButton } from '@app/components';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';

export interface LotAssetFilterProps {
  assets: Resource.Asset.Asset[];
  value: Resource.Asset.Asset[];
  onChange: (value: Resource.Asset.Asset[]) => any;
}

export function LotAssetFilter({ assets, value, onChange }: LotAssetFilterProps) {
  const isEqualsCallback = useCallback(
    (asset1: Resource.Asset.Asset, asset2: Resource.Asset.Asset) => asset1?.id === asset2?.id,
    [],
  );

  const isSelectedCallback = useCallback(
    (asset: Resource.Asset.Asset) => value.findIndex((selectedAsset) => isEqualsCallback(asset, selectedAsset)) !== -1,
    [value, isEqualsCallback],
  );

  const onChangeCallback = useCallback(
    (asset: Resource.Asset.Asset) => {
      return (isSelected: boolean) => {
        const newValues = isSelected ? value.concat(asset) : value.filter((m) => !isEqualsCallback(m, asset));
        if (onChange) onChange(newValues);
      };
    },
    [isEqualsCallback, value, onChange],
  );

  return (
    <SimpleGrid columns={20} w="full" gap="0.5rem">
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
