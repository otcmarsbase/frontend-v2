import { ReactNode } from 'react';

import { Dictionary } from '@app/dictionary';
import { SimpleGrid, VStack, Button, Box, Text } from '@chakra-ui/react';
import { Steps } from '@shared/ui-kit';

export interface LotWizardStep<T extends string> {
  title: string;
  description: string;
  stepTitle: string;
  backSteps: T[];
  skippable: boolean;
}

export interface LotWizardViewProps<T extends string> {
  title?: string;
  description?: string;
  isLoading?: boolean;
  currentStep: T;
  stepDictionary: Dictionary<T, LotWizardStep<T>>;
  onSkip?: () => void;
  onStepChange: (step: T) => void;
  renderStep: () => ReactNode;
}

export const LotWizardView = <T extends string>({
  title,
  description,
  isLoading,
  renderStep,
  onSkip,
  currentStep,
  onStepChange,
  stepDictionary,
}: LotWizardViewProps<T>) => {
  return (
    <SimpleGrid gridTemplateColumns="1fr 18rem" w="full" gap="0" alignItems="stretch" position="relative">
      <Box borderRight="1px solid" w="full" borderColor="dark.800">
        <VStack alignItems="start" p="2rem" pb="0">
          {title && (
            <Text fontSize="2md" color="white" fontWeight="600">
              {title}
            </Text>
          )}
          {description && (
            <Text color="dark.50" fontSize="sm">
              {description}
            </Text>
          )}
        </VStack>
        <VStack p="2rem" gap="2rem" alignItems="start">
          {renderStep()}
        </VStack>
      </Box>
      <Box p="2rem" position="relative" display="flex" flexDirection="column" justifyContent="space-between">
        <Box position="sticky" top="2rem">
          <Steps
            value={currentStep}
            onChange={onStepChange}
            canClickItem={(key) => !isLoading && stepDictionary.get(currentStep).backSteps.indexOf(key) !== -1}
            items={stepDictionary.keys()}
            renderTitle={(key) => stepDictionary.get(key).stepTitle}
          />
        </Box>
        <VStack position="sticky" bottom="2rem" mt="10rem" gap="1rem">
          <Button w="full" color="white" type="submit" isLoading={isLoading}>
            Next step
          </Button>
          {stepDictionary.get(currentStep).skippable && (
            <Button w="full" variant="darkOutline" onClick={onSkip}>
              Skip
            </Button>
          )}
        </VStack>
      </Box>
    </SimpleGrid>
  );
};
