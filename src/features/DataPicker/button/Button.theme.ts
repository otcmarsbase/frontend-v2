import { StyleConfig } from '@chakra-ui/react';

export const ButtonTheme: StyleConfig = {
    baseStyle: {
        borderRadius: '0.5rem',
        lineHeight: '1.5rem',
        fontWeight: 600,
        fontSize: '1rem',
        padding: '1.25rem 9.5rem',
    },
    variants: {
        'with-gradient': {
            bgGradient: 'linear(140deg, #FF6639 0%, #7E25B5 100%)',
            color: 'white',
        },
    },
};
