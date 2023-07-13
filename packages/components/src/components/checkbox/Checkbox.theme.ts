import { StyleConfig } from '@chakra-ui/react';

export const CheckboxTheme: StyleConfig = {
  baseStyle: {
    label: {
      color:'red'
    },
    container: {
      border: '2px solid orange'
    },
    control: {
      border:'2px solid white'
    }
  },
  variants: {
    // 'with-gradient': {
    //   bgGradient: 'linear(140deg, #FF6639 0%, #7E25B5 100%)',
    //   color: 'white',
    // },
  },
};
