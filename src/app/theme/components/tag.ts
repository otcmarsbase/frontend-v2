import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
});

const variants = {
  petal: definePartsStyle({
    container: {},
  }),
};

export const Tag = defineMultiStyleConfig({ baseStyle, variants });
