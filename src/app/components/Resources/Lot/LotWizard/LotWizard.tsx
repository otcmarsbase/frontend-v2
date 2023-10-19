import { useCallback, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { createDictionary } from '@app/dictionary';
import { useToastInnerCallback } from '@app/hooks';
import { Heading, HStack, VStack, Text, chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Section } from '@shared/ui-kit';
import * as yup from 'yup';

import { LotWizardView, StepResolver } from './_atoms';
import { StepDescriptorsDictionary, StepDescriptorKey } from './const';
import { LotCreateModel, LotCreateSchema } from './schema';
import { LotWizardStep } from './types';
import { useDefaultStep } from './useDefaultStep';
import { useStepSchema } from './useStepSchema';

export interface LotWizardProps {
  defaultValues?: LotCreateModel;
  onSubmit: (step: StepDescriptorKey, data: LotCreateModel) => Promise<void>;
}

export const LotWizard: React.FC<LotWizardProps> = ({ defaultValues, onSubmit }) => {
  const innerDefaultValues = useMemo(
    () => defaultValues || (LotCreateSchema.getDefault() as unknown as LotCreateModel),
    [defaultValues],
  );

  const defaultStep = useDefaultStep(innerDefaultValues);
  const [currentStep, setCurrentStep] = useState<StepDescriptorKey>(defaultStep);

  const stepSchema = useStepSchema(currentStep);

  const resolver = useMemo(() => yupResolver(yup.lazy((value) => stepSchema.resolve(value))), [stepSchema]);

  const formMethods = useForm<LotCreateModel>({
    mode: 'onTouched',
    defaultValues: innerDefaultValues,
    resolver,
  });

  const [direction] = formMethods.watch(['COMMON_DIRECTION_INPUT']);

  const stepDescriptors = useMemo(() => {
    const dictionary = createDictionary<StepDescriptorKey, LotWizardStep<StepDescriptorKey>>().setFromDictionary(
      StepDescriptorsDictionary,
    );

    if (direction === 'BUY') {
      dictionary.delete('INVEST_DOC_ROUND');
    }

    return dictionary.asReadonly();
  }, [direction]);

  const handleSubmit = useToastInnerCallback(
    useCallback<SubmitHandler<LotCreateModel>>(
      async (data) => {
        const stepData = stepSchema.cast(data, { stripUnknown: true });

        await onSubmit(currentStep, stepData);

        const nextStepIndex = stepDescriptors.keys().findIndex((key) => key === currentStep) + 1;
        const nextStep = stepDescriptors.keys()[nextStepIndex];

        if (!nextStep) return;

        setCurrentStep(nextStep);
      },
      [currentStep, onSubmit, stepDescriptors, stepSchema],
    ),
    {},
  );

  return (
    <VStack w="full" alignItems="start">
      <HStack w="full" justifyContent="space-between" mb="1.25rem">
        <VStack alignItems="start" gap="0.1rem">
          <Heading fontSize="lg">Creating an offer</Heading>
          <Text color="dark.50" fontSize="sm">
            Set suitable conditions
          </Text>
        </VStack>
      </HStack>

      <Section w="full" p="0" borderRadius="sm">
        <FormProvider {...formMethods}>
          <chakra.form w="full" onSubmit={formMethods.handleSubmit(handleSubmit)}>
            <LotWizardView
              stepDictionary={stepDescriptors}
              currentStep={currentStep}
              onStepChange={setCurrentStep}
              stepComponent={<StepResolver stepKey={currentStep} />}
            />
          </chakra.form>
        </FormProvider>
      </Section>
    </VStack>
  );
};
