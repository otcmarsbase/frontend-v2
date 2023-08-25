import React, { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import { BaseDealInfo } from '@app/pages/dashboard/deals/deal/components/BaseDealInfo';
import { DealInfo } from '@app/pages/dashboard/deals/deal/components/DealInfo';
import { DealParticipants } from '@app/pages/dashboard/deals/deal/components/DealParticipants';
import { TradeProgressStatuses } from '@app/pages/dashboard/deals/deal/components/TradeProgressStatusses';
import { dealMock } from '@app/pages/dashboard/deals/deal/dealMock';
import { HStack, VStack, Text, Heading } from '@chakra-ui/react';
import { ArrowLeft as Arrow } from '@shared/assets/ArrowLeft';
import { Dashboard } from '@shared/types';
import { listItemTexts } from '@shared/ui-molecules';

const Deal: React.FC = observer(() => {
  const [deal, setDeal] = useState<Dashboard.IDealItemExtended>(
    dealMock as Dashboard.IDealItemExtended,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadDeal = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDeal(dealMock);
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
    <VStack gap="1.75rem">
      <HStack w="100%" color="#888D9B" cursor="pointer">
        <Arrow />
        <Heading variant="h5" fontWeight={600}>
          Back to Dashboard
        </Heading>
      </HStack>
      <HStack width="full">
        <VStack gap="1.25rem" flex="1.5">
          <VStack
            bg="dark.900"
            flex="2"
            borderRadius="0.75rem"
            width="full"
            justifyContent="space-between"
            position="relative"
            transition="all 0.3s"
            cursor="pointer"
            _hover={{
              bg: 'dark.800',
            }}
            alignItems="start"
            gap="1.5rem"
          >
            <Text
              // TODO: Уточнить у дизайнеров почему цвета не из той палитры
              bg={
                'BUY' === 'BUY'
                  ? 'rgba(52, 168, 83, 0.40)'
                  : 'rgba(232, 42, 54, 0.30)'
              }
              padding="0.1rem 1rem"
              borderRadius="0.75rem 0rem"
              color={'BUY' === 'BUY' ? '#34A853' : '#E82A36'}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight={600}
              position="absolute"
              left={0}
              top={0}
            >
              {listItemTexts.type['BUY']}
            </Text>

            <BaseDealInfo
              lotName={deal.lotName}
              createdAt={deal.createdAt}
              id={deal.id}
              status={deal.status}
              lotId={deal.lotId}
              lotIconName={deal.lotIconName}
            />
          </VStack>

          <DealInfo
            price={3235}
            dealSize={deal.dealSize}
            dealFDV={deal.dealFDV}
          />

          <DealParticipants
            offerMakerName={deal.offerMakerName}
            offerMakerIcon={deal.offerMakerIcon}
            offerMakerWallet={deal.offerMakerWallet}
            moderatorName={deal.moderatorName}
            moderatorIcon={deal.moderatorIcon}
            moderatorWallet={deal.moderatorWallet}
            bidMakerName={deal.bidMakerName}
            bidMakerIcon={deal.bidMakerIcon}
            bidMakerWallet={deal.bidMakerWallet}
            telegramChatLink={deal.telegramChatLink}
          />
        </VStack>

        <TradeProgressStatuses
          chatCreating={'SUCCESS'}
          offerMakerValidation={'SUCCESS'}
          bidMakerValdiation={'SUCCESS'}
          KYCValidation={'CANCEL'}
          AMLValidation={'QUESTION'}
          KYBValidation={'RELOAD'}
          docOwnership={'CANCEL'}
          docReAssigned={'SUCCESS'}
          txPayment={'RELOAD'}
          MarsComission={'RELOAD'}
          OTCComission={'RELOAD'}
        />
      </HStack>
    </VStack>
  );
});

Deal.getLayout = ({ children }) => (
  <Layouts.AppLayout>{children}</Layouts.AppLayout>
);

export default Deal;
