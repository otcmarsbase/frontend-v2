import React, { FC } from 'react';

import { Heading, VStack } from '@chakra-ui/react';

import { TradeProgressChip } from './TradeProgressChip';

const TRADE_PROGRESS_LABELS = {
  chatCreating: 'Chat creating',
  offerMakerValidation: 'Offer Maker Validation',
  bidMakerValdiation: 'Bid Maker Validation',
  KYCValidation: 'KYC Validation',
  AMLValidation: 'AML Validation',
  KYBValidation: 'KYB Validation',
  docOwnership: 'Document Ownership',
  docReAssigned: 'Documents re-signed',
  txPayment: 'Transaction payment',
  MarsComission: 'Marsbase commission',
  OTCComission: 'OTC agent commission',
};

const TRADE_PROGRESS_STATUS_ICONS = {
  SUCCESS: 'successIcon',
  RELOAD: 'reloadIcon',
  CANCEL: 'cancelIcon',
  QUESTION: 'questionIcon',
};

export interface TradeProgressStatuses {
  chatCreating: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  offerMakerValidation: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  bidMakerValdiation: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  KYCValidation: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  AMLValidation: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  KYBValidation: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  docOwnership: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  docReAssigned: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  txPayment: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  MarsComission: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
  OTCComission: keyof typeof TRADE_PROGRESS_STATUS_ICONS;
}

export const TradeProgressStatuses: FC<TradeProgressStatuses> = ({
  chatCreating,
  offerMakerValidation,
  bidMakerValdiation,
  KYCValidation,
  AMLValidation,
  KYBValidation,
  docOwnership,
  docReAssigned,
  txPayment,
  MarsComission,
  OTCComission,
}) => {
  return (
    <VStack
      flex="1"
      padding="1.5rem 1.25rem"
      gap="1rem"
      bg="dark.900"
      borderRadius="0.75rem"
      transition="all 0.3s"
      cursor="pointer"
      _hover={{
        bg: 'dark.800',
      }}
    >
      <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
        Trade Progress Statuses
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
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.chatCreating}
            status={TRADE_PROGRESS_STATUS_ICONS[chatCreating]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.offerMakerValidation}
            status={TRADE_PROGRESS_STATUS_ICONS[offerMakerValidation]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.bidMakerValdiation}
            status={TRADE_PROGRESS_STATUS_ICONS[bidMakerValdiation]}
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
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.KYCValidation}
            status={TRADE_PROGRESS_STATUS_ICONS[KYCValidation]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.AMLValidation}
            status={TRADE_PROGRESS_STATUS_ICONS[AMLValidation]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.KYBValidation}
            status={TRADE_PROGRESS_STATUS_ICONS[KYBValidation]}
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
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.docOwnership}
            status={TRADE_PROGRESS_STATUS_ICONS[docOwnership]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.docReAssigned}
            status={TRADE_PROGRESS_STATUS_ICONS[docReAssigned]}
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
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.txPayment}
            status={TRADE_PROGRESS_STATUS_ICONS[txPayment]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.MarsComission}
            status={TRADE_PROGRESS_STATUS_ICONS[MarsComission]}
          />
          <TradeProgressChip
            label={TRADE_PROGRESS_LABELS.OTCComission}
            status={TRADE_PROGRESS_STATUS_ICONS[OTCComission]}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
