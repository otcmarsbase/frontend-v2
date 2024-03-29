import { useMemo } from 'react';

import { AssetVerticalTitleDictionary } from '@app/dictionary';
import {
  TextProps,
  Text,
  VStack,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { AssetVerticalRow } from './AssetVerticalRow';

export interface AssetVerticalJoinProps extends TextProps {
  value: DeskGatewaySchema.AssetVertical[];
}

export function AssetVerticalJoin({ value }: AssetVerticalJoinProps) {
  const displayText = useMemo(() => {
    const items = value.slice(0, 2);

    let itemsString = items.map((v) => AssetVerticalTitleDictionary.get(v)).join(', ');

    if (value.length > 2) {
      itemsString += ` +${value.length - items.length}`;
    }

    return itemsString;
  }, [value]);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text fontSize="sm" color="white" whiteSpace="nowrap">
          {displayText}
        </Text>
      </PopoverTrigger>
      <PopoverContent bg="dark.700" color="white" border="none">
        <PopoverArrow bg="dark.700" />
        <PopoverBody p="1rem 1.5rem">
          <VStack alignItems="flex-start" spacing={3}>
            <Text>Vertical</Text>
            <SimpleGrid columns={2} spacing="0.5rem">
              {value.map((item, index) => (
                <AssetVerticalRow value={item} key={index} />
              ))}
            </SimpleGrid>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
