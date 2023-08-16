import {FC} from "react";

import {ILotViewLinks} from "@app/pages/dashboard/lotView/types";
import {Box, Heading, HStack} from "@chakra-ui/react";

export const LinksContainer: FC<ILotViewLinks> = ({icon, text, href}) => {
    return (
        <HStack
            borderRadius='0.25rem'
            bg='rgba(255, 255, 255, 0.10)'
            padding='0.25rem 0.75rem'
            onClick={() => console.log('href', href)}
        >
            <Box color='white'>
                {icon}
            </Box>
            <Heading variant='h5' fontWeight='500' color='dark.50'>
                {text}
            </Heading>
        </HStack>
    )
}
