import { useEffect, useState } from 'react';
import {
  Circle,
  HStack,
  StackProps,
  VStack,
  Text,
  Divider,
  Box,
} from '@chakra-ui/react';
import { AlertCircle } from '@shared/ui-kit/icons/AlertCurcle';
import { CheckmarkIcon, ChevronDownIcon, WaitingIcon } from '../../icons';

export interface SummaryStepProps extends Omit<StackProps, 'children'> {
  isSuccessFilled: boolean;
  stepData: {
    id: number;
    label: string;
  };
  fields: { name: string; value: any }[];
  stepWasOpened: boolean;
}

export const SummaryStep = ({
  stepData,
  isSuccessFilled,
  fields,
  stepWasOpened,
  ...stackProps
}: SummaryStepProps) => {
  const [isExpanded, setIsExpanded] = useState(isSuccessFilled);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    setIsExpanded(isSuccessFilled || stepWasOpened);
  }, [isSuccessFilled, stepWasOpened]);

  const isValid = isSuccessFilled;
  const isInvalid = !isSuccessFilled;

  const isDefault = !stepWasOpened;
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
      <HStack justifyContent="space-between" width="full">
        <HStack>
          <Circle
            size="1.5rem"
            background={isSuccessFilled ? 'green.500' : 'dark.500'}
          >
            {isDefault && !isValid ? <WaitingIcon color="dark.100" /> : null}
            {isValid ? <CheckmarkIcon /> : null}
            {isInvalid && !isDefault ? <AlertCircle /> : null}
          </Circle>
          <Text fontSize="sm" fontWeight="bold">
            Step {stepData.id}
          </Text>
          <Text fontSize="sm" color={isSuccessFilled ? 'green.100' : 'dark.50'}>
            {stepData.label}
          </Text>
        </HStack>
        {(isSuccessFilled || stepWasOpened) && (
          <ChevronDownIcon
            opacity="0.6"
            onClick={toggleExpand}
            cursor="pointer"
            transition="all 0.2s"
            transform={!isExpanded ? 'rotate(180deg)' : ''}
          />
        )}
      </HStack>
      <Box
        width="full"
        transition="opacity 0.3s"
        height={isExpanded ? '100%' : '0'}
        opacity={isExpanded ? 1 : 0}
        visibility={isExpanded ? 'visible' : 'hidden'}
      >
        {(isSuccessFilled || stepWasOpened) && (
          <Divider my="3" color={isSuccessFilled ? 'green.500' : 'dark.100'} />
        )}
        {fields.length ? (
          <VStack alignItems="start" width="full">
            {fields.map((field, index) => (
              <HStack width="full" justifyContent="space-between" key={index}>
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
};
