import React, { useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import * as Layouts from '@app/layouts';
import { HStack, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import Decimal from 'decimal.js';
import { toNumber } from 'lodash';

import { DealInfo, DealParticipants, TradeProgressStatuses } from './_atoms';
import { BaseDealInfo } from './_atoms/BaseDealInfo';

interface DealProps {
  id: DeskGatewaySchema.DealKey['id'];
}

const Deal: React.FC<DealProps> = observer(({ id }) => {
  const { data: deals, isLoading } = useRpcSchemaQuery('deal.list', {
    filter: { id: [toNumber(id)] },
    include: { bid: { lot: { asset: true } }, bidMaker: true, offerMaker: true },
  });

  const deal = useMemo(() => !isLoading && deals.items[0], [deals, isLoading]);

  const bid = useMemo(
    () =>
      deal &&
      (deals.links.find((link) => link.resource === 'bid' && link.id === deal.bidKey.id) as DeskGatewaySchema.Bid),
    [deals, deal],
  );

  const lot = useMemo(
    () =>
      bid &&
      (deals.links.find((link) => link.resource === 'lot' && link.id === bid.lotKey.id) as DeskGatewaySchema.Lot),
    [deals, bid],
  );

  const asset = useMemo(
    () =>
      deals &&
      (deals.links.find(
        (link) => link.resource === 'asset' && link.id === lot.attributes.INVEST_DOC_ASSET_PK,
      ) as DeskGatewaySchema.Asset),
    [deals, lot],
  );

  const offerMakers = useMemo(() => {
    if (!deal) return [];

    const ids = deal.offerMakers.map((offerMaker) => offerMaker.id);
    return deals.links.filter((link) => link.resource === 'user' && ids.includes(link.id)) as DeskGatewaySchema.User[];
  }, [deals, deal]);

  const bidMakers = useMemo(() => {
    if (!deal) return [];

    const ids = deal.bidMakers.map((bidMaker) => bidMaker.id);
    return deals.links.filter((link) => link.resource === 'user' && ids.includes(link.id)) as DeskGatewaySchema.User[];
  }, [deals, deal]);

  if (isLoading) {
    return <UILogic.DealPageSkeleton />;
  }

  return (
    <VStack gap="1rem" alignItems="start">
      <HStack flexDirection={{ base: 'column', lg: 'row' }} width="full" gap="2rem" alignItems="start">
        <VStack gap="1.25rem" flex="1.5">
          <BaseDealInfo lot={lot} deal={deal} asset={asset} bidMakers={bidMakers} />

          <DealInfo
            price={deal.price}
            amount={deal.summary}
            fdv={deal.fdv}
            lotType={lot.type}
            marsbaseCommission={new Decimal(deal.keyResults.marsbaseCommissionKR.percent).mul(100).toString()}
          />

          <DealParticipants
            offerMakers={offerMakers}
            bidMakers={bidMakers}
            telegramChatLink={deal.keyResults.telegramChatKR.url}
          />
        </VStack>

        <TradeProgressStatuses
          chatCreating={deal.keyResults.telegramChatKR.status}
          offerMakerValidation={deal.keyResults.offerMakerValidationKR.status}
          bidMakerValidation={deal.keyResults.bidMakerValidationKR.status}
          kycValidation={deal.keyResults.kycValidationKR.status}
          amlValidation={deal.keyResults.amlValidationKR.status}
          kybValidation={deal.keyResults.kybValidationKR.status}
          docOwnership={deal.keyResults.documentOwnershipKR.status}
          docResigned={deal.keyResults.documentResignedKR.status}
          txPayment={deal.keyResults.transactionPaymentKR.status}
          marsbaseCommission={deal.keyResults.marsbaseCommissionKR.status}
          agentCommission={deal.keyResults.agentCommissionKR.status}
        />
      </HStack>
    </VStack>
  );
});

Deal.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default Deal;
