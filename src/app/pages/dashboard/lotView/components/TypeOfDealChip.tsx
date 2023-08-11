import {ETypeOfDeal} from "@app/pages/offers/create/types";
import {Box, Heading} from "@chakra-ui/react";

export const TypeOfDealChip = ({typeOfDeal}) => {
    return (
        <Box
            textTransform='uppercase'
            padding='0.125rem 1rem'
            borderRadius='0rem 0.75rem'
            position='absolute'
            top={0}
            right={0}
            bg={typeOfDeal === ETypeOfDeal.BUY ? 'rgba(52, 168, 83, 0.30)' : 'red'}
        >
            <Heading variant='h5' fontWeight='600'>
                {typeOfDeal}
            </Heading>

        </Box>
    )
}
