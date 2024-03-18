import { HStack, StackProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { AssetVerticalIcon } from './AssetVerticalIcon';
import { AssetVerticalText } from './AssetVerticalText';

export interface AssetVerticalRowProps extends StackProps {
  value: DeskGatewaySchema.AssetVertical;
}

export function AssetVerticalRow({ value, ...stackProps }: AssetVerticalRowProps) {
  return (
    <HStack {...stackProps}>
      <AssetVerticalIcon value={value} />
      <AssetVerticalText value={value} />
    </HStack>
  );
}
