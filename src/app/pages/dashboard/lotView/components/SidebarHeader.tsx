import {FC} from "react";
import {ISidebarHeader} from "@app/pages/dashboard/lotView/types";
import {Box, Heading, HStack, Image} from "@chakra-ui/react";
import {DownloadIcon} from "@shared/assets/DownloadIcon";

export const SidebarHeader:FC<ISidebarHeader> = ({Icon, name, analitics}) => {

    return (
        <HStack
            w='100%'
            h='5.5rem'
            justifyContent='space-between'
            padding='0.75rem 1.25rem'
            bg='dark.900'
            borderRadius='0.75rem'
        >
            <HStack gap='2.12rem'>
                <HStack gap='1.5rem'>
                    <Box w='4rem'>
                        <Icon width='4rem' height='4rem'/>
                    </Box>
                    <Heading variant='h4' fontSize={'lg'} fontFamily="promo">
                        {name}
                    </Heading>
                </HStack>
                <HStack
                    padding='0 0.625rem'
                    border='2px solid var(--ui-kit-white-10, rgba(255, 255, 255, 0.10))'
                    borderRadius='0.375'
                    fontFamily='Inter'
                    display='flex'
                    alignItems='center'
                    gap='0.62rem'
                >
                    <Box>
                        <DownloadIcon/>
                    </Box>
                    <Heading
                        variant='h5'
                        fontWeight='842'
                        whiteSpace='nowrap'
                    >

                        Get analitics

                    </Heading>
                </HStack>
                {/*<Box*/}
                {/*    borderRadius={'1.875rem'}*/}
                {/*    background={'#621CBC'}*/}
                {/*    padding={'0.125rem 0.625rem'}*/}
                {/*>*/}
                {/*    {lotType}*/}
                {/*    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>*/}
                {/*        <TooltipIcon/>*/}
                {/*    </Tooltip>*/}
                {/*</Box>*/}

            </HStack>
            {/*<VStack border={'2px solid skyblue'}>*/}
            {/*    <HStack>*/}
            {/*        {fields.map(field => <SidebarHeader field={field}/>)}*/}
            {/*    </HStack>*/}
            {/*    <HStack>*/}

            {/*    </HStack>*/}
            {/*</VStack>*/}
        </HStack>
    )
}
