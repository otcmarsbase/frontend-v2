import { useEffect, useState } from 'react';

import { Circle, HStack, StackProps, VStack, Text, Divider, Box } from '@chakra-ui/react';
import { UIIcons } from '@components/icons';

export interface SummaryStepProps extends Omit<StackProps, 'children'> {
  isSuccessFilled: boolean;
  stepData: {
    id: number;
    label: string;
  };
  fields: { name: string; value: any }[];
  stepWasOpened: boolean;
}

export function SummaryStep({ stepData, isSuccessFilled, fields, stepWasOpened, ...stackProps }: SummaryStepProps) {
  const [isExpanded, setIsExpanded] = useState(isSuccessFilled);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    setIsExpanded(isSuccessFilled || stepWasOpened);
  }, [isSuccessFilled, stepWasOpened]);

  const isValid = isSuccessFilled;
  const isDefault = !stepWasOpened;
  const isInvalid = !isSuccessFilled;
  return (
    <VStack
      alignItems="start"
      background={isSuccessFilled ? 'green.950' : 'dark.800'}
      padding="0.75rem 1rem"
      gap="0"
      minWidth="24.6rem"
      borderRadius="1rem"
      {...stackProps}
    >
      <HStack justifyContent="space-between" width="100%">
        <HStack>
          <Circle size="1.5rem" background={isSuccessFilled ? 'green.500' : 'dark.500'}>
            {isDefault ? <UIIcons.Common.WaitingIcon color="dark.100" /> : null}
            {isValid ? <UIIcons.Common.CheckmarkIcon /> : null}
            {isInvalid ? <UIIcons.Common.AlertCircle /> : null}
          </Circle>
          <Text fontSize="sm" fontWeight="bold">
            Step {stepData.id}
          </Text>
          <Text fontSize="sm" color={isSuccessFilled ? 'green.100' : 'dark.50'}>
            {stepData.label}
          </Text>
        </HStack>
        {(isSuccessFilled || stepWasOpened) && (
          <UIIcons.Common.ChevronDownIcon
            opacity="0.6"
            onClick={toggleExpand}
            cursor="pointer"
            transition="all 0.2s"
            transform={!isExpanded ? 'rotate(180deg)' : ''}
          />
        )}
      </HStack>
      <Box
        width="100%"
        transition="opacity 0.3s"
        height={isExpanded ? '100%' : '0'}
        opacity={isExpanded ? 1 : 0}
        visibility={isExpanded ? 'visible' : 'hidden'}
      >
        {(isSuccessFilled || stepWasOpened) && <Divider my="3" color={isSuccessFilled ? 'green.500' : 'dark.100'} />}
        {fields.length ? (
          <VStack alignItems="start" width="100%">
            {fields.map((field, index) => (
              <HStack width="100%" justifyContent="space-between" key={index}>
                <Text fontSize="sm" opacity="0.6">
                  {field.name}
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {field.value}
                </Text>
              </HStack>
            ))}
          </VStack>
        ) : null}
      </Box>
    </VStack>
  );
}
