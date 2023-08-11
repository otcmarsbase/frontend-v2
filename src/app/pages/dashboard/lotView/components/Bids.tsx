import {FC} from "react";
import {BidsList} from "@app/pages/dashboard/lotView/components/BidsList";
import {IBidsProps} from "@app/pages/dashboard/lotView/types";
import {Box, Button, Heading, HStack, Select, VStack} from "@chakra-ui/react";
import {PlusBtnIcon} from "@shared/assets/PlusBtnIcon";

export const Bids: FC<IBidsProps> = ({bids, createBid, viewOrderHandler, isBidder}) => {
    return (
        <VStack h='100%'
                w='100%'
                padding='1.5rem 1.25rem'
                bg='rgba(27, 27, 28, 0.6)'
                borderRadius='0.5rem'
                gap='2rem'
        >
            <HStack justifyContent={'space-between'} h='2rem' fontWeight={'700'} lineHeight={'1.5rem'}
                    textTransform={'uppercase'} w={'100%'}>
                <HStack flex='1'>
                    <Heading variant='h3'>
                        Bids
                    </Heading>
                    <Box padding={'0px 0.25rem'} bg={'orange.500'} borderRadius='1.6875rem'>
                        <Box fontSize={'0.8125rem'}>{bids && bids.length}</Box>
                    </Box>
                </HStack>
                <HStack flex='auto' justifyContent='flex-end'>
                    <Select
                        bg='dark.950'
                        borderColor='dark.200'
                        color='dark.50'
                        placeholder='Sort by'
                        borderRadius='0.375rem'
                        h='2rem'
                        w='9.375rem'
                    >
                        <option value='option3'>Bid FDV</option>
                        <option value='bidSize'>Bid size</option>
                        <option value='deadline'>Deadline</option>
                        <option value='status'>Status</option>
                    </Select>
                    <Button variant='brand' size='xs' borderRadius='0.375rem' padding='0.5rem 0.75rem' onClick={createBid}>
                        <HStack>
                            <PlusBtnIcon/>
                                <Heading variant='h4'>
                                    Create Bid
                                </Heading>
                        </HStack>
                    </Button>
                </HStack>

            </HStack>
            <Box overflowY="auto" h="100%">
                <BidsList
                    bids={bids}
                    isBidder={isBidder}
                    viewOrderHandler={viewOrderHandler}
                />
            </Box>
        </VStack>
)
}
