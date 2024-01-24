import { FC } from 'react';

import { VStack, HStack, Tooltip, Text } from '@chakra-ui/react';
import { SuggestionIcon } from '@shared/ui-kit';

interface InfoElementProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

export const InfoElement: FC<InfoElementProps> = ({ label, children, tooltip }) => {
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
