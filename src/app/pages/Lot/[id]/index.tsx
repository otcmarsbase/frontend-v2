import React, { useCallback, useMemo, useState } from 'react';

import { UILogic, useAuth, useRpcSchemaClient } from '@app/components';
import { usePreloadPage } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Grid, GridItem, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';
import { toNumber } from 'lodash';

import { LotBasicInfo, Bids, Sidebar } from './_atoms';
import { RoundInfo } from './_atoms/RoundInfo';
import { SimilarLotsBlock } from './_atoms/SimilarLotsBlock';
import { LotMobile } from './index.mobile';

export interface LotProps extends React.PropsWithChildren {
  id: number;
}

export default function Lot({ id }: LotProps) {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const { account } = useAuth();

  const [lot, setLot] = useState<Resource.Lot.Lot>();
  const [asset, setAsset] = useState<Resource.Asset.Asset>();
  const isMobile = useBreakpointValue(
    {
      base: true,
      md: false,
    },
    { ssr: false },
  );

  const isOfferMaker = useMemo(() => {
    if (!(lot && account)) return false;

    return lot.offerMaker.nickname === account.nickname;
  }, [lot, account]);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const lot = await rpcSchema.send('lot.getById', { id: toNumber(id) });

      if (lot.attributes.INVEST_DOC_ASSET_PK) {
        const asset = await rpcSchema.send('asset.getById', { id: lot.attributes.INVEST_DOC_ASSET_PK });
        setAsset(asset);
      }

      switch (lot.status) {
        case 'DRAFT':
          return router.navigateComponent(MBPages.Lot.Create.__id__, { id: lot.id }, { replace: true });
        case 'ON_MODERATION':
          return router.navigateComponent(MBPages.Lot.Moderation.__id__, { id: lot.id }, { replace: true });
      }

      setLot(lot);
    }, [id, rpcSchema, router]),
  );

  usePreloadPage(preload);

  // const handleEditLot = () => {
  //   console.log('handleEditLot');
  // };
  // const handleUnPublishLot = () => {
  //   console.log('handleUnpublishLot');
  // };

  if (preload.isLoading) return <UILogic.LotPageSkeleton />;

  if (!lot) return;

  if (isMobile)
    return (
      <LotMobile
        isOfferMaker={isOfferMaker}
        lot={lot}
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
              {/* {isOfferMaker ? (
                <HStack
                  bg="dark.900"
                  w="100%"
                  padding="1rem 1.25rem"
                  borderRadius="0.75rem"
                  gap="0.75rem"
                  justifyContent="space-between"
                >
                  <Heading textTransform="uppercase" variant="h3">
                    My lot analytics
                  </Heading>

                  <HStack gap="0.69rem">
                    <Button size="xs" padding="0.5rem 1.5rem" onClick={handleEditLot}>
                      Edit my lot
                    </Button>
                    <Button size="xs" variant="darkOutline" padding="0.5rem 1.5rem" onClick={handleUnPublishLot}>
                      Delete
                    </Button>
                  </HStack>
                </HStack>
              ) : null} */}
              <LotBasicInfo lot={lot} />
            </VStack>
            <RoundInfo lot={lot} />
            <Bids isOfferMaker={isOfferMaker} lot={lot} />
          </VStack>
        </GridItem>
      </Grid>

      <SimilarLotsBlock lot={lot} />
    </VStack>
  );
}

Lot.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;
