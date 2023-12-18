import React, { FC } from 'react';

import { LotUnitAddonDictionary } from '@app/dictionary';
import { Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

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
  price: string;
  fdv: string;
  size: string;
  amount: string;
  lotType: Resource.Lot.Enums.LotType;
  marsbaseCommission: string;
}

export const DealInfo: FC<DealInfoProps> = ({ price, fdv, size, amount, lotType, marsbaseCommission }) => {
  return (
    <VStack gap="1.5rem" padding="1.5rem 1.25rem" bg="dark.900" flex="2" borderRadius="0.75rem" width="full">
      <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
        {DealBlockTypeDictionary.get('DEAL_INFO').title}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} w="full" gridColumnGap="5.5rem" gridRowGap="0.75rem">
        <DealInfoField
          label={DealInfoFieldDictionary.get('PRICE')}
          value={<UIKit.MoneyText abbreviated value={price} currencyTextProps={{ color: 'dark.50' }} />}
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('SIZE')}
          value={
            <UIKit.PercentText
              value={size}
              percentTextProps={{ color: 'dark.50' }}
              percent={LotUnitAddonDictionary.get(lotType)}
            />
          }
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('AMOUNT')}
          value={<UIKit.MoneyText abbreviated value={amount} currencyTextProps={{ color: 'dark.50' }} />}
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('FDV')}
          value={<UIKit.MoneyText abbreviated value={fdv} currencyTextProps={{ color: 'dark.50' }} />}
        />
        <DealInfoField
          label={DealInfoFieldDictionary.get('MARSBASE_COMMISSION')}
          value={<UIKit.MoneyText abbreviated value={marsbaseCommission} currencyTextProps={{ color: 'dark.50' }} />}
        />
      </SimpleGrid>
    </VStack>
  );
};
