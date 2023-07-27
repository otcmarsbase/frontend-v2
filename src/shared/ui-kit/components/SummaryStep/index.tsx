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
import { CheckmarkIcon, ChevronDownIcon, WaitingIcon } from '../../icons';

export interface SummaryStepProps extends Omit<StackProps, 'children'> {
  isSuccessFilled: boolean;
  stepData: {
    id: number;
    label: string;
  };
  fields: { name: string; value: any }[];
}

export const SummaryStep = ({
  stepData,
  isSuccessFilled,
  fields,
  ...stackProps
}: SummaryStepProps) => {
  const [isExpanded, setIsExpanded] = useState(isSuccessFilled);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    setIsExpanded(isSuccessFilled);
  }, [isSuccessFilled]);

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
          <Circle
            size="1.5rem"
            background={isSuccessFilled ? 'green.500' : 'dark.500'}
          >
            {!isSuccessFilled ? (
              <WaitingIcon color="dark.100" />
            ) : (
              <CheckmarkIcon />
            )}
          </Circle>
          <Text fontSize="sm" fontWeight="bold">
            Step {stepData.id}
          </Text>
          <Text fontSize="sm" color={isSuccessFilled ? 'green.100' : 'dark.50'}>
            {stepData.label}
          </Text>
        </HStack>
        {isSuccessFilled && (
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
        width="100%"
        transition="opacity 0.3s"
        height={isExpanded ? '100%' : '0'}
        opacity={isExpanded ? 1 : 0}
        visibility={isExpanded ? 'visible' : 'hidden'}
      >
        {isSuccessFilled && <Divider my="3" color="green.500" />}
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
};
