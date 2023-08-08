import React, {ReactNode} from 'react';
import {
    HStack, VStack,
} from '@chakra-ui/react';

export interface StickyContainerProps extends React.PropsWithChildren {
    sidebar: ReactNode;
    head: ReactNode;
    main: ReactNode;
    footer: ReactNode;
}

export const StickyContainer: React.FC<StickyContainerProps> = ({sidebar, head, main, footer}) => {
    return (
        <VStack padding={'1.6rem'} w={'89.5rem'} alignItems={'flex-start'}>
            <HStack alignItems={'flex-start'} w={'100%'} position='relative'>
                {sidebar}
                <VStack w={'100%'} h='fit-content'>
                    {head}
                    {main}
                </VStack>
            </HStack>

            {footer}
        </VStack>
    );
};
