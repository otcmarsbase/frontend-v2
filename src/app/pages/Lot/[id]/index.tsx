import React, { useCallback, useState } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { usePreloadPage } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { MockFakers, useStore } from '@app/store';
import { Button, Grid, GridItem, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { useLoadingCallback } from '@shared/ui-kit';

import { LotBasicInfo, Bids, Sidebar } from './_atoms';
import { RoundInfo } from './_atoms/RoundInfo';
import { SimilarLotsBlock } from './_atoms/SimilarLotsBlock';

const UserState = {
  isOfferMaker: true,
  isBidder: true,
};

export interface LotProps extends React.PropsWithChildren {
  id: string;
}

export default function Lot({ id }: LotProps) {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const { mockStore } = useStore();

  const [lot, setLot] = useState<Resource.Lot.Lot>();
  const [asset, setAsset] = useState<Resource.Asset.Asset>();
  const [bids] = useState<Resource.Bid.Bid[]>(mockStore.bidListLot({}).items);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const asset = MockFakers.createAsset();
      const lot = MockFakers.createLot([asset]);

      setLot(lot);
      setAsset(asset);
    }, [rpcSchema, id]),
  );

  usePreloadPage(preload);

  const handleEditLot = () => {
    console.log('handleEditLot');
  };
  const handleUnPublishLot = () => {
    console.log('handleUnpublishLot');
  };

  if (!asset || !lot) return;

  return (
    <VStack marginTop="2rem" alignItems="flex-start">
      <Button
        variant="ghost"
        color="#888D9B"
        cursor="pointer"
        leftIcon={<UIIcons.Common.ArrowLeft />}
        onClick={() => router.navigateComponent(MBPages.Marketplace.Home, {}, {})}
      >
        <Text fontSize="sm" fontWeight={600}>
          Back to Marketplace
        </Text>
      </Button>
      <Grid templateColumns="28.5rem 1fr" columnGap="2rem" width="full">
        <Sidebar asset={asset} />
        <GridItem>
          <VStack w="full" gap="0.75rem">
            <VStack position="sticky" top={0} bg="dark.950" w="100%" zIndex={1}>
              {UserState.isOfferMaker ? (
                <HStack
                  bg="dark.900"
                  w="100%"
                  padding="1rem 1.25rem"
                  borderRadius="0.75rem"
                  gap="0.75rem"
                  justifyContent="space-between"
                >
                  <Heading textTransform="uppercase" variant="h3" fontSize="1rem">
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
              ) : null}
              <LotBasicInfo lot={lot} />
            </VStack>
            <RoundInfo lot={lot} />
            <Bids />
          </VStack>
        </GridItem>
      </Grid>

      <SimilarLotsBlock />
    </VStack>
  );
}

Lot.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;
