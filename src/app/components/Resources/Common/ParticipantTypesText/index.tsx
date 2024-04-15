import { ParticipantTypeDictionary } from '@app/dictionary';
import { HStack, StackProps, Text, TextProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface ParticipantTypesTextProps extends StackProps {
  value: DeskGatewaySchema.InvestorType;
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
    {!!value ? (
      <Text {...textProps} color="orange.500">
        {ParticipantTypeDictionary.get(value).title}
      </Text>
    ) : (
      <Text {...textProps}>{empty}</Text>
    )}
  </HStack>
);
