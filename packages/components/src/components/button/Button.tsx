import {ReactNode} from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export interface ButtonProps extends Omit<ChakraButtonProps, 'children' | 'variant'> {
  children: ReactNode;
  variant?: 'with-gradient';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'with-gradient',
  className,
  fullWidth,
  ...chakraProps
}: ButtonProps) => {
  return (
    <ChakraButton
      className={className ? className : undefined}
      variant={variant}
      width={fullWidth ? '100%' : 'auto'}
      {...chakraProps}
    >
      {children}
    </ChakraButton>
  );
};
