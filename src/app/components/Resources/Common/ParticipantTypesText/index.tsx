import { ParticipantTypeDictionary } from '@app/dictionary';
import { HStack, StackProps, Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

export interface ParticipantTypesTextProps extends StackProps {
  value: Resource.Common.ParticipantType[];
  empty?: string;
  textProps?: TextProps;
}

export const ParticipantTypesText: React.FC<ParticipantTypesTextProps> = ({
  value,
  textProps,
  empty = '-',
  ...stackProps
}) => (
  <HStack
    divider={
      <Text color="orange.500" mr="0.5rem">
        ,
      </Text>
    }
    {...stackProps}
  >
    {value.length > 0 ? (
      value.map((participantType) => (
        <Text {...textProps} color="orange.500" key={participantType}>
          {ParticipantTypeDictionary.get(participantType).title}
        </Text>
      ))
    ) : (
      <Text {...textProps}>{empty}</Text>
    )}
  </HStack>
);
