import React, { FC } from 'react';

import { Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { MoneyText } from '@shared/ui-kit';

import { DealBlockTypeDictionary, DealInfoFieldDictionary } from './const';

interface DealInfoFieldProps {
  label: string;
  value: React.ReactNode;
}

const DealInfoField: React.FC<DealInfoFieldProps> = ({ label, value }) => {
  return (
    <HStack justifyContent="space-between" w="100%">
      <Text fontSize="sm" fontWeight="600" color="dark.50">
        {label}
      </Text>
      <HStack fontSize="sm" fontWeight={500}>
        {value}
      </HStack>
    </HStack>
  );
};

export interface DealInfoProps {
  price: number;
  fdv: number;
  size: number;
  commission: number;
}

export const DealInfo: FC<DealInfoProps> = ({ price, fdv, size, commission }) => {
  return (
    <VStack gap="1.5rem" padding="1.5rem 1.25rem" bg="dark.900" flex="2" borderRadius="0.75rem" width="full">
      <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
        {DealBlockTypeDictionary.get('DEAL_INFO').title}
      </Heading>
      <SimpleGrid columns={2} w="full" gridColumnGap="5.5rem" gridRowGap="0.75rem">
        <DealInfoField
          label={DealInfoFieldDictionary.get('PRICE')}
          value={<MoneyText value={price} addon={<Text color="dark.50">$</Text>} />}
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('SIZE')}
          value={<MoneyText value={size} addon={<Text color="dark.50">$</Text>} />}
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('FDV')}
          value={<MoneyText value={fdv} addon={<Text color="dark.50">$</Text>} />}
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('COMMISSION')}
          value={<MoneyText value={commission} addon={<Text color="dark.50">%</Text>} />}
        />
      </SimpleGrid>
    </VStack>
  );
};
