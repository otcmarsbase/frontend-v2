import { useCallback, useState } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { usePreloadPage } from '@app/hooks';
import { UILayout } from '@app/layouts';
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';

import { DescriptionBlock, LinksBlock, VerticalBlock, LotsBlock, StatsBlock, TitleBlock } from './_atoms';

export interface ViewProps {
  id: string;
}

export default function View({ id }: ViewProps) {
  const rpcSchema = useRpcSchemaClient();

  const [asset, setAsset] = useState<Resource.Asset.Asset>();

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
      <TitleBlock title={asset.info.title} logoUrl={''} analyticsUrl="" />
      <StatsBlock
        // TODO
        averageLotsFdv={'0000'}
        averageBidsFdv={'0000'}
        lotSellCount={0}
        lotBuyCount={0}
        lotQuantitySummary={'0000'}
      />
      <Grid templateColumns="30rem 2fr" gap="2rem">
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
