import { useMemo } from 'react';

import { HStack, StackProps, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetVerticalIcon } from './AssetVerticalIcon';
import { AssetVerticalTitle } from './const';

export interface AssetVerticalRowProps extends StackProps {
  value: Resource.Asset.Enums.AssetVertical;
}

export function AssetVerticalRow({ value, ...stackProps }: AssetVerticalRowProps) {
  const title = useMemo(() => AssetVerticalTitle.get(value), [value]);

  return (
    <HStack {...stackProps}>
      <AssetVerticalIcon value={value} />
      <Text fontSize="sm" color="white" whiteSpace="nowrap">
        {title}
      </Text>
    </HStack>
  );
}
