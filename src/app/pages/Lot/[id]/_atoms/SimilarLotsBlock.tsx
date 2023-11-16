import { useCallback, useEffect, useMemo, useState } from 'react';

import { LotCard, useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import { MBPages } from '@app/pages';
import { Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';

export interface SimilarLotsBlockProps {
  lot: Resource.Lot.Lot;
}

export const SimilarLotsBlock: React.FC<SimilarLotsBlockProps> = ({ lot }) => {
  const router = useRouter();

  const { data: assets } = useRpcSchemaQuery('asset.list', {});
  const { data: lots } = useRpcSchemaQuery('lot.listActive', {
    assets: [lot.attributes.INVEST_DOC_ASSET_PK],
  });

  const similarLots = useMemo(() => lots?.items?.filter((other) => other.id !== lot.id) || [], [lots, lot]);

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
            asset={assets?.items?.find((asset) => asset.id === lot.attributes.INVEST_DOC_ASSET_PK)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
