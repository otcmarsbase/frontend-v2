import { PropsWithChildren } from 'react';

import {
  Center,
  CenterProps,
  chakra,
  Icon,
  omitThemingProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { CgSpinnerTwo } from 'react-icons/cg';

export interface LoaderProps extends ThemingProps<'Loader'>, CenterProps {
  isLoading?: boolean;
  loadingText?: React.ReactNode;
}

export const Loader: React.FC<PropsWithChildren<LoaderProps>> = ({ isLoading, loadingText, children, ...props }) => {
  const styles = useMultiStyleConfig('Loader', props);
  const centerBoxProps = omitThemingProps(props);

  if (isLoading)
    return (
      <Center __css={styles.container} gap="4" {...centerBoxProps}>
        {loadingText && <chakra.div __css={styles.text}>{loadingText}</chakra.div>}
        <Icon as={CgSpinnerTwo} __css={styles.loader} />
      </Center>
    );
  return <>{children}</>;
};
