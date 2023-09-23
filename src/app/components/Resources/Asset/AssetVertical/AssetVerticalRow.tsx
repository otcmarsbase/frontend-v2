import { useMemo } from 'react';

import { HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetVerticalIcon } from './AssetVerticalIcon';
import { AssetVerticalTitleMap } from './const';

export interface AssetVerticalRowProps {
  value: Resource.Asset.AssetVertical;
}

export function AssetVerticalRow({ value }: AssetVerticalRowProps) {
  const title = useMemo(() => AssetVerticalTitleMap.get(value), [value]);

  return (
    <HStack>
      <AssetVerticalIcon value={value} />
      <Text fontSize="sm" color="white" whiteSpace="nowrap">
        {title}
      </Text>
    </HStack>
  );
}
