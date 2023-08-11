import {FC} from "react";
import {Box, Heading, HStack, Tooltip, VStack} from "@chakra-ui/react";
import {CopyIcon} from "@shared/assets/CopyIcon";
import {TooltipIcon} from "@shared/assets/TooltipIcon";
import Countdown from "@shared/ui-kit/components/Timer/Timer";
import copyToClipboard from "@shared/utils/copyToClipBoard";
import { ILotInfo } from "../types";
export const LotBasicInfo: FC<{ LotInfoBasicData: ILotInfo }> = ({LotInfoBasicData}) => {
    const {id, typeOfDeal, typeOfLot, userAvatar, userName, nameOfSeller,} = LotInfoBasicData;
    const copyID = () => {
        copyToClipboard(id)
        console.log('copyID')
    }
    let nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + 1);
    return (
        <HStack bg='dark.900' w='100%' padding='1rem 1.25rem' borderRadius='0.75rem' gap='0.75rem' justifyContent='space-between'>
            <VStack gap='0.25rem' padding='0 1.5rem 0 0' flex='1' fontWeight='500' alignItems='flex-start'>
                <HStack gap='0.25rem'>
                    <Heading variant='h5' fontWeight='500' color='dark.50'>
                        ID
                    </Heading>
                    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                        <TooltipIcon opacity='0.6' w='1rem' h='1rem'/>
                    </Tooltip>
                </HStack>
                <HStack fontWeight='500' gap='0.25rem' fontSize='sm' onClick={copyID}>
                    <Box>
                        {id}
                    </Box>
                    <Box onClick={copyID}>
                        <CopyIcon/>
                    </Box>
                </HStack>
            </VStack>
            <VStack gap='0.25rem' padding='0 1.5rem' flex='1' alignItems='flex-start'>
                <HStack gap='0.25rem'>
                    <Heading variant='h5' color='dark.50'>
                        Lot
                    </Heading>
                </HStack>
                <Heading variant='h5' fontWeight='500' color={typeOfDeal === 'Sell' ? 'red.400' : 'green.400'}
                         textTransform='uppercase'>
                    {typeOfDeal}
                </Heading>
            </VStack>
            <VStack gap='0.25rem' padding='0 1.5rem' flex='2' alignItems='flex-start'>
                <HStack gap='0.25rem'>
                    <Heading variant='h5' color='dark.50'>
                        Type
                    </Heading>
                    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                        <TooltipIcon opacity='0.6' w='1rem' h='1rem'/>
                    </Tooltip>
                </HStack>
                <Box fontWeight='500' fontSize='sm'>
                    {typeOfLot}
                </Box>
            </VStack>
            <VStack gap='0.25rem' padding='0 1.5rem' flex='2' alignItems='flex-start'>
                <HStack gap='0.25rem'>
                    <Heading variant='h5' color='dark.50'>
                        Account
                    </Heading>
                    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                        <TooltipIcon opacity='0.6' w='1rem' h='1rem'/>
                    </Tooltip>
                </HStack>
                <HStack gap='0.25rem'>
                    <Box>
                        {userAvatar}
                    </Box>
                    <Box fontWeight='500' fontSize='sm'>
                        {userName}
                    </Box>
                </HStack>
            </VStack>
            <VStack gap='0.25rem' padding='0 1.5rem' flex='2' alignItems='flex-start'>
                <HStack gap='0.25rem' color='dark.50'>
                    <Heading variant='h5'>
                        Seller
                    </Heading>
                    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                        <TooltipIcon opacity='0.6' w='1rem' h='1rem'/>
                    </Tooltip>
                </HStack>
                <Box fontWeight='500' fontSize='sm'>
                    {nameOfSeller}
                </Box>
            </VStack>
            <VStack gap='0.25rem' padding='0 0 0 1.5rem ' flex='2' alignItems='flex-end'>
                <Heading variant='h5' color='dark.50'>
                    Auction ends in:
                </Heading>

                <Box fontWeight='500' fontSize='sm'>
                    <Countdown
                        endDate={nextDate}
                        now={new Date()}
                        canUseDays={true}

                    />

                    {/*03:03:52*/}
                </Box>
            </VStack>
        </HStack>
    )
}
