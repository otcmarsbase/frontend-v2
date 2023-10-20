import { FC, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

import { LotTypeChip, TradeDirectionText } from '@app/components';
import { Box, Text, HStack, VStack, Divider } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Countdown, Tooltip, SuggestionIcon } from '@shared/ui-kit';

interface InfoElementProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

const InfoElement: React.FC<InfoElementProps> = ({ label, children, tooltip }) => {
  return (
    <VStack gap="0.25rem" color="dark.50" flex="2" alignItems="flex-start">
      <HStack gap="0.25rem">
        <Text fontSize="sm">{label}</Text>
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
  const { id, direction, type, deadline } = lot;

  const [, copyToClipboard] = useCopyToClipboard();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const copy = () => {
    copyToClipboard(id.toString());
    setTooltipIsOpen(true);
  };

  return (
    <HStack bg="dark.900" w="full" borderRadius="0.75rem" padding="1.25rem" justifyContent="space-between">
      <HStack gap="2rem">
        <InfoElement label="ID">
          <HStack gap="0.25rem">
            <Text fontSize="sm" fontWeight="500">
              {id}
            </Text>
            <Box onClick={copy}>
              <Tooltip
                hasArrow
                closeOnPointerDown
                isOpen={tooltipIsOpen}
                onClose={() => setTooltipIsOpen(false)}
                closeDelay={500}
                placement="bottom-start"
                offset={[-10, 10]}
                label={<Text fontSize="sm">ID Copied</Text>}
              >
                <UIIcons.Common.CopyIcon color="white" />
              </Tooltip>
            </Box>
          </HStack>
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Lot">
          <TradeDirectionText variant="ghost" value={direction} />
        </InfoElement>
        {InfoDivider}
        <InfoElement label="Type">
          <LotTypeChip withTokenWarrant={lot.withTokenWarrant} value={type} />
        </InfoElement>
      </HStack>

      {deadline && (
        <VStack gap="0.25rem" padding="0 0 0 1.5rem " flex="2" alignItems="flex-end">
          <Text fontSize="sm" color="dark.50">
            Auction ends in:
          </Text>

          <Countdown expiryTimestamp={new Date(deadline)} />
        </VStack>
      )}
    </HStack>
  );
};
