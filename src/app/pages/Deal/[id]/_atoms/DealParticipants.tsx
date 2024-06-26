import React, { FC } from 'react';

import { AccountAvatar } from '@app/components';
import { formatAddress } from '@app/utils';
import { Heading, HStack, Text, SimpleGrid, VStack, Button } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { DealBlockTypeDictionary, DealParticipantDictionary, DealParticipantType } from './const';

export type DealParticipantItem = {
  account: DeskGatewaySchema.Account;
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

interface DealParticipantProps {
  user: DeskGatewaySchema.User;
  type: DealParticipantType;
}

const DealParticipant: React.FC<DealParticipantProps> = ({ user, type }) => {
  return (
    <VStack w="full" flexDirection={{ base: 'row', lg: 'column' }} gap="1.5rem">
      <GridParticipantField
        label={DealParticipantDictionary.get(type).title}
        value={<AccountAvatar nickname={user.nickname} shortNickname />}
      />
      <GridParticipantField
        label={DealParticipantDictionary.get(type).walletTitle}
        value={<Text fontSize="sm">{formatAddress(user.address)}</Text>}
      />
    </VStack>
  );
};

export interface DealParticipantsProps {
  bidMakers: DeskGatewaySchema.User[];
  offerMakers: DeskGatewaySchema.User[];
  telegramChatLink: string;
}

export const DealParticipants: FC<DealParticipantsProps> = ({ offerMakers, bidMakers, telegramChatLink }) => {
  return (
    <VStack gap="1.5rem" padding="1.5rem 1.25rem" bg="dark.900" flex="2" borderRadius="0.75rem" width="full">
      <HStack justifyContent="space-between" w="full">
        <Heading variant="h3" fontSize="1rem" textTransform="uppercase" w="100%">
          {DealBlockTypeDictionary.get('DEAL_PARTICIPANTS').title}
        </Heading>
        {telegramChatLink && (
          <Button variant="darkOutline" size="xs" as="a" href={telegramChatLink} target="_blank">
            Telegram chat
          </Button>
        )}
      </HStack>
      <SimpleGrid w="full" columns={{ base: 1, lg: 4 }} gridColumnGap="4.2rem" gridRowGap="1.5rem">
        {!!offerMakers.length &&
          offerMakers.map((user) => <DealParticipant key={user.id} type="OFFER_MAKER" user={user} />)}
        {!!bidMakers.length && bidMakers.map((user) => <DealParticipant key={user.id} type="BID_MAKER" user={user} />)}
      </SimpleGrid>
    </VStack>
  );
};
