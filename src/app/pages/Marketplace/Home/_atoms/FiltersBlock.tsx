import { useState } from 'react';

import { AssetIconButton } from '@app/components';
import { HStack, Input, SimpleGrid, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface MarketplaceFilters {
  assetId: Resource.Asset.Asset['id'];
}

export interface FiltersBlockProps {
  assets: Resource.Asset.Asset[];
  applyFilters: (filters: MarketplaceFilters) => void;
}

export const FiltersBlock: React.FC<FiltersBlockProps> = ({ applyFilters, assets }) => {
  const [selectedAssetId, setSelectedAssetId] = useState<Resource.Asset.Asset['id']>(null);

  const onSelectAsset = (asset: Resource.Asset.Asset) => {
    const assetId = asset.id === selectedAssetId ? null : asset.id;
    setSelectedAssetId(assetId);
    applyFilters({
      assetId,
    });
  };

  return (
    <VStack w="full">
      <SimpleGrid columns={20} w="full" gap="0.5rem">
        {assets.slice(0, 20).map((asset) => (
          <AssetIconButton
            key={asset.id}
            onSelect={() => onSelectAsset(asset)}
            isSelected={asset.id === selectedAssetId}
            asset={asset}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
