import { FC, useState } from 'react';

import {
  IBidsListProps,
  TBidListFilters,
} from '@app/pages/dashboard/lot/types';
import {
  Box,
  Circle,
  Text,
  HStack,
  Square,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon, SecurityIcon, EditIcon } from '@shared/ui-kit';
import { format } from 'date-fns';
import { memoize } from 'lodash';

const calcOnHover = memoize(({ _bids, id }) => {
  let newArr = [];
  for (let bid of _bids) {
    newArr.push({ ...bid, isHovered: +bid.id === +id });
  }
  return newArr;
});

export const BidsList: FC<IBidsListProps> = ({
  bids,
  viewOrderHandler,
  isBidder,
}) => {
  let normBids = [...bids];
  console.log('norlBids', normBids);
  //todo
  for (let item of normBids) {
    item['isHovered'] = false;
  }

  console.log('norlBids', normBids);

  const [_bids, setBids] = useState<any>(normBids);

  const setShow = (id) => {
    // @ts-ignore
    const newArr = calcOnHover({ _bids, id });

    console.log('newArr', newArr);
    setBids((prev) => newArr);
  };

  return (
    <Table gridTemplateColumns="repeat(9, 1fr)" display="grid">
      <Thead display="contents">
        <Tr display="contents">
          <Th>
            <HStack
              id="order"
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
              >
                №
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'user'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                User
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'bidAmount'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Bid FDV
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'bidSize'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Bid Size
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'location'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Location
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'bidderType'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Bidder Type
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'validation'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Validation
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'deadline'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Deadline
              </Box>
            </HStack>
          </Th>
          <Th>
            <HStack
              id={'status'}
              gap="none"
              onClick={(e) =>
                viewOrderHandler(e.currentTarget.id as TBidListFilters)
              }
            >
              <Box
                fontWeight="400"
                opacity={'0.3'}
                lineHeight={'1.2rem'}
                fontSize={'sm'}
                textTransform={'capitalize'}
              >
                Status
              </Box>
            </HStack>
          </Th>
        </Tr>
      </Thead>
      <Tbody color="dark.50" display="contents">
        {_bids
          .filter((bid) => bid)
          .map(
            ({
              id,
              userName,
              bid,
              bidSize,
              location,
              validation,
              deadline,
              status,
              bidderType,
              isHovered,
            }) => (
              <Tr
                key={id}
                display="contents"
                id={id.toString()}
                onMouseEnter={(e) => setShow(e.currentTarget.id)}
              >
                <Td border={'none'}>{id}</Td>
                <Td border={'none'} color="white">
                  {userName}
                </Td>
                <Td border={'none'}>
                  <VStack gap={'none'} alignItems={'flexStart'}>
                    <Box fontWeight="800" lineHeight="1.5rem" fontSize="sm">
                      {Number(bid).toLocaleString('en-US', {
                        maximumFractionDigits: 0,
                      })}{' '}
                      $
                    </Box>
                  </VStack>
                </Td>
                <Td border={'none'}>
                  <VStack gap={'none'} alignItems={'flexStart'}>
                    <Box
                      fontWeight={'842'}
                      lineHeight={'1.5rem'}
                      fontSize={'sm'}
                    >
                      {Number(bidSize).toLocaleString('en-US', {
                        maximumFractionDigits: 0,
                      })}{' '}
                      %
                    </Box>
                  </VStack>
                </Td>
                <Td border={'none'}>{location}</Td>
                <Td border={'none'}>{bidderType}</Td>
                <Td border={'none'}>
                  {validation ? <SecurityIcon color="promo" /> : 'FALSE'}
                </Td>
                <Td border={'none'}>{format(deadline, 'dd.MM.yyyy')}</Td>
                <Td border={'none'}>
                  <HStack color="#34A853">
                    <Circle size="0.5rem" bg="done" />
                    {/* TODO statuses */}
                    <Text fontWeight="500" textTransform="capitalize">
                      {status}
                    </Text>
                    {isHovered ? (
                      <HStack>
                        <Square
                          size="1.25rem"
                          borderRadius="0.15rem"
                          cursor="pointer"
                          bg="done"
                        >
                          <EditIcon w="1rem" h="1rem" />
                        </Square>
                        <Square
                          size="1.25rem"
                          borderRadius="0.15rem"
                          cursor="pointer"
                          bg="dark.700"
                        >
                          <CloseIcon w="1rem" h="1rem" />
                        </Square>
                      </HStack>
                    ) : null}
                  </HStack>
                </Td>
              </Tr>
            ),
          )}
      </Tbody>
    </Table>
  );
};
