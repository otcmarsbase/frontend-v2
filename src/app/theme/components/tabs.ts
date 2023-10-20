import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const variants = {
  promo: defineStyle({
    root: {},
    tab: {
      color: 'dark.50',
      transitionProperty: 'var(--chakra-transition-property-common)',
      transitionDuration: 'var(--chakra-transition-duration-normal)',
      _selected: {
        color: 'white',
        position: 'relative',
        _before: {
          content: "''",
          position: 'absolute',
          height: '0.375rem',
          left: 0,
          right: 0,
          background: 'orange.500',
          bottom: '-0.2rem',
          borderRadius: 'sm',
        },
      },
    },
    tablist: {
      w: 'full',
      borderBottom: '0.0625rem solid',
      borderColor: 'dark.300',
      mb: '1rem',
    },
    tabpanel: {
      padding: 'none !important',
    },
    tabpanels: {},
    indicator: {},
  }),
};
const baseStyle = definePartsStyle({
  root: {
    width: '100%',
  },
  tab: {},
  tablist: {
    width: 'fit-content',
  },
  tabpanel: {},
  tabpanels: {},
  indicator: {},
});

export const Tabs = defineMultiStyleConfig({
  variants,
  baseStyle,
});
