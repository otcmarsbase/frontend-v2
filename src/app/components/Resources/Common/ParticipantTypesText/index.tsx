import { ParticipantTypeDictionary } from '@app/dictionary';
import { HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';

export interface ParticipantTypesTextProps {
  value: Resource.Common.ParticipantType[];
}

export const ParticipantTypesText: React.FC<ParticipantTypesTextProps> = ({ value }) => (
  <HStack divider={<Text color="orange.500">,</Text>}>
    {value.map((participantType) => (
      <Text color="orange.500">{ParticipantTypeDictionary.get(participantType).title}</Text>
    ))}
  </HStack>
);
