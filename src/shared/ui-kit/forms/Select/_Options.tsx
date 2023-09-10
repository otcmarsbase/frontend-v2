import { chakra, forwardRef, HTMLChakraProps, omitThemingProps, ThemingProps, useMultiStyleConfig } from '@chakra-ui/react';

export interface SelectOptionProps extends HTMLChakraProps<'li'>, ThemingProps {
  value: string;
}

export const SelectOption = forwardRef<SelectOptionProps, 'li'>((props, ref) => {
  const { children, value, ...rest } = omitThemingProps(props);
  const { option } = useMultiStyleConfig('CustomSelect', props);
  return (
    <chakra.li ref={ref} __css={option} {...rest}>
      {children || value}
    </chakra.li>
  );
});
