import { useCallback, useEffect, useState } from 'react';

import { LotCard, useRpcSchemaClient } from '@app/components';
import { MBPages } from '@app/pages';
import { Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/otc-desk-gateway';

export interface SimilarLotsBlockProps {
  lot: Resource.Lot.Lot;
}

export const SimilarLotsBlock: React.FC<SimilarLotsBlockProps> = ({ lot }) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [assets, setAssets] = useState<Resource.Asset.Asset[]>([]);
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);

  const loadAssets = useCallback(async () => {
    const assets = await rpcSchema.send('asset.list', {});
    setAssets(assets.items);
  }, [rpcSchema]);

  const loadLots = useCallback(async () => {
    const lots = await rpcSchema.send('lot.listActive', { assets: [(lot.assetPK as Resource.Asset.AssetKey).id] });
    setLots(lots.items.filter((item) => item.id !== lot.id));
  }, [lot.assetPK, lot.id, rpcSchema]);

  useEffect(() => {
    loadAssets();
    loadLots();
  }, [loadAssets, loadLots]);

  if (!lots.length) return null;

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
        {lots.map((lot) => (
          <LotCard
            minimalView
            lot={lot}
            asset={assets.find((asset) => asset.id === (lot.assetPK as Resource.Asset.AssetKey).id)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
