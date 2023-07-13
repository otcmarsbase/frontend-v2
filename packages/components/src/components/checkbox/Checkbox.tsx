import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
} from '@chakra-ui/react';
import {ReactNode} from "react";

export interface CheckboxProps extends ChakraCheckboxProps {
  children: ReactNode,
  checked:boolean
}

export const Checkbox = ({
                           checked,
                           children,
                           ...chakraProps
                         }: CheckboxProps) => {
  return (
    <ChakraCheckbox
      checked={checked}
      {...chakraProps}
    >
      {children}
    </ChakraCheckbox>
  );
};
