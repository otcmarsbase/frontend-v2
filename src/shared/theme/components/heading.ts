import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const md = defineStyle({
    fontSize: '2md',
});

const variants = {
    h3: defineStyle({
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '1.5rem',
        textTransform: 'uppercase'
    }),
    h4: defineStyle({
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '1.25rem'
    }),
    h5: defineStyle({
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '1.5rem'
    }),

};

export const Heading = defineStyleConfig({
    variants,
    baseStyle: {},
    sizes: {md},
});
