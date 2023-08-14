import {progressAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(progressAnatomy.keys);

const baseStyle = definePartsStyle({
    label: {},
    filledTrack: {
        bg: 'orange.400',
        borderRadius: '0rem',
        transition: 'width 1s ease-in-out'
    },
    track: {
        bg: 'dark.600',
        borderRadius: '6.25rem'
    },
});

export const Progress = defineMultiStyleConfig({baseStyle});
