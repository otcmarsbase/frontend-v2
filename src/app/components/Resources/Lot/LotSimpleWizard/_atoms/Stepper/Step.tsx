import { FC, ReactNode, useMemo } from 'react';

import { Box, HStack, StackProps, useStepContext, Text, ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Common } from '@shared/ui-icons';

export interface StepProps extends Omit<StackProps, 'title'> {
  icon: ComponentWithAs<'svg', IconProps>;
  title: ReactNode;
}

export const Step: FC<StepProps> = ({ title, icon: Icon, onClick, ...stackProps }) => {
  const { isLast, status, index } = useStepContext();

  const isIncomplete = useMemo(() => status === 'incomplete', [status]);

  return (
    <>
      <HStack
        rounded="light"
        border="1px solid"
        px={{ base: '2', md: '3' }}
        py={{ base: '1', md: '2' }}
        opacity={isIncomplete ? 0.5 : 1}
        alignItems="center"
        w="full"
        spacing={{ base: 1, md: 3 }}
        borderColor={isIncomplete ? 'dark.500' : 'orange.300'}
        onClick={onClick}
        {...stackProps}
      >
        <Icon color="orange.300" fontSize={{ base: '1.5rem', md: '2rem' }} lineHeight={1} />
        <Box fontWeight="500">
          <Text color="orange.300" fontSize={{ base: '3xs', md: 'xs' }}>
            Step {index + 1}
          </Text>
          <Text color="white" lineHeight={1} fontSize={{ base: 'xs', md: 'md' }}>
            {title}
          </Text>
        </Box>
      </HStack>
      {!isLast && (
        <Common.ChevronDoubleRightIcon
          fontSize={{ base: 'md', md: 'lg' }}
          color={isIncomplete ? 'dark.500' : 'orange.300'}
        />
      )}
    </>
  );
};
