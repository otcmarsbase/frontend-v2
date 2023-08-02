import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
  },
  list: {
    // this will style the MenuList component
    bg: 'dark.700',
    borderRadius: '0.5rem',
    border: 'none',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    bg: 'dark.700',
    cursor: 'pointer',
    _hover: {
      bg: 'rgba(81, 84, 96, 0.30)',
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
  },
  divider: {
    // this will style the MenuDivider component
  },
});
// export the base styles in the component theme
export const Menu = defineMultiStyleConfig({ baseStyle });
