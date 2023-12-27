import { FC } from 'react';

import { LotTypeChip, TradeDirectionText } from '@app/components';
import { Text, HStack, VStack, Divider } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { Countdown, Tooltip, SuggestionIcon, CopyButton, BooleanChip } from '@shared/ui-kit';

interface InfoElementProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

const InfoElement: React.FC<InfoElementProps> = ({ label, children, tooltip }) => {
  return (
    <VStack gap="0.25rem" color="dark.50" flex="2" alignItems="flex-start">
      <HStack gap="0.25rem">
        <Text fontSize="sm" whiteSpace="nowrap">
          {label}
        </Text>
        {tooltip && (
          <Tooltip label={tooltip} aria-label="A tooltip">
            <SuggestionIcon />
          </Tooltip>
        )}
      </HStack>
      {children}
    </VStack>
  );
};

const InfoDivider = <Divider h="3.25rem" orientation="vertical" color="dark.600" />;

export const LotBasicInfo: FC<{ lot: Resource.Lot.Lot }> = ({ lot }) => {
  const { id, attributes, type } = lot;

  return (
    <HStack bg="dark.900" w="full" borderRadius="0.75rem" padding="1.25rem" justifyContent="space-between">
      <HStack gap="2rem">
        <InfoElement label="ID">
          <HStack gap="0.25rem">
            <Text fontSize="sm" fontWeight="500">
              {id}
            </Text>
            <CopyButton value={lot.id.toString()} />
          </HStack>
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Lot">
          <TradeDirectionText variant="ghost" value={attributes.COMMON_DIRECTION} />
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Type">
          <LotTypeChip withTokenWarrant={attributes.SAFE_WITH_TOKEN_WARRANT} value={type} />
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Re-Assign">
          <BooleanChip value={attributes.INVEST_DOC_WITH_REASSIGN} />
        </InfoElement>
      </HStack>

      {attributes.COMMON_DEADLINE && (
        <VStack gap="0.25rem" padding="0 0 0 1.5rem " flex="2" alignItems="flex-end">
          <Text fontSize="sm" color="dark.50">
            Auction ends in:
          </Text>

          <Countdown expiryTimestamp={new Date(attributes.COMMON_DEADLINE)} />
        </VStack>
      )}
    </HStack>
  );
};
