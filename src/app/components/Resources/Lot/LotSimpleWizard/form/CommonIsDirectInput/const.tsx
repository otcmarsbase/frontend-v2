import { createDictionary } from '@app/dictionary';
import { VStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'I am',
      tooltip: (
        <VStack>
          <Text>Direct buyer - person, who wants to invest</Text>
          <Text>Broker - person, who represents direct buyer interests</Text>
        </VStack>
      ),
    },
    SELL: {
      label: 'I am',
      tooltip: (
        <VStack>
          <Text>Direct seller - person, who owns the asset.</Text>
          <Text>Broker - person, who represents direct seller interests.</Text>
        </VStack>
      ),
    },
  })
  .asReadonly();

export const BuyChoicesDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Direct buyer'],
  [false, 'Broker'],
]);

export const SellChoicesDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Direct seller'],
  [false, 'Broker'],
]);
