import React, { FC } from 'react';

import { Circle, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { DealBlockTypeDictionary, TradeProgressStatusDictionary, TradeValidationStatusDictionary } from './const';

export interface TradeProgressStatusesProps {
  chatCreating: Resource.Deal.Enums.KeyResultStatus;
  offerMakerValidation: Resource.Deal.Enums.KeyResultStatus;
  bidMakerValidation: Resource.Deal.Enums.KeyResultStatus;
  kycValidation: Resource.Deal.Enums.KeyResultStatus;
  amlValidation: Resource.Deal.Enums.KeyResultStatus;
  kybValidation: Resource.Deal.Enums.KeyResultStatus;
  docOwnership: Resource.Deal.Enums.KeyResultStatus;
  docResigned: Resource.Deal.Enums.KeyResultStatus;
  txPayment: Resource.Deal.Enums.KeyResultStatus;
  marsbaseCommission: Resource.Deal.Enums.KeyResultStatus;
  agentCommission: Resource.Deal.Enums.KeyResultStatus;
}

export const TradeProgressStatuses: FC<TradeProgressStatusesProps> = ({
  chatCreating,
  offerMakerValidation,
  bidMakerValidation,
  kycValidation,
  amlValidation,
  kybValidation,
  docOwnership,
  docResigned,
  txPayment,
  marsbaseCommission,
  agentCommission,
}) => {
  return (
    <VStack flex="1" padding="1.5rem 1.25rem" gap="1rem" bg="dark.900" borderRadius="0.75rem" w="full">
      <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
        {DealBlockTypeDictionary.get('TRADE_PROGRESS').title}
      </Heading>
      <VStack gap="0.75rem" w="100%">
        <VStack
          borderRadius="0.5rem"
          border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
          padding="1.25rem 0.75rem 0.75rem 0.75rem"
          gap="0.75rem"
          w="100%"
          _hover={{
            border: '1px dashed var(--ui-kit-dark-300, #515460)',
          }}
        >
          <TradeProgressField label={TradeProgressStatusDictionary.get('CHAT_CREATING')} status={chatCreating} />
          <TradeProgressField
            label={TradeProgressStatusDictionary.get('OFFER_MAKER_VALIDATION')}
            status={offerMakerValidation}
          />
          <TradeProgressField
            label={TradeProgressStatusDictionary.get('BID_MAKER_VALIDATION')}
            status={bidMakerValidation}
          />
        </VStack>
        <VStack
          borderRadius="0.5rem"
          border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
          padding="0.75rem"
          gap="0.75rem"
          w="100%"
          _hover={{
            border: '1px dashed var(--ui-kit-dark-300, #515460)',
          }}
        >
          <TradeProgressField label={TradeProgressStatusDictionary.get('KYC_VALIDATION')} status={kycValidation} />
          <TradeProgressField label={TradeProgressStatusDictionary.get('AML_VALIDATION')} status={amlValidation} />
          <TradeProgressField label={TradeProgressStatusDictionary.get('KYB_VALIDATION')} status={kybValidation} />
        </VStack>
        <VStack
          borderRadius="0.5rem"
          border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
          padding="0.75rem"
          gap="0.75rem"
          w="100%"
          _hover={{
            border: '1px dashed var(--ui-kit-dark-300, #515460)',
          }}
        >
          <TradeProgressField label={TradeProgressStatusDictionary.get('DOCUMENT_OWNERSHIP')} status={docOwnership} />
          <TradeProgressField label={TradeProgressStatusDictionary.get('DOCUMENTS_RESIGNED')} status={docResigned} />
        </VStack>
        <VStack
          borderRadius="0.5rem"
          border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
          padding="0.75rem"
          gap="0.75rem"
          w="100%"
          _hover={{
            border: '1px dashed var(--ui-kit-dark-300, #515460)',
          }}
        >
          <TradeProgressField label={TradeProgressStatusDictionary.get('TRANSACTION_PAYMENT')} status={txPayment} />
          <TradeProgressField
            label={TradeProgressStatusDictionary.get('MARSBASE_COMMISSION')}
            status={marsbaseCommission}
          />
          <TradeProgressField
            label={TradeProgressStatusDictionary.get('OTC_AGENT_COMMISSION')}
            status={agentCommission}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export interface TradeProgressFieldProps {
  label: string;
  status: Resource.Deal.Enums.KeyResultStatus;
}

export const TradeProgressField: React.FC<TradeProgressFieldProps> = ({ label, status }) => {
  const { color, icon: Icon } = TradeValidationStatusDictionary.get(status);

  return (
    <HStack justifyContent="space-between" w="100%">
      <Text color="dark.50" fontWeight="600" fontSize="sm">
        {label}
      </Text>
      <Circle size="1.25rem" bg={color}>
        <Icon color={status === 'PROCESS' ? 'dark.50' : 'inherit'} />
      </Circle>
    </HStack>
  );
};
