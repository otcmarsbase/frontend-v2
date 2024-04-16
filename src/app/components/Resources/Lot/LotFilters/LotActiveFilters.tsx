import { FC, ReactNode, Children, useMemo } from 'react';

import { LotFilterSidebarModel } from '@app/components';
import {
  LotTypeDictionary,
  LotReassignmentTypeDictionary,
  TradeDirectionDictionary,
  AssetVerticalTitleDictionary,
  AssetTierDictionary,
} from '@app/dictionary';
import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';
import { isDeeplyEmpty } from '@shared/utils';
import { omitBy } from 'lodash';

type FormatValue = {
  [key in keyof LotFilterSidebarModel]: (value: LotFilterSidebarModel[key]) => ReactNode;
};

export interface LotActiveFiltersProps {
  filters: LotFilterSidebarModel;
  onReset: () => void;
}

export const LotActiveFilters: FC<LotActiveFiltersProps> = ({ filters, onReset }) => {
  const notEmptyFilters = useMemo(() => omitBy(filters, isDeeplyEmpty), [filters]);
  const formatValue: FormatValue = {
    direction: (value) => (value ? TradeDirectionDictionary.get(value).title : null),
    type: (value) => value.map((type) => LotTypeDictionary.get(type).title),
    verticals: (value) => value.map((vertical) => AssetVerticalTitleDictionary.get(vertical)),
    reassignmentType: (value) => value.map((type) => LotReassignmentTypeDictionary.get(type)),
    bidSize: ([from, to]) => (
      <HStack spacing=".5rem">
        <UIKit.MoneyText value={from} abbreviated />
        <Text>-</Text>
        <UIKit.MoneyText value={to} abbreviated />
      </HStack>
    ),
    minBidSize: ([from, to]) => (
      <HStack spacing=".5rem">
        <UIKit.MoneyText value={from} abbreviated />
        <Text>-</Text>
        <UIKit.MoneyText value={to} abbreviated />
      </HStack>
    ),
    targetValuation: ([from, to]) => (
      <HStack spacing=".5rem">
        <UIKit.MoneyText value={from} abbreviated />
        <Text>-</Text>
        <UIKit.MoneyText value={to} abbreviated />
      </HStack>
    ),
    search: (value) => `Search: ${value}`,
    assets: (value) => value.map((asset) => asset.info.title),
    tier: (value) => value.map((tier) => AssetTierDictionary.get(tier)),
  };

  const isEmpty = useMemo(() => isDeeplyEmpty(notEmptyFilters), [notEmptyFilters]);

  if (isEmpty) return <></>;

  return (
    <Flex flexWrap="wrap" gap="0.75rem">
      {Object.entries(notEmptyFilters).map(([key, value]) =>
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
