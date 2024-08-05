import { useMemo, useState } from 'react';

import { UILogic, useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import { createDictionary } from '@app/dictionary';
import { UILayout } from '@app/layouts';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { DescriptionBlock, LinksBlock, VerticalBlock, LotsBlock, StatsBlock, TitleBlock } from './_atoms';
import { FAQBlock } from './_atoms/FAQBlock';
import { AssetTab } from './types';

const TabsDictionary = createDictionary<AssetTab, string>().setFromRecord({
  DESCRIPTION: 'Description',
  LOTS: 'Lots',
  FAQ: 'FAQ',
});

export interface ViewProps {
  id: string;
}

export default function View({ id }: ViewProps) {
  const { data, isLoading } = useRpcSchemaQuery('asset.list', {
    filter: { id: [id], status: ['ACTIVE'] },
    include: { assetLotStatsAggregation: true, assetFaq: true },
  });
  const [activeTab, setActiveTab] = useState<AssetTab>('LOTS');
  const rpcClient = useRpcSchemaClient();

  const asset = useMemo(() => !isLoading && data.items[0], [data, isLoading]);
  const stats = useMemo(
    () =>
      !isLoading &&
      (data.links.find(
        (item) => item.resource === 'asset_lot_stats_aggregation',
      ) as DeskGatewaySchema.AssetLotStatsAggregation),
    [data, isLoading],
  );

  const faq = useMemo(
    () => !isLoading && (data.links.filter((item) => item.resource === 'asset_faq') as DeskGatewaySchema.AssetFaq[]),
    [data, isLoading],
  );

  if (!asset || isLoading) return <UILogic.AssetPageSkeleton />;

  const renderTabTitle = (tab: AssetTab) => (
    <Text fontFamily="promo" textTransform="uppercase">
      {TabsDictionary.get(tab)}
    </Text>
  );

  const renderTab = (tab: AssetTab) => {
    switch (tab) {
      case 'DESCRIPTION':
        return (
          <Grid templateColumns={{ base: '1fr', xl: '2fr 22rem' }} gap="2rem" w="full">
            <GridItem h="full">
              <DescriptionBlock description={asset.info.description} />
            </GridItem>
            <GridItem h="full">
              <VStack alignItems="start" gap="0.75rem">
                <LinksBlock links={asset.info.links} />
                <VerticalBlock verticals={asset.info.verticals} />
              </VStack>
            </GridItem>
          </Grid>
        );
      case 'LOTS':
        return <LotsBlock asset={asset} />;
      case 'FAQ':
        return <FAQBlock items={faq} />;
    }
  };

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
      <UIKit.Tabs<AssetTab>
        items={AssetTab as unknown as AssetTab[]}
        renderTab={renderTabTitle}
        value={activeTab}
        onChange={setActiveTab}
        isLazy={true}
        variant="promo"
      >
        {renderTab}
      </UIKit.Tabs>
    </VStack>
  );
}

View.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};
