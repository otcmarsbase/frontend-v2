import React from "react";

import {Box, Heading, HStack} from "@chakra-ui/react";

export const TradeProgressChip = ({label, status}) => {
    return (
        <HStack justifyContent='space-between' w='100%'>
            <Heading variant='h5' color='dark.50' fontWeight='600'>
                {label}
            </Heading>
            <Box>{status}</Box>
        </HStack>
    )
}
