import { UILogic } from '@app/components';
import { UIDictionary } from '@app/dictionary';
import { getContractSize, getMinimumDealSize } from '@app/utils';
import { SimpleGrid, VStack, Text, Heading, HStack } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { MoneyText, PercentText, UIKit } from '@shared/ui-kit';

import { AvailableBlock } from './AvailableBlock';
import { RoundInfoFieldDictionary } from './const';
import { RoundInfoItem } from './RoundInfoItem';

export interface RoundInfoProps {
  lot: Resource.Lot.Lot;
}

interface RoundInfoFieldProps {
  title: string;
  value: React.ReactNode;
}

const RoundInfoField: React.FC<RoundInfoFieldProps> = ({ title, value }) => {
  return (
    <HStack w="full" justifyContent="space-between">
      <Text fontSize="sm" fontWeight={500} color="dark.50">
        {title}
      </Text>
      {value}
    </HStack>
  );
};

export const RoundInfo: React.FC<RoundInfoProps> = ({ lot }) => {
  return (
    <VStack w="full" alignItems="start">
      {lot.attributes.COMMON_DIRECTION === 'SELL' && (
        <VStack p="1.25rem" w="full" alignItems="start" bg="dark.900" borderRadius="sm" gap="1.5rem">
          <Heading textTransform="uppercase" fontSize="md" color="white" fontWeight={700}>
            Round info
          </Heading>
          <SimpleGrid columns={2} gridColumnGap="6.5rem" gridRowGap="1rem" w="full">
            <RoundInfoField
              title={RoundInfoFieldDictionary.get('INVESTMENT_ROUND').title}
              value={<UILogic.InvestmentRoundBadge value={lot.attributes.INVEST_DOC_ROUND_TYPE} />}
            />
            <RoundInfoField
              title={RoundInfoFieldDictionary.get('ROUND_TOKEN_PRICE').title}
              value={
                <UIKit.MoneyText
                  fontWeight={800}
                  format="0,000.000"
                  value={lot.attributes.INVEST_DOC_ROUND_PRICE}
                  fontSize="sm"
                  addon={
                    <Text fontSize="sm" color="dark.50" fontWeight={800}>
                      $
                    </Text>
                  }
                />
              }
            />
            <RoundInfoField
              title={RoundInfoFieldDictionary.get('TGE_DATE').title}
              value={
                <UIKit.DateText
                  value={typeof lot.attributes.TOKEN_TGE === 'number' ? lot.attributes.TOKEN_TGE : undefined}
                />
              }
            />
            <RoundInfoField
              title={RoundInfoFieldDictionary.get('ROUND_FDV').title}
              value={
                <UIKit.MoneyText
                  value={lot.attributes.INVEST_DOC_ROUND_FDV}
                  fontSize="sm"
                  format="0,00"
                  fontWeight={800}
                  addon={
                    <Text fontSize="sm" color="dark.50" fontWeight={800}>
                      $
                    </Text>
                  }
                />
              }
            />
            <RoundInfoField
              title={RoundInfoFieldDictionary.get('LOCKUP_PERIOD').title}
              value={
                <Text fontWeight={800} fontSize="sm">
                  {lot.attributes.TOKEN_LOCKUP_PERIOD ? lot.attributes.TOKEN_LOCKUP_PERIOD : '-'}
                </Text>
              }
            />
            <RoundInfoField
              title={RoundInfoFieldDictionary.get('VESTING_CALENDAR').title}
              value={
                <Text fontSize="sm" fontWeight={800}>
                  {lot.attributes.TOKEN_VESTING_PERIOD ? lot.attributes.TOKEN_VESTING_PERIOD : '-'}
                </Text>
              }
            />
          </SimpleGrid>
        </VStack>
      )}

      <SimpleGrid gridTemplateColumns="61% 1fr" gap="1.5rem" borderRadius="0.5rem" w="full">
        <VStack gap="0.75rem">
          <SimpleGrid w="full" borderRadius="0.75rem" gridColumnGap="0.75rem" gridRowGap="0.81rem" columns={3}>
            <RoundInfoItem
              fieldName={
                lot.type === 'SAFT' ? 'PRICE_UNIT' : lot.type === 'TOKEN_WARRANT' ? 'PRICE_TOKEN' : 'PRICE_EQUITY'
              }
            >
              <MoneyText fontSize="sm" fontWeight={500} value={lot.attributes.COMMON_PRICE} abbreviated addon="$" />
            </RoundInfoItem>
            <RoundInfoItem fieldName="LOT_FDV">
              <VStack alignItems="start">
                <MoneyText fontSize="sm" abbreviated fontWeight={500} value={lot.attributes.INVEST_DOC_FDV} addon="$" />
              </VStack>
            </RoundInfoItem>
            <RoundInfoItem fieldName="CONTRACT_SIZE">
              {lot.type === 'SAFT' ? (
                <MoneyText fontSize="sm" fontWeight={500} value={getContractSize(lot)} abbreviated />
              ) : (
                <PercentText fontSize="sm" fontWeight={500} value={getContractSize(lot)} />
              )}
              <MoneyText
                fontSize="xs"
                abbreviated
                fontWeight={500}
                color="dark.50"
                value={lot.attributes.COMMON_SUMMARY}
                addon="$"
              />
            </RoundInfoItem>
            <RoundInfoItem fieldName="OWNER">
              <UILogic.AccountAvatar nickname={lot.offerMaker.nickname} />
            </RoundInfoItem>
            <RoundInfoItem fieldName="SELLER">
              <Text fontWeight="500" fontSize="sm">
                {UIDictionary.MediatorTypeDictionary.get(lot.attributes.COMMON_MEDIATOR).title}
              </Text>
            </RoundInfoItem>
            <RoundInfoItem fieldName="MIN_BID">
              {lot.type === 'SAFT' ? (
                <MoneyText fontSize="sm" fontWeight={500} value={getMinimumDealSize(lot)} abbreviated />
              ) : (
                <PercentText fontSize="sm" fontWeight={500} value={getMinimumDealSize(lot)} />
              )}
              <MoneyText
                fontSize="xs"
                fontWeight={500}
                color="dark.50"
                abbreviated
                value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
                addon="$"
              />
            </RoundInfoItem>
          </SimpleGrid>
          <SimpleGrid gridColumnGap="0.75rem" columns={2} w="full">
            <RoundInfoItem fieldName="TYPE_OF_BIDDER">
              <UILogic.ParticipantTypesText fontSize="sm" value={lot.attributes.COMMON_BID_MAKER_TYPES} />
            </RoundInfoItem>
            <RoundInfoItem fieldName="TYPE_OF_SELLER">
              <UILogic.ParticipantTypesText fontSize="sm" value={lot.attributes.COMMON_OFFER_MAKER_TYPES} />
            </RoundInfoItem>
          </SimpleGrid>
        </VStack>

        <AvailableBlock lot={lot} />
      </SimpleGrid>
    </VStack>
  );
};
