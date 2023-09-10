import { BoxProps, Divider, HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

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
  const isMobile = useBreakpointValue({ base: true, md: false });

  const orientation = useBreakpointValue<'horizontal' | 'vertical'>({
    base: 'vertical',
    md: 'horizontal',
  });

  return (
    <HStack cursor={canClick && 'pointer'} gap="1.5rem" py="0.5rem">
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

  return (
    <Stack
      cursor={canClick && 'pointer'}
      spacing="4"
      direction={{ base: 'row', md: 'column' }}
      flex="1"
      {...stackProps}
    >
      <Stack spacing="0" align="center" direction={{ base: 'column', md: 'row' }}>
        <Divider
          display={isMobile ? 'none' : 'initial'}
          orientation={orientation}
          borderWidth="1px"
          borderColor={isFirstStep ? 'transparent' : isCompleted || isActive ? 'accent' : 'inherit'}
        />
        {/* <StepCircle isActive={isActive} isCompleted={isCompleted} /> */}
        <Divider
          orientation={orientation}
          borderWidth="1px"
          borderColor={isCompleted ? 'accent' : isLastStep ? 'transparent' : 'inherit'}
        />
      </Stack>
      <Stack spacing="0.5" pb={isMobile && !isLastStep ? '8' : '0'} align={{ base: 'start', md: 'center' }}>
        <Text color="emphasized" fontWeight="medium">
          {title}
        </Text>
        {/* {description && <Text color="muted">{description}</Text>} */}
      </Stack>
    </Stack>
  );
};
