import { useCallback } from 'react';

import { SimpleGrid } from '@chakra-ui/react';
import { UILogic } from '@components/ui-logic';
import { Resource } from '@schema/api-gateway';

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
        const newValues = isSelected ? value.filter((m) => !isEqualsCallback(m, asset)) : value.concat(asset);

        if (onChange) onChange(newValues);
      };
    },
    [isEqualsCallback, value, onChange],
  );

  return (
    <SimpleGrid w="full" columns={20} spacing="0.5rem">
      {assets.map((asset) => (
        <UILogic.AssetIconButton
          key={asset.id}
          asset={asset}
          isSelected={isSelectedCallback(asset)}
          onSelect={() => onChangeCallback(asset)}
        />
      ))}
    </SimpleGrid>
  );
}
