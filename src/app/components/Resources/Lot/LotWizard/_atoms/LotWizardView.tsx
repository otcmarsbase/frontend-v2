import { ReactNode, useMemo } from 'react';

import { ReadonlyDictionary } from '@app/dictionary';
import { SimpleGrid, VStack, Button, Box, Text } from '@chakra-ui/react';
import { Steps } from '@shared/ui-kit';

import { LotWizardStep } from '../types';

export interface LotWizardViewProps<T extends string> {
  title?: string;
  description?: string;
  isLoading?: boolean;
  currentStep: T;
  stepDictionary: ReadonlyDictionary<T, LotWizardStep<T>>;
  onSkip?: () => void;
  onStepChange: (step: T) => void;
  stepComponent: ReactNode;
  isLastStep?: boolean;
}

export const LotWizardView = <T extends string>({
  isLoading,
  stepComponent,
  onSkip,
  currentStep,
  onStepChange,
  stepDictionary,
  isLastStep,
}: LotWizardViewProps<T>) => {
  const currentStepDescriptor = useMemo(() => stepDictionary.get(currentStep), [stepDictionary, currentStep]);

  return (
    <SimpleGrid gridTemplateColumns="1fr 18rem" w="full" gap="0" alignItems="stretch" position="relative">
      <Box borderRight="1px solid" w="full" borderColor="dark.800">
        <VStack alignItems="start" p="2rem" pb="0">
          {currentStepDescriptor.title && (
            <Text fontSize="2md" color="white" fontWeight="600">
              {currentStepDescriptor.title}
            </Text>
          )}
          {currentStepDescriptor.description && (
            <Text color="dark.50" fontSize="sm">
              {currentStepDescriptor.description}
            </Text>
          )}
        </VStack>
        <VStack p="2rem" gap="2rem" alignItems="start">
          {stepComponent}
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
            {isLastStep ? 'Pulish Lot' : 'Next step'}
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
