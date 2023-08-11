import {FC} from "react";
import {IBidsListProps, TBidListFilters} from "@app/pages/dashboard/lotView/types";
import {Box, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, VStack} from "@chakra-ui/react";
import {DeleteIcon} from "@shared/assets/DeleteIcon";
import {EditIcon} from "@shared/assets/EditIcon";
import {EllipseIcon} from "@shared/assets/EllipseIcon";
import {ValidatedKYCicon} from "@shared/assets/VlidatedKYCicon";
import {format} from "date-fns";


export const BidsList: FC<IBidsListProps> = ({bids, viewOrderHandler, isBidder}) => {

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>
                        <HStack id={'order'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}>№</Box>
                        </HStack
                        ></Th>
                    <Th>
                        <HStack id={'user'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>User</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'bidAmount'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Bid FDV</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'bidSize'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Bid Size</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'location'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Location</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'bidderType'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Bidder Type</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'validation'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Validation</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'deadline'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Deadline</Box>
                        </HStack>
                    </Th>
                    <Th>
                        <HStack id={'status'} gap='none'
                                onClick={(e) => viewOrderHandler(e.currentTarget.id as TBidListFilters)}>
                            <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                 textTransform={'capitalize'}>Status</Box>
                        </HStack>
                    </Th>
                </Tr>
            </Thead>
            <Tbody color='dark.50'>
                {bids.filter(bid => bid).map(({
                                                  id,
                                                  userName,
                                                  bid,
                                                  bidSize,
                                                  location,
                                                  validation,
                                                  deadline,
                                                  status,
                                                  bidderType
                                              }) => (
                    <Tr>
                        <Td border={'none'}>{id}</Td>
                        <Td border={'none'} color='white'>{userName}</Td>
                        <Td border={'none'}>
                            <VStack gap={'none'} alignItems={'flexStart'}>
                                <Box fontWeight={'842'} lineHeight={'1.5rem'} fontSize={'sm'}>
                                    {Number(bid).toLocaleString('en-US', {maximumFractionDigits: 0})} $
                                </Box>
                                {/*<Box fontSize={'3xs'}>*/}
                                {/*    ~{recountToUSD({amount})} $*/}
                                {/*</Box>*/}
                            </VStack>
                        </Td>
                        <Td border={'none'}>
                            <VStack gap={'none'} alignItems={'flexStart'}>
                                <Box fontWeight={'842'} lineHeight={'1.5rem'} fontSize={'sm'}>
                                    {Number(bidSize).toLocaleString('en-US', {maximumFractionDigits: 0})} %
                                </Box>
                            </VStack>
                        </Td>
                        <Td border={'none'}>{location}</Td>
                        <Td border={'none'}>{bidderType}</Td>
                        <Td border={'none'}>{validation ? <ValidatedKYCicon w='1.5rem' h='1.5rem'/> : 'FALSE'}</Td>
                        <Td border={'none'}>{format(deadline, 'dd.MM.yyyy')}</Td>
                        <Td border={'none'}>
                            <HStack color='#34A853'>
                                <EllipseIcon w='0.5rem' h='0.5rem'/>
                                {/*//todo statuses*/}
                                <Heading variant='h5' fontWeight='500' textTransform='capitalize'>
                                    {status}
                                </Heading>
                                {isBidder ? <>
                                    <EditIcon w='1rem' h='1rem'/>
                                    <DeleteIcon w='1.25rem' h='1.25rem'/>
                                </>
                                    : null
                                }
                            </HStack>
                        </Td>
                        {/*<Td fontWeight={'842'}*/}
                        {/*    lineHeight={'1.5rem'} border={'none'}><Box padding={'0.125rem 0.75rem'}*/}
                        {/*                                               borderRadius={'1.5rem'}*/}
                        {/*                                               background={'rgba(78, 209, 250, 0.15)'}*/}
                        {/*                                               color={'#4ED1FA'} fontSize={'sm'}>*/}
                        {/*    {status}*/}
                        {/*</Box>*/}
                        {/*</Td>*/}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}
