import { PropsWithChildren } from 'react';

import { Stack, StackProps, Text, ThemingProps, VStack } from '@chakra-ui/react';

export interface EmptyActionProps extends Omit<StackProps, 'title'>, ThemingProps<'EmptyAction'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const EmptyAction: React.FC<PropsWithChildren<EmptyActionProps>> = ({
  title = 'No items',
  description = 'No data',
  size = '2xl',
  children,
  ...stackProps
}) => {
  return (
    <VStack spacing={4} py={10}>
      <Text fontWeight="semibold" fontSize={size} textAlign="center">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
      <Stack pt={4}>{children}</Stack>
    </VStack>
  );
};
