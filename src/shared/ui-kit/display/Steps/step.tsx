import { BoxProps, HStack, Text } from '@chakra-ui/react';

import { StepCircle } from './stepCircle';

interface StepProps extends Omit<BoxProps, 'title'> {
  title: React.ReactNode;
  index: number;
  isCompleted: boolean;
  isActive: boolean;
  isLastStep: boolean;
  isFirstStep: boolean;
  canClick: boolean;
}

export const Step = (props: StepProps) => {
  const { isActive, index, isCompleted, isLastStep, isFirstStep, title, canClick, ...stackProps } = props;

  return (
    <HStack cursor={canClick && 'pointer'} gap="1.5rem" py="0.5rem" {...stackProps}>
      <StepCircle index={index} isActive={isActive} isCompleted={isCompleted} />
      <Text
        textDecoration={isCompleted ? 'line-through' : ''}
        color={isActive ? 'white' : 'dark.300'}
        fontWeight="medium"
      >
        {title}
      </Text>
    </HStack>
  );
};
