import { FC, ReactNode, Children, useMemo } from 'react';

import { AssetVerticalTitle, LotFiltersBlockModel } from '@app/components';
import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { isDeeplyEmpty } from '@app/utils';
import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { MoneyText } from '@shared/ui-kit';

type FormatValue = {
  [key in keyof LotFiltersBlockModel]: (value: LotFiltersBlockModel[key]) => ReactNode;
};

export interface LotActiveFiltersProps {
  filters: LotFiltersBlockModel;
  onReset: () => void;
}

export const LotActiveFilters: FC<LotActiveFiltersProps> = ({ filters, onReset }) => {
  const formatValue: FormatValue = {
    direction: (value) => (value ? TradeDirectionDictionary.get(value).title : null),
    lotTypes: (value) => value.map((type) => LotTypeDictionary.get(type).title),
    assetVerticals: (value) => value.map((vertical) => AssetVerticalTitle.get(vertical)),
    withReassing: () => 'Re-assign',
    bidSize: ([from, to]) => (
      <HStack spacing=".5rem">
        <MoneyText value={from} abbreviated addon="$" />
        <Text>-</Text>
        <MoneyText value={to} abbreviated addon="$" />
      </HStack>
    ),
    search: (value) => `Search: ${value}`,
    assets: (value) => value.map((asset) => asset.info.title),
  };

  const isEmpty = useMemo(() => isDeeplyEmpty(filters), [filters]);

  if (isEmpty) return <></>;

  return (
    <Flex flexWrap="wrap" gap="0.75rem">
      {Object.entries(filters).map(([key, value]) =>
        Children.map(formatValue[key](value), (child) => (
          <Flex fontSize="sm" bgColor="whiteAlpha.300" padding="0.5rem 0.75rem" rounded="0.375rem" lineHeight="1.2">
            {child}
          </Flex>
        )),
      )}
      <Button variant="link" color="orange.400" onClick={onReset}>
        Reset
      </Button>
    </Flex>
  );
};
