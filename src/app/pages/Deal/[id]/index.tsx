import React from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import * as Layouts from '@app/layouts';
import { HStack, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import Decimal from 'decimal.js';
import { toNumber } from 'lodash';

import { DealInfo, DealParticipants, TradeProgressStatuses } from './_atoms';
import { BaseDealInfo } from './_atoms/BaseDealInfo';

interface DealProps {
  id: Resource.Deal.DealKey['id'];
}

const Deal: React.FC<DealProps> = observer(({ id }) => {
  const { data: deal, isLoading: dealIsLoading } = useRpcSchemaQuery('deal.getById', { id: toNumber(id) });
  const { data: lot, isLoading: lotIsLoading } = useRpcSchemaQuery(
    'lot.getById',
    { id: deal?.lotKey?.id },
    { enabled: !!deal },
  );
  const { data: asset, isLoading: assetIsLoading } = useRpcSchemaQuery(
    'asset.getById',
    { id: lot?.attributes?.INVEST_DOC_ASSET_PK },
    { enabled: !!lot },
  );

  if (dealIsLoading || lotIsLoading || assetIsLoading) {
    return <UILogic.DealPageSkeleton />;
  }

  return (
    <VStack gap="1rem" alignItems="start">
      <HStack flexDirection={{ base: 'column', md: 'row' }} width="full" gap="2rem" alignItems="start">
        <VStack gap="1.25rem" flex="1.5">
          <BaseDealInfo lot={lot} deal={deal} asset={asset} />

          <DealInfo
            price={deal.price.value}
            amount={deal.summary.value}
            fdv={deal.fdv?.value}
            lotType={lot.type}
            marsbaseCommission={new Decimal(deal.keyResults.marsbaseCommissionKR.percent.value).mul(100).toString()}
          />

          <DealParticipants
            offerMakers={deal.offerMakers}
            bidMakers={deal.bidMakers}
            moderators={deal.moderators}
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
