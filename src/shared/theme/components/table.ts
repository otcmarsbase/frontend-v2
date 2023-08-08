import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  th:{
    border:'none',
    paddingInlineStart:0,
    paddingInlineEnd:0,
    paddingTop:0,
    paddingBottom:0
  },

  thead: {
    position: "sticky",
    top:0,
    bg:'rgba(27, 27, 28, 1)',
    color:'white',
    fontSize:'xs'
  },
  td:{
    border:'none',
    paddingInlineStart:0,
    paddingInlineEnd:0,
    paddingTop:0,
    paddingBottom:0
  },

});

export const Table = defineMultiStyleConfig({ baseStyle });
