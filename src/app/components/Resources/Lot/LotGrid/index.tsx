import { useCallback } from 'react';

import { ResponsiveValue, SimpleGrid } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { motion } from 'framer-motion';

import { LotCard } from '../LotCard';

export interface LotGripProps {
  columns: ResponsiveValue<number>;
  lots: DeskGatewaySchema.Lot[];
  stats: DeskGatewaySchema.LotTransactionStatsAggregation[];
  assets: DeskGatewaySchema.Asset[];

  onSelect?: (lot: DeskGatewaySchema.Lot, asset: DeskGatewaySchema.Asset) => any;
}

export function LotGrid({ columns, lots, assets, stats, onSelect }: LotGripProps) {
  const getAsset = useCallback(
    (lot: DeskGatewaySchema.Lot) => assets.find((m) => m.id === lot.attributes.INVEST_DOC_ASSET_PK),
    [assets],
  );

  const getStat = useCallback((lot: DeskGatewaySchema.Lot) => stats.find((stat) => stat.id === lot.id), [stats]);

  const onSelectCallback = useCallback(
    (lot: DeskGatewaySchema.Lot) => {
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
          <LotCard lot={lot} asset={getAsset(lot)} stat={getStat(lot)} onClick={() => onSelectCallback(lot)} />
        </motion.div>
      ))}
    </SimpleGrid>
  );
}
