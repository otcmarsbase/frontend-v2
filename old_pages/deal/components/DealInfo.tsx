import React, { FC } from 'react';

import { Heading, HStack, Text, VStack } from '@chakra-ui/react';

export interface IDealInfo {
  price: number;
  dealFDV: number;
  dealSize: number;
}

export const DealInfo: FC<IDealInfo> = ({ price, dealFDV, dealSize }) => {
  return (
    <VStack
      gap="1.5rem"
      padding="1.5rem 1.25rem"
      bg="dark.900"
      flex="2"
      borderRadius="0.75rem"
      width="full"
      transition="all 0.3s"
      cursor="pointer"
      _hover={{
        bg: 'dark.800',
      }}
    >
      <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
        Deal information
      </Heading>
      <HStack w="100%" gap="5.5rem">
        <VStack flex="1" gap="0.75rem">
          <HStack justifyContent="space-between" w="100%">
            <Heading variant="h5" fontWeight="600" color="dark.50">
              Price
            </Heading>
            <HStack>
              <Text whiteSpace="nowrap">
                {price.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </Text>
              <Text whiteSpace="nowrap" color="dark.50">
                $
              </Text>
            </HStack>
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <Heading variant="h5" fontWeight="600" color="dark.50">
              Deal FDV
            </Heading>
            <HStack>
              <Text whiteSpace="nowrap">
                {dealFDV.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </Text>
              <Text whiteSpace="nowrap" color="dark.50">
                $
              </Text>
            </HStack>
          </HStack>
        </VStack>
        <VStack flex="1.5" gap="0.75rem">
          <HStack justifyContent="space-between" w="100%">
            <Heading variant="h5" fontWeight="600" color="dark.50">
              Deal size
            </Heading>
            <HStack>
              <Text whiteSpace="nowrap">
                {dealSize.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </Text>
              <Text whiteSpace="nowrap" color="dark.50">
                $
              </Text>
            </HStack>
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <Heading variant="h5" fontWeight="600" color="dark.50">
              Marsbase comission
            </Heading>
            <HStack>
              <Text whiteSpace="nowrap">5</Text>
              <Text whiteSpace="nowrap" color="dark.50">
                %
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
