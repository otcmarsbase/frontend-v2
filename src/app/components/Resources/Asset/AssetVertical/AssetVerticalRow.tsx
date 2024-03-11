import { HStack, StackProps } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { AssetVerticalIcon } from './AssetVerticalIcon';
import { AssetVerticalText } from './AssetVerticalText';

export interface AssetVerticalRowProps extends StackProps {
  value: Resource.Asset.Enums.AssetVertical;
}

export function AssetVerticalRow({ value, ...stackProps }: AssetVerticalRowProps) {
  return (
    <HStack {...stackProps}>
      <AssetVerticalIcon value={value} />
      <AssetVerticalText value={value} />
    </HStack>
  );
}
