import { useCallback, useState } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { usePreloadPage } from '@app/hooks';
import { UILayout } from '@app/layouts';
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { RPC, Resource } from '@schema/otc-desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';

import { DescriptionBlock, LinksBlock, VerticalBlock, LotsBlock, StatsBlock, TitleBlock } from './_atoms';

export interface ViewProps {
  id: string;
}

export default function View({ id }: ViewProps) {
  const rpcSchema = useRpcSchemaClient();

  const [asset, setAsset] = useState<Resource.Asset.Asset>();
  const [stats, setStats] = useState<RPC.DTO.AssetGetStatsById.Result>();

  const onPreload = useLoadingCallback(
    useCallback(async () => {
      const asset = await rpcSchema.send('asset.getById', { id });
      const stats = await rpcSchema.send('asset.getStatsById', { id });
      setAsset(asset);
      setStats(stats);
    }, [id, rpcSchema]),
  );
  usePreloadPage(onPreload);

  const onLotClick = useCallback((lot: Resource.Lot.Lot) => {}, []);

  // TODO
  if (!asset || !stats) return <>Empty</>;

  return (
    <VStack padding="2rem" gap="2rem">
      <TitleBlock title={asset.info.title} logoUrl={asset.info.logoURL} analyticsUrl="" />
      <StatsBlock
        averageLotsFdv={stats.averageFdv}
        lotSellCount={stats.lotSellCount}
        lotBuyCount={stats.lotBuyCount}
        lotValueOnBuy={stats.lotBuyCvSum}
        lotValueOnSell={stats.lotSellCvSum}
      />
      <Grid templateColumns="30rem 2fr" gap="2rem" w="full">
        <GridItem h="full">
          <VStack alignItems="start" gap="0.75rem">
            <LinksBlock links={asset.info.links} />
            <VerticalBlock verticals={asset.info.verticals} />
          </VStack>
        </GridItem>
        <GridItem h="full">
          <DescriptionBlock description={asset.info.description} />
        </GridItem>
      </Grid>

      <LotsBlock assetId={id} />
    </VStack>
  );
}

View.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};
