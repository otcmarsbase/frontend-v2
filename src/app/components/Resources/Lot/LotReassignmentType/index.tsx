import { memo } from 'react';

import { LotReassignmentTypeDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface LotReassignmentTypeProps {
  value: DeskGatewaySchema.LotReassignmentType;
}

export const LotReassignmentType = memo<LotReassignmentTypeProps>(({ value }) => {
  return <Text whiteSpace="nowrap">{LotReassignmentTypeDictionary.get(value)}</Text>;
});
