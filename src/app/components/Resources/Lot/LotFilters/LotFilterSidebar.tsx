import { UILogic } from '@app/components';
import { VStack, Text, Divider, FormControl, FormLabel, Checkbox } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotFilterSidebarModel = Partial<{
  search: string;
  direction: Resource.Common.Enums.TradeDirection;
  type: Resource.Lot.Enums.LotType[];
  verticals: Resource.Asset.Enums.AssetVertical[];
  bidSize: [number, number];
  withReassign: boolean;
  assets: string[];
}>;

type LotFilterFieldsVisibility = Partial<Record<keyof LotFilterSidebarModel, boolean>>;

export interface LotFilterSidebarProps {
  filters: LotFilterSidebarModel;
  visibility?: LotFilterFieldsVisibility;
  onChange: (filters: LotFilterSidebarModel) => void;
}

const defaultVisibility: LotFilterFieldsVisibility = {
  direction: true,
  type: true,
  verticals: true,
  bidSize: true,
  withReassign: true,
};

export function LotFilterSidebar({ filters, onChange, visibility }: LotFilterSidebarProps) {
  const fieldsVisibility = { ...defaultVisibility, ...visibility };

  return (
    <VStack w="20rem" paddingTop="10px" gap="0.65rem" alignItems="flex-start">
      <Text display="flex" fontSize="lg" fontWeight={700} lineHeight="2rem">
        Filter
      </Text>

      <Divider color="rgba(255, 255, 255, 0.15)" />

      {fieldsVisibility.withReassign && (
        <VStack w="100%">
          <FormControl display="flex" justifyContent="space-between">
            <FormLabel>Re-assign</FormLabel>
            <Checkbox
              isChecked={!!filters.withReassign}
              onChange={(e) => onChange({ withReassign: e.target.checked ? true : undefined })}
            />
          </FormControl>
        </VStack>
      )}

      {fieldsVisibility.direction && (
        <UIKit.KeyValueRowAccordion keyComponent="Direction">
          <UILogic.TradeDirectionSelect
            value={filters.direction}
            isClearable
            onChange={(direction) => onChange({ direction })}
            placeholder="Choose direction"
          />
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.type && (
        <UIKit.KeyValueRowAccordion keyComponent="Lot type">
          <UILogic.LotTypeSelect
            placeholder="Choose lot type"
            isClearable
            isMulti
            value={filters.type}
            onChange={(type) => onChange({ type })}
          />
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.verticals && (
        <UIKit.KeyValueRowAccordion keyComponent="Asset vertical">
          <UILogic.AssetVerticalSelect
            placeholder="Choose vertical"
            isClearable
            isMulti
            value={filters.verticals}
            onChange={(verticals) => onChange({ verticals })}
          />
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.bidSize && (
        <UIKit.KeyValueRowAccordion keyComponent="Size">
          <UIKit.RangeNumberSlider
            minMax={[0, 999999]}
            value={filters.bidSize}
            onChange={(bidSize) => onChange({ bidSize })}
            formatValue={(value) => <UIKit.MoneyText value={value} abbreviated />}
            step={20}
          />
        </UIKit.KeyValueRowAccordion>
      )}
    </VStack>
  );
}
