import { useMemo, useState } from 'react';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import { createDictionary } from '@app/dictionary';
import { UILayout } from '@app/layouts';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { DescriptionBlock, LinksBlock, VerticalBlock, LotsBlock, StatsBlock, TitleBlock } from './_atoms';
import { AssetTab } from './types';

const TabsDictionary = createDictionary<AssetTab, string>().setFromRecord({
  DESCRIPTION: 'Description',
  LOTS: 'Lots',
});

export interface ViewProps {
  id: string;
}

export default function View({ id }: ViewProps) {
  const { data, isLoading } = useRpcSchemaQuery('asset.list', {
    filter: { id: [id] },
    include: { assetLotStatsAggregation: true },
  });
  const [activeTab, setActiveTab] = useState<AssetTab>('LOTS');

  const asset = useMemo(() => !isLoading && data.items[0], [data, isLoading]);
  const stats = useMemo(() => !isLoading && data.links[0], [data, isLoading]);

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
          <Grid templateColumns={{ base: '1fr', xl: '2fr 25rem' }} gap="2rem" w="full">
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
