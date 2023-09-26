import React, { FC } from 'react';

import { AccountAvatar } from '@app/components';
import { formatAddress } from '@app/utils';
import { Heading, HStack, Text, SimpleGrid, VStack, Button } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { DealBlockTypeDictionary, DealParticipantDictionary, DealParticipantType } from './const';

export type DealParticipantItem = {
  account: Resource.Account.Account;
  type: DealParticipantType;
};

interface GridParticipantFieldProps {
  label: string;
  value: React.ReactNode;
}

const GridParticipantField: React.FC<GridParticipantFieldProps> = ({ label, value }) => {
  return (
    <VStack w="full" gap="0.25rem" alignItems="start">
      <Text fontSize="sm" fontWeight={600} color="dark.50">
        {label}
      </Text>
      {value}
    </VStack>
  );
};

export interface DealParticipantsProps {
  items: DealParticipantItem[];
  telegramChatLink: string;
}

export const DealParticipants: FC<DealParticipantsProps> = ({ items, telegramChatLink }) => {
  return (
    <VStack gap="1.5rem" padding="1.5rem 1.25rem" bg="dark.900" flex="2" borderRadius="0.75rem" width="full">
      <HStack justifyContent="space-between" w="full">
        <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
          {DealBlockTypeDictionary.get('DEAL_PARTICIPANTS').title}
        </Heading>
        <Button variant="darkOutline" size="xs" as="a" href={telegramChatLink} target="_blank">
          Telegram chat
        </Button>
      </HStack>
      <SimpleGrid w="full" columns={4} gridColumnGap="4.2rem">
        {items.map((item) => {
          return (
            <VStack w="full" gap="1.5rem">
              <GridParticipantField
                label={DealParticipantDictionary.get(item.type).title}
                value={<AccountAvatar avatarUrl={''} nickname={item.account?.nickname} />}
              />
              <GridParticipantField
                label={DealParticipantDictionary.get(item.type).walletTitle}
                value={
                  <Text fontSize="sm">{formatAddress(item?.account?.auth_data?.walletAddress || '0x0001020120')}</Text>
                }
              />
            </VStack>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};
