import { useCallback } from 'react';

import { ResponsiveValue, SimpleGrid } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { motion } from 'framer-motion';

import { LotCard } from '../LotCard';

export interface LotGripProps {
  columns: ResponsiveValue<number>;
  lots: Resource.Lot.Lot[];
  assets: Resource.Asset.Asset[];

  onSelect?: (lot: Resource.Lot.Lot, asset: Resource.Asset.Asset) => any;
}

export function LotGrid({ columns, lots, assets, onSelect }: LotGripProps) {
  const getAsset = useCallback(
    (lot: Resource.Lot.Lot) => assets.find((m) => m.id === (lot.assetPK as Resource.Asset.AssetKey).id),
    [assets],
  );

  const onSelectCallback = useCallback(
    (lot: Resource.Lot.Lot) => {
      if (onSelect) {
        const asset = getAsset(lot);
        onSelect(lot, asset);
      }
    },
    [onSelect, getAsset],
  );

  return (
    <SimpleGrid w="full" columns={columns} spacing="2rem">
      {lots.map((lot) => (
        <motion.div layout key={lot.id}>
          <LotCard lot={lot} asset={getAsset(lot)} onClick={() => onSelectCallback(lot)} />
        </motion.div>
      ))}
    </SimpleGrid>
  );
}
