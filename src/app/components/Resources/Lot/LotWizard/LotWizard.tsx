import { useCallback, useMemo, useState } from 'react';
import { DefaultValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { createDictionary } from '@app/dictionary';
import { Heading, HStack, VStack, Text, chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Section } from '@shared/ui-kit';

import { LotWizardProvider, FormContext, useLotWizard, LotWizardView, StepResolver } from './_atoms';
import { LotWizardDictionary, StepDescriptorDictionary, StepDescriptorKey } from './const';
import { LotCreateModel, LotCreateSchema } from './schema';
import { LotWizardStep } from './types';

export interface LotWizardProps {
  defaultValues?: DefaultValues<LotCreateModel>;
  onSubmit: SubmitHandler<LotCreateModel>;
}

const LotWizardInner: React.FC<LotWizardProps> = ({ defaultValues, onSubmit }) => {
  const { formContext } = useLotWizard();

  const formMethods = useForm<LotCreateModel, FormContext>({
    mode: 'onTouched',
    defaultValues: defaultValues || (LotCreateSchema.getDefault() as any),
    context: formContext,
    resolver(values, context, options) {
      if (!context?.schema)
        return {
          values,
          errors: {},
        };
      // @ts-ignore
      return yupResolver(context.schema)(values, context, options);
    },
  });

  const [direction] = formMethods.watch(['COMMON_DIRECTION_INPUT']);

  const stepsDictionary = useMemo(() => {
    const dictionary = createDictionary<StepDescriptorKey, LotWizardStep<StepDescriptorKey>>().setFromDictionary(
      StepDescriptorDictionary,
    );

    if (direction === 'BUY') {
      dictionary.delete('INVEST_DOC_ROUND');
    }

    return dictionary.asReadonly();
  }, [direction]);

  const [currentStep, setCurrentStep] = useState<StepDescriptorKey>('INVEST_DOC_START');

  const handleSubmit: SubmitHandler<LotCreateModel> = useCallback(
    async (data) => {
      await onSubmit(data);

      const nextStepIndex = stepsDictionary.keys().findIndex((key) => key === currentStep) + 1;
      const nextStep = stepsDictionary.keys()[nextStepIndex];

      setCurrentStep(nextStep);
    },
    [currentStep, onSubmit, stepsDictionary],
  );

  return (
    <VStack w="full" alignItems="start">
      <HStack w="full" justifyContent="space-between" mb="1.25rem">
        <VStack alignItems="start" gap="0.1rem">
          <Heading fontSize="lg">{LotWizardDictionary.get('HEADER').title}</Heading>
          <Text color="dark.50" fontSize="sm">
            {LotWizardDictionary.get('HEADER').description}
          </Text>
        </VStack>
      </HStack>

      <Section w="full" p="0" borderRadius="sm">
        <FormProvider {...formMethods}>
          <chakra.form w="full" onSubmit={formMethods.handleSubmit(handleSubmit)}>
            <LotWizardView
              stepDictionary={stepsDictionary}
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

export const LotWizard: React.FC<LotWizardProps> = (props) => (
  <LotWizardProvider>
    <LotWizardInner {...props} />
  </LotWizardProvider>
);
