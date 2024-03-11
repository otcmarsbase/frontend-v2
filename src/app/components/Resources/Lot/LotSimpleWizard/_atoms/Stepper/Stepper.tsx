import { FC, PropsWithChildren, useCallback } from 'react';

import { Stepper as ChakraStepper, UseStepsReturn } from '@chakra-ui/react';

import { Step, StepProps } from './Step';

export interface StepperProps extends UseStepsReturn {
  steps: StepProps[];
}

export const Stepper: FC<PropsWithChildren<StepperProps>> = ({
  steps,
  activeStep,
  isCompleteStep,
  setActiveStep,
}: StepperProps) => {
  const handleClick = useCallback(
    (index: number) => {
      if (!isCompleteStep(index)) return;

      setActiveStep(index);
    },
    [isCompleteStep, setActiveStep],
  );

  return (
    <ChakraStepper index={activeStep} w="full" gap={{ base: '1', md: '2' }}>
      {steps.map((step, index) => (
        <Step key={index} {...step} onClick={() => handleClick(index)} cursor={isCompleteStep(index) && 'pointer'} />
      ))}
    </ChakraStepper>
  );
};
