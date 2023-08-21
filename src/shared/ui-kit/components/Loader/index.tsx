import { PropsWithChildren } from 'react';

import {
  CenterProps,
  Text,
  omitThemingProps,
  ThemingProps,
  useMultiStyleConfig,
  Spinner,
  VStack,
  Center,
} from '@chakra-ui/react';

export interface LoaderProps extends ThemingProps<'Loader'>, CenterProps {
  isLoading?: boolean;
  loadingText?: React.ReactNode;
}

export const Loader: React.FC<PropsWithChildren<LoaderProps>> = ({
  isLoading,
  loadingText = 'Loading...',
  children,
  ...props
}) => {
  if (isLoading)
    return (
      <VStack h="25rem" justifyContent="center">
        <Spinner size="lg" color="orange.500" />
        {loadingText && <Text>{loadingText}</Text>}
      </VStack>
    );
  return <>{children}</>;
};
