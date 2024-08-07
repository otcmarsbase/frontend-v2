import { useCallback, useMemo } from 'react';

import { LotCard, useAuth, useRpcSchemaQuery } from '@app/components';
import { MBPages } from '@app/pages';
import { Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface SimilarLotsBlockProps {
  lot: DeskGatewaySchema.Lot;
}

export const SimilarLotsBlock: React.FC<SimilarLotsBlockProps> = ({ lot }) => {
  const router = useRouter();

  const { data: assets } = useRpcSchemaQuery('asset.list', { filter: { status: ['ACTIVE'] } });
  const { data: lots } = useRpcSchemaQuery('lot.list', {
    filter: { status: ['ACTIVE'], asset: { id: [lot.attributes.INVEST_DOC_ASSET_PK] } },
    include: { lotTransactionStatsAggregation: true },
  });

  const similarLots = useMemo(() => lots?.items?.filter((other) => other.id !== lot.id) || [], [lots, lot]);

  const findStat = useCallback(
    (lot: DeskGatewaySchema.Lot) =>
      lots.links.find(
        (link) => link.resource === 'lot_transaction_stats_aggregation' && lot.id === link.id,
      ) as DeskGatewaySchema.LotTransactionStatsAggregation,
    [lots],
  );

  if (!lots?.total) return null;

  return (
    <VStack
      mt="2rem"
      w="full"
      alignItems="start"
      layerStyle="darkLinearGradientBg"
      p="2rem"
      gap="1.25rem"
      rounded="2xl"
    >
      <VStack alignItems="start" gap="0.25rem">
        <Heading fontSize="lg" textTransform="uppercase">
          Similar lots
        </Heading>
        <Text fontSize="sm" color="dark.50">
          Set the parameters you need to suggest the best trading conditions
        </Text>
      </VStack>

      <SimpleGrid columns={4} gap="0.75rem" w="full">
        {similarLots.map((lot) => (
          <LotCard
            key={lot.id}
            minimalView
            lot={lot}
            stat={findStat(lot)}
            asset={assets?.items?.find((asset) => asset.id === lot.attributes.INVEST_DOC_ASSET_PK)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
