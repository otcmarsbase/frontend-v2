import { useMemo } from 'react';

import { AssetVerticalTitleDictionary } from '@app/dictionary';
import { Text, TextProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface AssetVerticalTextProps extends TextProps {
  value: DeskGatewaySchema.AssetVertical;
}

export function AssetVerticalText({ value }: AssetVerticalTextProps) {
  const title = useMemo(() => AssetVerticalTitleDictionary.get(value), [value]);

  return (
    <Text fontSize="sm" color="white" whiteSpace="nowrap" as="span">
      {title}
    </Text>
  );
}
