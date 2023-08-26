import { useState } from 'react';

import { Grid, GridItem, HStack, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { LotsBlock, StatsBlock, TitleBlock } from './components';
import { DescriptionBlock } from './components/DescriptionBlock';
import { LinksBlock } from './components/LinksBlock';
import { VerticalBlock } from './components/VerticalBlock';

export interface ViewProps {
  asset: Resource.Asset.Asset;
}

export function View({ asset }: ViewProps) {
  const [direction, setDirection] = useState<Resource.Common.TradeDirection>('BUY');

  return (
    <VStack padding="2rem" gap="2rem">
      <TitleBlock title={asset.info.title} logoUrl={asset.info.logo_url} />
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

      <LotsBlock direction={direction} onChange={setDirection} />
    </VStack>
  );
}
