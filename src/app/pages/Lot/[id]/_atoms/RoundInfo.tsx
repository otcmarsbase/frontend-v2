import { UILogic } from '@app/components';
import { ParticipantTypeDictionary, UIDictionary } from '@app/dictionary';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { MoneyText, UIKit } from '@shared/ui-kit';

import { AvailableBlock } from './AvailableBlock';
import { RoundInfoItem } from './RoundInfoItem';

export interface RoundInfoProps {
  lot: Resource.Lot.Lot;
}

export const RoundInfo: React.FC<RoundInfoProps> = ({ lot }) => {
  return (
    <SimpleGrid gridTemplateColumns="61% 1fr" gap="1.5rem" borderRadius="0.5rem" w="full">
      <VStack gap="0.75rem">
        <SimpleGrid w="full" borderRadius="0.75rem" gridColumnGap="0.75rem" gridRowGap="0.81rem" columns={3}>
          <RoundInfoItem fieldName="PRICE_PER_EQUITY">
            <MoneyText fontSize="sm" fontWeight={500} value={lot.contractSize.price.value} abbreviated addon="$" />
          </RoundInfoItem>
          <RoundInfoItem fieldName="LOT_FDV">
            <VStack alignItems="start">
              <MoneyText
                fontSize="sm"
                abbreviated
                fontWeight={500}
                value={lot.contractSize.contractShare.fdv.value}
                addon="$"
              />
            </VStack>
          </RoundInfoItem>
          <RoundInfoItem fieldName="CONTRACT_SIZE">
            <MoneyText
              fontSize="sm"
              fontWeight={500}
              value={lot.contractSize.unitQuantity.value}
              abbreviated
              addon="%"
            />
            <MoneyText fontSize="xs" fontWeight={500} color="dark.50" value={lot.contractSize.price.value} addon="$" />
          </RoundInfoItem>
          <RoundInfoItem fieldName="OWNER">
            <UILogic.AccountAvatar nickname={lot.offerMaker.nickname} />
          </RoundInfoItem>
          <RoundInfoItem fieldName="SELLER">
            <Text fontWeight="500" fontSize="sm">
              {UIDictionary.MediatorTypeDictionary.get(lot.mediatorType).title}
            </Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="MIN_BID">
            <MoneyText
              fontSize="sm"
              fontWeight={500}
              value={lot.minimumDealSize.unitQuantity.value}
              abbreviated
              addon="%"
            />
            <MoneyText
              fontSize="xs"
              fontWeight={500}
              color="dark.50"
              value={lot.minimumDealSize.price.value}
              addon="$"
            />
          </RoundInfoItem>
        </SimpleGrid>
        <SimpleGrid gridColumnGap="0.75rem" columns={2} w="full">
          <RoundInfoItem fieldName="TYPE_OF_BIDDER">
            {lot.bidMakerTypes ? (
              lot.bidMakerTypes.map((type) => (
                <Text fontSize="sm" color="orange.500">
                  {ParticipantTypeDictionary.get(type).title}
                </Text>
              ))
            ) : (
              <Text fontSize="sm" color="dark.50">
                -
              </Text>
            )}
          </RoundInfoItem>
          <RoundInfoItem fieldName="TYPE_OF_SELLER">
            {lot.offerMakerTypes ? (
              lot.offerMakerTypes.map((type) => (
                <Text fontSize="sm" color="orange.500">
                  {ParticipantTypeDictionary.get(type).title}
                </Text>
              ))
            ) : (
              <Text fontSize="sm" color="dark.50">
                -
              </Text>
            )}
          </RoundInfoItem>
        </SimpleGrid>
      </VStack>

      <AvailableBlock lot={lot} />
    </SimpleGrid>
  );
};
