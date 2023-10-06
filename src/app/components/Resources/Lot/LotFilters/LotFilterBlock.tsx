import { UILogic } from '@app/components';
import { VStack, Text, Divider, FormControl, FormLabel, Checkbox } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotFiltersBlockModel = Partial<{
  search: string;
  direction: Resource.Common.Enums.TradeDirection;
  lotTypes: Resource.Lot.Enums.LotType[];
  assetVerticals: Resource.Asset.Enums.AssetVertical[];
  bidSize: [number, number];
  withReassing: boolean;
}>;

export interface LotFilterBlockProps {
  filters: LotFiltersBlockModel;
  onChange: (filters: LotFiltersBlockModel) => void;
}

export function LotFilterBlock({ filters, onChange }: LotFilterBlockProps) {
  return (
    <VStack w="20rem" paddingTop="10px" gap="0.65rem" alignItems="flex-start">
      <Text display="flex" fontSize="lg" fontWeight={700} lineHeight="2rem">
        Filter
      </Text>

      <Divider color="rgba(255, 255, 255, 0.15)" />

      <VStack w="100%">
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Re-assign</FormLabel>
          <Checkbox checked={filters.withReassing} onChange={(e) => onChange({ withReassing: e.target.checked })} />
        </FormControl>
        {/* <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Only validated offers</FormLabel>
          <Checkbox />
        </FormControl>
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Only directly seller/buyer</FormLabel>
          <Checkbox />
        </FormControl> */}
      </VStack>

      <UIKit.KeyValueRowAccordion keyComponent="Direction">
        <UILogic.TradeDirectionSelect
          value={filters.direction}
          isClearable
          onChange={(direction) => onChange({ direction })}
          placeholder="Choose direction"
        />
      </UIKit.KeyValueRowAccordion>
      <UIKit.KeyValueRowAccordion keyComponent="Lot type">
        <UILogic.LotTypeSelect
          placeholder="Choose lot type"
          isClearable
          isMulti
          value={filters.lotTypes}
          onChange={(lotTypes) => onChange({ lotTypes })}
        />
      </UIKit.KeyValueRowAccordion>
      <UIKit.KeyValueRowAccordion keyComponent="Asset vertical">
        <UILogic.AssetVerticalSelect
          placeholder="Choose vertical"
          isClearable
          isMulti
          value={filters.assetVerticals}
          onChange={(assetVerticals) => onChange({ assetVerticals })}
        />
      </UIKit.KeyValueRowAccordion>
      <UIKit.KeyValueRowAccordion keyComponent="Size">
        <UIKit.RangeNumberSlider
          minMax={[0, 999999]}
          value={filters.bidSize}
          onChange={(bidSize) => onChange({ bidSize })}
          formatValue={(value) => <UIKit.MoneyText value={value} abbreviated addon="$" />}
          step={20}
        />
      </UIKit.KeyValueRowAccordion>
    </VStack>
  );
}
