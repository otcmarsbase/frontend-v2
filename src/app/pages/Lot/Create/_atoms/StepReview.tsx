import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { List } from '@shared/ui-kit';

type StepReviewField<T> = {
  renderTitle: (item: T) => React.ReactNode;
  isRequired: boolean;
  renderValue: (item: T) => React.ReactNode;
};

export interface StepReviewProps<T> {
  stepTitle: string;
  stepIndexTitle: string;
  model: T;
  fields: StepReviewField<T>[];
}

export const StepReview = <T = any,>({ stepTitle, stepIndexTitle, model, fields }: StepReviewProps<T>) => {
  return (
    <VStack p="2rem 1.5rem" alignItems="start" w="full" borderRadius="sm" bg="rgba(27, 27, 28, 0.60)" gap="1.25rem">
      <HStack>
        <Box
          borderRadius="62.5rem"
          bg="orange.300"
          px="0.75rem"
          py="0.1rem"
          fontSize="sm"
          fontWeight={800}
          color="white"
        >
          {stepIndexTitle}
        </Box>
        <Text fontSize="md" fontWeight={600} color="white">
          {stepTitle}
        </Text>
      </HStack>
      <VStack w="full" alignItems="start">
        {fields.map((field, index) => {
          return (
            <HStack w="full" key={index} justifyContent="space-between">
              <HStack>
                <Text color="white">{field.renderTitle(model)}</Text>
                {field.isRequired && <UIIcons.Common.RequiredIcon w="0.625rem" h="0.625rem" />}
              </HStack>
              {field.renderValue(model)}
            </HStack>
          );
        })}
      </VStack>
    </VStack>
  );
};
