import { useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { VStack, Button, Box, Text, SimpleGrid } from '@chakra-ui/react';
import { Steps } from '@shared/ui-kit';

import { StartInfoFields, ProjectInfoFields, RoundInfoFields, LotInfoFields } from './_steps';
import { ReviewStep } from './_steps/REVIEW';
import { CreateStepDictionary, SafeSellStepType } from './const';

export function DocumentSafeSell() {
  const [step, setStep] = useState<SafeSellStepType>('START_INFO');
  const stepDictionary = useMemo(() => CreateStepDictionary.get(step), [step]);
  const { handleSubmit } = useFormContext();

  const onNext = useCallback(() => {
    switch (step) {
      case 'START_INFO':
        setStep('PROJECT_INFO');
        break;
      case 'PROJECT_INFO':
        setStep('ROUND_INFO');
        break;
      case 'ROUND_INFO':
        setStep('LOT_INFO');
        break;
      case 'LOT_INFO':
        setStep('REVIEW');
        break;
    }
  }, [step]);

  const StepComponent = useMemo(() => {
    switch (step) {
      case 'START_INFO':
        return StartInfoFields;
      case 'PROJECT_INFO':
        return ProjectInfoFields;
      case 'ROUND_INFO':
        return RoundInfoFields;
      case 'LOT_INFO':
        return LotInfoFields;
      case 'REVIEW':
        return ReviewStep;
    }
  }, [step]);

  return (
    <SimpleGrid gridTemplateColumns="1fr 18rem" w="full" gap="0" alignItems="stretch" position="relative">
      <Box borderRight="1px solid" w="full" borderColor="dark.800">
        <VStack alignItems="start" p="2rem" pb="0">
          {stepDictionary.title && (
            <Text fontSize="2md" color="white" fontWeight="600">
              {stepDictionary.title}
            </Text>
          )}
          {stepDictionary.description && (
            <Text color="dark.50" fontSize="sm">
              {stepDictionary.description}
            </Text>
          )}
        </VStack>
        <StepComponent />
      </Box>
      <Box p="2rem" position="relative" display="flex" flexDirection="column" justifyContent="space-between">
        <Box position="sticky" top="2rem">
          <Steps
            value={step}
            onChange={(step) => setStep(step)}
            canClickItem={(item) => stepDictionary.backSteps.indexOf(item) !== -1}
            items={CreateStepDictionary.keys()}
            renderKey={(item) => item}
            renderTitle={(item) => CreateStepDictionary.get(item).stepTitle}
          />
        </Box>
        <VStack position="sticky" bottom="2rem" mt="10rem" gap="1rem">
          <Button w="full" color="white" onClick={handleSubmit(onNext)}>
            Next step
          </Button>
          {stepDictionary.skippable && (
            <Button w="full" variant="darkOutline" onClick={onNext}>
              Skip
            </Button>
          )}
        </VStack>
      </Box>
    </SimpleGrid>
  );
}
