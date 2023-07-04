import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export interface ButtonProps
  extends Omit<ChakraButtonProps, 'children' | 'variant'> {
  label: string;
  variant?: 'with-gradient';
  fullWidth?: boolean;
}

export const Button = ({
  label,
  variant = 'with-gradient',
  fullWidth,
  ...chakraProps
}: ButtonProps) => {
  return (
    <ChakraButton
      variant={variant}
      width={fullWidth ? '100%' : 'auto'}
      {...chakraProps}
    >
      {label}
    </ChakraButton>
  );
};
