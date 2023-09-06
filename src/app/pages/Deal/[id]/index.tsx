import { useCallback, useState } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { usePreloadPage } from '@app/hooks';
import { UILayout } from '@app/layouts';
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { useLoadingCallback } from '@shared/ui-kit';

import { DescriptionBlock, LinksBlock, VerticalBlock, LotsBlock, StatsBlock, TitleBlock } from './_atoms';

export interface ViewProps {
  id: string;
}

export default function View({ id }: ViewProps) {
  const rpcSchema = useRpcSchemaClient();

  const [asset, setAsset] = useState<Resource.Asset.Asset>();
  const [direction, setDirection] = useState<Resource.Common.TradeDirection>('BUY');

  const onPreload = useLoadingCallback(
    useCallback(async () => {
      const asset = await rpcSchema.send('asset.getById', { id });
      setAsset(asset);
    }, [id, rpcSchema]),
  );
  usePreloadPage(onPreload);

  const onLotClick = useCallback((lot: Resource.Lot.Lot) => {}, []);

  // TODO
  if (!asset) return <>Empty</>;

  return (
    <VStack padding="2rem" gap="2rem">
      <TitleBlock title={asset.info.title} logoUrl={asset.info.logo_url} analyticsUrl="" />
      <StatsBlock
        averageLotsFdv={asset.stats.average_fdv}
        averageBidsFdv={asset.stats.average_fdv}
        lotSellCount={asset.stats.lot_sell_count}
        lotBuyCount={asset.stats.lot_buy_count}
        lotQuantitySummary={asset.stats.lot_buy_cv_sum}
      />
      <Grid h="300px" templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem rowSpan={1} colSpan={1}>
          <LinksBlock links={asset.info.links} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <VerticalBlock verticals={asset.info.verticals} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <DescriptionBlock description={asset.info.description} />
        </GridItem>
      </Grid>

      <LotsBlock direction={direction} onChange={setDirection} onSelect={onLotClick} />
    </VStack>
  );
}

View.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};
