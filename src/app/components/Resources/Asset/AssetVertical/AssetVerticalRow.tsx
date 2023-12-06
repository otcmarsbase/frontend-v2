import { useMemo } from 'react';

import { AssetVerticalTitleDictionary } from '@app/dictionary';
import { HStack, StackProps, Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { AssetVerticalIcon } from './AssetVerticalIcon';

export interface AssetVerticalRowProps extends StackProps {
  value: Resource.Asset.Enums.AssetVertical;
}

export function AssetVerticalRow({ value, ...stackProps }: AssetVerticalRowProps) {
  const title = useMemo(() => AssetVerticalTitleDictionary.get(value), [value]);

  return (
    <HStack {...stackProps}>
      <AssetVerticalIcon value={value} />
      <Text fontSize="sm" color="white" whiteSpace="nowrap">
        {title}
      </Text>
    </HStack>
  );
}
