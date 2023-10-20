import React, { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { HStack, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/otc-desk-gateway';
import { UIKit } from '@shared/ui-kit';
import { toNumber } from 'lodash';

import { DealInfo, DealParticipants, TradeProgressStatuses } from './_atoms';
import { BaseDealInfo } from './_atoms/BaseDealInfo';

interface DealProps {
  id: Resource.Deal.DealKey['id'];
}

const Deal: React.FC<DealProps> = observer(({ id }) => {
  const router = useRouter();
  const rpcSchema = useRpcSchemaClient();
  const [deal, setDeal] = useState<Resource.Deal.Deal>(null);
  const [lot, setLot] = useState<Resource.Lot.Lot>(null);
  const [asset, setAsset] = useState<Resource.Asset.Asset>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadDeal = useCallback(async () => {
    setIsLoading(true);
    try {
      const deal = await rpcSchema.send('deals.getById', { id: toNumber(id) });
      const lot = await rpcSchema.send('lot.getById', { id: deal.lotKey.id });
      const asset = await rpcSchema.send('asset.getById', { id: (lot.assetPK as Resource.Asset.AssetKey).id });
      setDeal(deal);
      setLot(lot);
      setAsset(asset);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDeal();
  }, [loadDeal]);

  if (!asset || !deal || !lot || isLoading) {
    return <UILogic.DealPageSkeleton />;
  }

  return (
    <VStack gap="1rem" alignItems="start">
      <UIKit.BackButton onClick={() => router.navigateComponent(MBPages.Dashboard.Deals, {}, {})}>
        Back to Dashboard
      </UIKit.BackButton>
      <HStack width="full" gap="2rem" alignItems="start">
        <VStack gap="1.25rem" flex="1.5">
          <BaseDealInfo lot={lot} deal={deal} asset={asset} />

          <DealInfo
            price={deal.contractSize.price.value}
            size={deal.contractSize.unitQuantity.value}
            fdv={deal.contractSize.contractShare.fdv.value}
            marsbaseCommission={deal.keyResults.marsbaseCommissionKR.percent.value}
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
