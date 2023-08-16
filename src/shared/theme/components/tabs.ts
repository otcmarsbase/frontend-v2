import {tabsAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers, defineStyle} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(tabsAnatomy.keys);

const variants = {
    asset: defineStyle({
        root: {
            // width: '100%'
        },
        tab: {
            color: 'dark.50',
            transitionProperty: 'var(--chakra-transition-property-common)',
            transitionDuration: 'var(--chakra-transition-duration-normal)',
            _selected: {
                color:'white',
                borderBottom: '6px solid orange.500'
            }
        },
        tablist: {
        },
        tabpanel: {},
        tabpanels: {},
        indicator: {

        },
    })
};
const baseStyle = definePartsStyle({
    root: {
        width: '100%'
    },
    tab: {},
    tablist: {
        width:'fit-content'
    },
    tabpanel: {},
    tabpanels: {},
    indicator: {},
});

export const Tabs = defineMultiStyleConfig({
    variants,
    baseStyle
});
