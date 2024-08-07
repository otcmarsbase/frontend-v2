import React, { useCallback, useMemo, useState } from 'react';

import { UILogic, UIModals, useAuth, useRpcSchemaClient } from '@app/components';
import { createDictionary } from '@app/dictionary';
import { useBreakpointDevice, usePreloadPage, useToastOuterCallback } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { Grid, GridItem, VStack, Text, Button } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Tabs, useLoadingCallback } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { toNumber } from 'lodash';

import { ConfirmDeleteModal } from '../Moderation/[id]/_atoms';

import { LotBasicInfo, Bids, Sidebar, AdditionalInfoBlock, LotAnalytics } from './_atoms';
import { SimilarLotsBlock } from './_atoms';
import { LotInfo } from './_atoms/LotInfo';
import { LotQuestions } from './_atoms/LotQuestions';
import { LotMobile } from './index.mobile';
import { LotTab } from './types';

const TabsDictionary = createDictionary<LotTab, string>().setFromRecord({
  BIDS: 'Bids',
  QUESTIONS: 'questions',
});

export interface LotProps extends React.PropsWithChildren {
  id: number;
}

export default function Lot({ id }: LotProps) {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();

  const router = useRouter();
  const { account, isAuthorized } = useAuth();

  const [lot, setLot] = useState<DeskGatewaySchema.Lot>();
  const [offerMaker, setOfferMaker] = useState<DeskGatewaySchema.User>();
  const [stat, setStat] = useState<DeskGatewaySchema.LotTransactionStatsAggregation>();
  const [asset, setAsset] = useState<DeskGatewaySchema.Asset>();
  const [questions, setQuestions] = useState<DeskGatewaySchema.LotQuestion[]>();
  const [questionUsers, setQuestionUsers] = useState<DeskGatewaySchema.User[]>();
  const { isMobile } = useBreakpointDevice();
  const [activeTab, setActiveTab] = useState<LotTab>('BIDS');

  const deleteToastCallback = useToastOuterCallback({
    showWhenOk: true,
    showWhenError: false,
    okText: `Lot with ${id} was success deleted`,
  });

  const isOfferMaker = useMemo(() => {
    if (!(lot && account)) return false;

    return offerMaker.nickname === account.nickname;
  }, [lot, account, offerMaker]);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const params = {
        filter: { id: [id] },
        include: { offerMaker: true, lotTransactionStatsAggregation: true, lotQuestion: { user: true } },
      };
      const { lot, offerMaker, stat, questions, questionUsers } = await queryClient.fetchQuery({
        queryKey: ['lot.list', params],
        queryFn: async () => {
          const { items, links } = await rpcSchema.send('lot.list', params);

          const [lot] = items;

          const offerMaker = links.find(
            (link) => link.resource === 'user' && lot.offerMaker.id === link.id,
          ) as DeskGatewaySchema.User;
          const stat = links.find(
            (link) => link.resource === 'lot_transaction_stats_aggregation',
          ) as DeskGatewaySchema.LotTransactionStatsAggregation;
          const questions = links.filter(
            (link) => link.resource === 'lot_question' && link.status === 'ACTIVE',
          ) as DeskGatewaySchema.LotQuestion[];
          const questionUsers = links.filter((link) => link.resource === 'user') as DeskGatewaySchema.User[];

          return { lot, offerMaker, stat, questions, questionUsers };
        },
      });

      rpcSchema.send('viewLot.create', { lotId: id });

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
      setQuestions(questions);
      setQuestionUsers(questionUsers);
    }, [id, rpcSchema, router, queryClient]),
  );

  usePreloadPage(preload);

  const handleDeleteLot = useCallback(() => {
    deleteToastCallback(async () => {
      const result = await ModalController.create(ConfirmDeleteModal, { lot });
      // TODO: remove this, refactor `useToastOuterCallback` for canceling
      if (!result) throw new Error();

      const archivedLot = await rpcSchema.send('lot.archive', { id: lot.id });
      await queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('lot') });

      if (archivedLot['status'] === 'ARCHIVED') return router.navigateComponent(MBPages.Marketplace.Home, {}, {});
    });
  }, [deleteToastCallback, lot, rpcSchema, router, queryClient]);

  const renderTabTitle = (tab: LotTab) => (
    <Text fontFamily="promo" textTransform="uppercase">
      {TabsDictionary.get(tab)}
    </Text>
  );

  const tabs: LotTab[] = isAuthorized ? ['BIDS', 'QUESTIONS'] : ['BIDS'];

  const renderTab = (tab: LotTab) => {
    switch (tab) {
      case 'BIDS':
        return <Bids isOfferMaker={isOfferMaker} lot={lot} asset={asset} offerMaker={offerMaker} />;
      case 'QUESTIONS':
        return <LotQuestions isOfferMaker={isOfferMaker} lot={lot} questions={questions} users={questionUsers} />;
    }
  };

  const onCreateBidClick = () => ModalController.create(UIModals.CreateBidModal, { lot });

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
        onEdit={() => router.navigateComponent(MBPages.Lot.Update.__id__, { id }, { replace: true })}
        onDelete={handleDeleteLot}
      />
    );

  return (
    <VStack marginTop="2rem" alignItems="flex-start">
      <Grid templateColumns="28.5rem 1fr" columnGap="2rem" width="full">
        <Sidebar asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST} />
        <GridItem>
          <VStack w="full" gap="0.75rem">
            {isOfferMaker && (
              <VStack position="sticky" top={0} bg="dark.950" w="100%" zIndex={1}>
                <LotAnalytics
                  onEdit={() => router.navigateComponent(MBPages.Lot.Update.__id__, { id }, { replace: true })}
                  onDelete={handleDeleteLot}
                />
              </VStack>
            )}
            <VStack position="sticky" top={0} bg="dark.950" w="100%" zIndex={1}>
              <LotBasicInfo lot={lot} />
            </VStack>
            <VStack w="full">
              <LotInfo lot={lot} stat={stat} />
              <AdditionalInfoBlock lot={lot} />
            </VStack>
            <Tabs<LotTab>
              items={tabs}
              renderTab={renderTabTitle}
              value={activeTab}
              onChange={setActiveTab}
              isLazy={true}
              variant="promo"
              rightElement={
                !isOfferMaker &&
                activeTab === 'BIDS' && (
                  <UILogic.AuthAction>
                    <Button
                      leftIcon={<UIIcons.Common.AddIcon />}
                      variant="brand"
                      size="sm"
                      borderRadius="0.375rem"
                      padding="0.5rem 0.75rem"
                      onClick={onCreateBidClick}
                    >
                      Create Bid
                    </Button>
                  </UILogic.AuthAction>
                )
              }
            >
              {renderTab}
            </Tabs>
          </VStack>
        </GridItem>
      </Grid>

      <SimilarLotsBlock lot={lot} />
    </VStack>
  );
}

Lot.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;
