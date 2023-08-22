import React, {FC} from "react";

import {Heading, HStack, Img, Link, VStack} from "@chakra-ui/react";
import {formatAddress} from "@shared/utils";

export interface IDealParticipants {
    offerMakerName: string,
    offerMakerIcon: string,
    offerMakerWallet: string,
    moderatorName: string,
    moderatorIcon: string,
    moderatorWallet: string,
    bidMakerName: string,
    bidMakerIcon: string,
    bidMakerWallet: string,
    telegramChatLink: string
}

export const DealParticipants: FC<IDealParticipants> = ({
                                                            offerMakerName,
                                                            offerMakerIcon,
                                                            offerMakerWallet,
                                                            moderatorName,
                                                            moderatorIcon,
                                                            moderatorWallet,
                                                            bidMakerName,
                                                            bidMakerIcon,
                                                            bidMakerWallet,
                                                            telegramChatLink
                                                        }) => {
    return (
        <VStack
            gap='1.5rem'
            padding='1.5rem 1.25rem'
            bg="dark.900"
            flex='2'
            borderRadius="0.75rem"
            width="full"
            transition="all 0.3s"
            cursor="pointer"
            _hover={{
                bg: 'dark.800',
            }}
        >
            <HStack justifyContent='space-between' w='full'>
                <Heading variant='h3' fontSize='1rem' textTransform='uppercase' w='100%'>
                    Deal participants
                </Heading>
                <Link
                    padding='0.5rem 0.75rem'
                    borderRadius='0.375rem'
                    border='2px solid var(--ui-kit-white-10, rgba(255, 255, 255, 0.10))'
                    href={telegramChatLink}
                    target={'_blank'}
                >
                    <Heading variant='h4' whiteSpace='nowrap'>
                        Telegram chat
                    </Heading>
                </Link>
            </HStack>
            <HStack justifyContent='space-between' w='full'>
                <VStack w='100%' alignItems='flex-start' gap='1.5rem'>
                    <VStack alignItems='flex-start' gap='0.25rem'>
                        <Heading variant='h5' fontWeight={600} color='dark.50' whiteSpace='nowrap'>
                            Offer-Maker
                        </Heading>
                        <HStack width='9.125rem'>
                            <Img w='1.5rem' src={offerMakerIcon} alt={'avtr'}/>
                            <Heading variant='h5' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" fontWeight={500}>
                                {offerMakerName}
                            </Heading>
                        </HStack>
                    </VStack>
                    <VStack alignItems='flex-start' gap='0.25rem'>
                        <Heading variant='h5' fontWeight={600} color='dark.50'>
                            Wallet Offer-Maker
                        </Heading>
                        <Heading variant='h5' fontWeight={500}>
                            {formatAddress(offerMakerWallet)}
                        </Heading>
                    </VStack>
                </VStack>

                <VStack w='100%' alignItems='flex-start' gap='1.5rem'>
                    <VStack alignItems='flex-start' gap='0.25rem'>
                        <Heading variant='h5' fontWeight={600} color='dark.50'>
                            Moderator
                        </Heading>
                        <HStack width='9.125rem'>
                            <Img w='1.5rem' src={moderatorIcon} alt={'avtr'}/>
                            <Heading variant='h5' fontWeight={500} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                                {moderatorName}
                            </Heading>
                        </HStack>
                    </VStack>
                    <VStack w='100%' alignItems='flex-start' gap='0.25rem'>
                        <Heading variant='h5' fontWeight={600} color='dark.50'>
                            Wallet Moderator
                        </Heading>
                        <Heading variant='h5' fontWeight={500}>
                            {formatAddress(moderatorWallet)}
                        </Heading>
                    </VStack>

                </VStack>

                <VStack w='100%' alignItems='flex-start' gap='1.5rem'>
                    <VStack alignItems='flex-start' gap='0.25rem'>
                        <Heading variant='h5' fontWeight={600} color='dark.50'>
                            Bid-Maker
                        </Heading>
                        <HStack width='9.125rem'>
                            <Img w='1.5rem' src={bidMakerIcon} alt={'avtr'}/>
                            <Heading variant='h5' fontWeight={500} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                                {bidMakerName}
                            </Heading>
                        </HStack>
                    </VStack>
                    <VStack alignItems='flex-start' gap='0.25rem'>
                        <Heading variant='h5' fontWeight={600} color='dark.50'>
                            Wallet Bid-Maker
                        </Heading>
                        <Heading variant='h5' fontWeight={500}>
                            {formatAddress(bidMakerWallet)}
                        </Heading>
                    </VStack>
                </VStack>
            </HStack>
            {/*<HStack justifyContent='space-between' w='full'>*/}


            {/*</HStack>*/}

        </VStack>
    )
}
