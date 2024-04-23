import { FC, useCallback, useEffect, useMemo } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { useToastInnerCallback } from '@app/hooks';
import { Button, VStack, chakra, useSteps } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import * as yup from 'yup';

import { StepResolver, Stepper } from './_atoms';
import { StepDescriptorKey, StepDescriptorsDictionary } from './const';
import { LotCreateModel, LotCreateSchema } from './schema';
import { useDefaultStep } from './useDefaultStep';
import { useStepSchema } from './useStepSchema';

export interface LotSimpleWizardProps {
  defaultValues?: LotCreateModel;
  direction: DeskGatewaySchema.TradeDirection;
  allowAllSteps?: boolean
  onSubmit: (inputs: LotCreateModel, meta: { isLastStep: boolean; stepKey?: StepDescriptorKey }) => Promise<void>;
}

export const LotSimpleWizard: FC<LotSimpleWizardProps> = ({ defaultValues, direction, allowAllSteps = false, onSubmit }) => {
  const innerDefaultValues = useMemo(
    () =>
      defaultValues
        ? LotCreateSchema.cast(defaultValues, { assert: false })
        : (LotCreateSchema.getDefault() as unknown as LotCreateModel),
    [defaultValues],
  );

  const defaultStep = useDefaultStep(innerDefaultValues);

  const stepperControls = useSteps({
    index: StepDescriptorsDictionary.keys().indexOf(defaultStep),
    count: StepDescriptorsDictionary.length,
  });

  const currentStep = useMemo(
    () => StepDescriptorsDictionary.keys()[stepperControls.activeStep],
    [stepperControls.activeStep],
  );
  const stepSchema = useStepSchema(currentStep);
  const resolver = useMemo(() => yupResolver(yup.lazy((value) => stepSchema.resolve(value))), [stepSchema]);

  const formMethods = useForm({
    defaultValues: innerDefaultValues,
    mode: 'onTouched',
    resolver,
  });

  const isLastStep = useMemo(
    () => stepperControls.activeStep === StepDescriptorsDictionary.length - 1,
    [stepperControls.activeStep],
  );

  useEffect(() => {
    formMethods.setValue('COMMON_DIRECTION', direction);
  }, [direction, formMethods]);

  const handleSubmit = useToastInnerCallback(
    useCallback<SubmitHandler<LotCreateModel>>(
      async (data) => {

        const stepData = stepSchema.cast(data, { assert: false, stripUnknown: true });

        await onSubmit(stepData, { isLastStep, stepKey: currentStep });

        if (isLastStep) return;

        stepperControls.goToNext();
      },
      [isLastStep, currentStep, onSubmit, stepSchema, stepperControls],
    ),
    {},
  );

  return (
    <VStack spacing="6" alignItems="flex-start">
      <Stepper {...stepperControls} steps={StepDescriptorsDictionary.values()} />
      <FormProvider {...formMethods}>
        <VStack
          as={chakra.form}
          spacing="6"
          alignItems="flex-start"
          w="full"
          onSubmit={formMethods.handleSubmit(handleSubmit, console.log)}
        >
          <StepResolver stepKey={currentStep} />
          <Button type="submit" w="full" isLoading={formMethods.formState.isSubmitting}>
            {isLastStep ? 'Finish' : 'Next step'}
          </Button>
        </VStack>
      </FormProvider>
    </VStack>
  );
};
