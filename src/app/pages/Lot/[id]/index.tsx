import React, { useCallback, useMemo, useState } from 'react';

import { UILogic, useAuth, useRpcSchemaClient } from '@app/components';
import { useBreakpointDevice, usePreloadPage } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { toNumber } from 'lodash';

import { LotBasicInfo, Bids, Sidebar, AdditionalInfoBlock, LotFAQ } from './_atoms';
import { LotInfo } from './_atoms/LotInfo';
import { SimilarLotsBlock } from './_atoms/SimilarLotsBlock';
import { LotMobile } from './index.mobile';

export interface LotProps extends React.PropsWithChildren {
  id: number;
}

export default function Lot({ id }: LotProps) {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();

  const router = useRouter();
  const { account } = useAuth();

  const [lot, setLot] = useState<DeskGatewaySchema.Lot>();
  const [offerMaker, setOfferMaker] = useState<DeskGatewaySchema.User>();
  const [stat, setStat] = useState<DeskGatewaySchema.LotTransactionStatsAggregation>();
  const [asset, setAsset] = useState<DeskGatewaySchema.Asset>();
  const { isMobile } = useBreakpointDevice();

  const isOfferMaker = useMemo(() => {
    if (!(lot && account)) return false;

    return offerMaker.nickname === account.nickname;
  }, [lot, account, offerMaker]);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const params = {
        filter: { id: [id] },
        include: { offerMaker: true, lotTransactionStatsAggregation: true },
      };
      const { lot, offerMaker, stat } = await queryClient.fetchQuery({
        queryKey: ['lot.list', params],
        queryFn: async () => {
          const { items, links } = await rpcSchema.send('lot.list', params);

          const [lot] = items;

          const offerMaker = links.find((link) => link.resource === 'user') as DeskGatewaySchema.User;
          const stat = links.find(
            (link) => link.resource === 'lot_transaction_stats_aggregation',
          ) as DeskGatewaySchema.LotTransactionStatsAggregation;

          return { lot, offerMaker, stat };
        },
      });

      if (lot.attributes.INVEST_DOC_ASSET_PK) {
        const asset = await queryClient.fetchQuery({
          queryKey: ['asset.getById', { id: lot.attributes.INVEST_DOC_ASSET_PK }],
          queryFn: () => rpcSchema.send('asset.getById', { id: lot.attributes.INVEST_DOC_ASSET_PK }),
        });
        setAsset(asset);
      }

      switch (lot.status) {
        case 'DRAFT':
          return router.navigateComponent(MBPages.Lot.Create.__id__, { id: lot.id }, { replace: true });
        case 'ON_MODERATION':
          return router.navigateComponent(MBPages.Lot.Moderation.__id__, { id: lot.id }, { replace: true });
      }

      setLot(lot);
      setOfferMaker(offerMaker);
      setStat(stat);
    }, [id, rpcSchema, router, queryClient]),
  );

  usePreloadPage(preload);

  if (preload.isLoading) return <UILogic.LotPageSkeleton />;

  if (!lot) return;

  if (isMobile)
    return (
      <LotMobile
        isOfferMaker={isOfferMaker}
        offerMaker={offerMaker}
        lot={lot}
        stat={stat}
        asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST}
      />
    );

  return (
    <VStack marginTop="2rem" alignItems="flex-start">
      <Grid templateColumns="28.5rem 1fr" columnGap="2rem" width="full">
        <Sidebar asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST} />
        <GridItem>
          <VStack w="full" gap="0.75rem">
            <VStack position="sticky" top={0} bg="dark.950" w="100%" zIndex={1}>
              <LotBasicInfo lot={lot} />
            </VStack>
            <VStack w="full">
              <LotInfo lot={lot} stat={stat} />
              <AdditionalInfoBlock lot={lot} />
            </VStack>
            <Bids isOfferMaker={isOfferMaker} lot={lot} asset={asset} offerMaker={offerMaker} />
            {/* <LotFAQ /> */}
          </VStack>
        </GridItem>
      </Grid>

      <SimilarLotsBlock lot={lot} />
    </VStack>
  );
}

Lot.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;
