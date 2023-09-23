import React, { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { HStack, VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { DealInfo, DealParticipants, TradeProgressStatuses } from './_atoms';
import { BaseDealInfo } from './_atoms/BaseDealInfo';
import { createAsset, createDeal, createLot, createParticipant } from './mock';

const Deal: React.FC = observer(() => {
  const router = useRouter();
  const [deal, setDeal] = useState<Resource.Deal.Deal>(null);
  const [lot, setLot] = useState<Resource.Lot.Lot>(null);
  const [asset, setAsset] = useState<Resource.Asset.Asset>(null);
  const [participants] = useState([
    createParticipant('OFFER_MAKER'),
    createParticipant('MODERATOR'),
    createParticipant('BID_MAKER'),
    createParticipant('OTC_AGENT'),
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadDeal = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDeal(createDeal());
      setAsset(createAsset());
      setLot(createLot());
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDeal();
  }, [loadDeal]);

  if (isLoading) {
    return <HStack>Loading...</HStack>;
  }

  return (
    <VStack gap="1rem" alignItems="start">
      <UIKit.BackButton onClick={() => router.navigateComponent(MBPages.Dashboard.Deals, {}, {})}>
        Back to Dashboard
      </UIKit.BackButton>
      <HStack width="full" gap="2rem" alignItems="start">
        <VStack gap="1.25rem" flex="1.5">
          <BaseDealInfo lot={lot} deal={deal} asset={asset} />

          <DealInfo price={3235} size={2323} fdv={2323} commission={5} />

          <DealParticipants items={participants} telegramChatLink={deal?.communication?.char_url} />
        </VStack>

        <TradeProgressStatuses
          chatCreating={'COMPLETED'}
          offerMakerValidation={'VALIDATED'}
          bidMakerValidation={'COMPLETED'}
          kycValidation={'FAILED'}
          amlValidation={'PENDING'}
          kybValidation={'VALIDATED'}
          docOwnership={'COMPLETED'}
          docResigned={'COMPLETED'}
          txPayment={'PENDING'}
          marsbaseCommission={'PENDING'}
          otcCommission={'PENDING'}
        />
      </HStack>
    </VStack>
  );
});

Deal.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default Deal;
