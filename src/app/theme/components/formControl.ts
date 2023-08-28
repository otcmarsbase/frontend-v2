import { formAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $fg = cssVar('form-control-color');

const baseStyleRequiredIndicator = defineStyle({
  marginStart: '1',
  [$fg.variable]: 'colors.red.500',
  _dark: {
    [$fg.variable]: 'colors.red.300',
  },
  color: $fg.reference,
});

const baseStyleHelperText = defineStyle({
  [$fg.variable]: 'colors.dark.100',
  color: $fg.reference,
  lineHeight: 'normal',
  fontSize: 'sm',
  mt: '1',
});

const baseStyle = definePartsStyle({
  container: {
    label: {
      fontSize: 'sm',
      fontWeight: 400,
      mb: '0.4',
    },
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText,
});

export const Form = defineMultiStyleConfig({
  baseStyle,
});
