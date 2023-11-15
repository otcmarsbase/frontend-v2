import { ResponsiveValue, SimpleGrid } from '@chakra-ui/react';
import { range } from 'lodash';

import { LotCardSkeleton } from '../LotCardSkeleton';

export interface LotGridSkeletonProps {
  columns: ResponsiveValue<number>;
  items?: number;
  withAnimation?: boolean;
  minimalCardView?: boolean;
}

export const LotGridSkeleton: React.FC<LotGridSkeletonProps> = ({
  columns,
  items = 12,
  withAnimation,
  minimalCardView,
}) => {
  return (
    <SimpleGrid w="full" columns={columns} spacing="2rem">
      {range(0, items).map((key) => (
        <LotCardSkeleton key={key} minimalView={minimalCardView} />
      ))}
    </SimpleGrid>
  );
};
