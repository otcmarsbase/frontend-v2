import { useMemo } from 'react';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import { useBreakpointDevice } from '@app/hooks';
import { UILayout } from '@app/layouts';
import { Grid, GridItem, VStack } from '@chakra-ui/react';

import { DescriptionBlock, LinksBlock, VerticalBlock, LotsBlock, StatsBlock, TitleBlock } from './_atoms';
import AssetViewMobile from './index.mobile';

export interface ViewProps {
  id: string;
}

export default function View({ id }: ViewProps) {
  const { isMobile } = useBreakpointDevice();

  const { data, isLoading: assetIsLoading } = useRpcSchemaQuery('asset.list', {
    filter: { id: [id] },
    include: { assetLotStatsAggregation: true },
  });

  const asset = useMemo(() => data.items[0], [data]);
  const stats = useMemo(() => data.links[0], [data]);

  if (!asset || assetIsLoading) return <UILogic.AssetPageSkeleton />;

  if (isMobile) return <AssetViewMobile asset={asset} stats={stats} />;

  return (
    <VStack gap="2rem">
      <TitleBlock title={asset.info.title} logoUrl={asset.info.logoURL} analyticsUrl={asset.info.analyticURL} />
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

      <LotsBlock asset={asset} />
    </VStack>
  );
}

View.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};
