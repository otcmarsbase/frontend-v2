import { FC, useMemo } from 'react';

import { LotReassignmentType, LotTypeChip, ParticipantTypesText, TradeDirectionChip } from '@app/components';
import { Text, HStack, VStack, Divider } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Tooltip, SuggestionIcon } from '@shared/ui-kit';
import { formatDistance, subDays } from 'date-fns';

interface InfoElementProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

const InfoElement: React.FC<InfoElementProps> = ({ label, children, tooltip }) => {
  return (
    <VStack gap="0.25rem" color="dark.50" flex="2" alignItems="flex-start">
      <HStack gap="0.25rem">
        <Text fontSize="sm" whiteSpace="nowrap" color="dark.50" fontWeight="600">
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

export const LotBasicInfo: FC<{ lot: DeskGatewaySchema.Lot }> = ({ lot }) => {
  const { attributes, type, id } = lot;
  const createdAt = useMemo(
    () => formatDistance(new Date(lot.attributes.COMMON_CREATED_AT_ATTRIBUTE), new Date(), { addSuffix: true }),
    [lot.attributes.COMMON_CREATED_AT_ATTRIBUTE],
  );

  return (
    <HStack bg="dark.900" w="full" borderRadius="0.75rem" padding="1.25rem" justifyContent="space-between">
      <HStack gap="2rem" alignItems="flex-start">
        <InfoElement label="ID">
          <Text fontSize="sm" fontWeight="500" whiteSpace="nowrap">
            {id}
          </Text>
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Lot">
          <TradeDirectionChip value={attributes.COMMON_DIRECTION} />
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Type">
          <LotTypeChip withTokenWarrant={attributes.SAFE_WITH_TOKEN_WARRANT} value={type} />
        </InfoElement>
        {InfoDivider}
        <InfoElement label={attributes.COMMON_DIRECTION === 'BUY' ? 'Buyer' : 'Seller'}>
          <ParticipantTypesText value={attributes.COMMON_OFFER_MAKER_TYPES} whiteSpace="nowrap" />
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Available reassignment">
          <LotReassignmentType value={attributes.INVEST_DOC_REASSIGNMENT_TYPE} />
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Publish date">
          <Text fontSize="sm" fontWeight="500" whiteSpace="nowrap">
            {createdAt}
          </Text>
        </InfoElement>
      </HStack>
    </HStack>
  );
};
