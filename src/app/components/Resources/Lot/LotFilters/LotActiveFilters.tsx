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
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import { isDeeplyEmpty } from '@shared/utils';
import { omitBy } from 'lodash';

type FormatValue = {
  [key in keyof LotFilterSidebarModel]: (value: LotFilterSidebarModel[key]) => ReactNode;
};

export interface LotActiveFiltersProps {
  filters: LotFilterSidebarModel;
  assets?: DeskGatewaySchema.Asset[];
  onReset: () => void;
}

export const LotActiveFilters: FC<LotActiveFiltersProps> = ({ filters, assets = [], onReset }) => {
  const notEmptyFilters = useMemo(() => omitBy(filters, isDeeplyEmpty), [filters]);
  const formatValue: FormatValue = {
    direction: (value) => (value ? TradeDirectionDictionary.get(value).title : null),
    type: (value) => value.map((type) => LotTypeDictionary.get(type).title),
    verticals: (value) => value.map((vertical) => AssetVerticalTitleDictionary.get(vertical)),
    reassignmentType: (value) => value.map((type) => LotReassignmentTypeDictionary.get(type)),
    minContractValue: (value) => <UIKit.MoneyText value={value} abbreviated />,
    maxContractValue: (value) => <UIKit.MoneyText value={value} abbreviated />,
    minBidSize: (value) => <UIKit.MoneyText value={value} abbreviated />,
    maxBidSize: (value) => <UIKit.MoneyText value={value} abbreviated />,
    minTargetValuation: (value) => <UIKit.MoneyText value={value} abbreviated />,
    maxTargetValuation: (value) => <UIKit.MoneyText value={value} abbreviated />,
    search: (value) => `Search: ${value}`,
    assets: (value) => value.map((id) => assets.find((asset) => asset.id === id)?.info?.title).filter(Boolean),
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
