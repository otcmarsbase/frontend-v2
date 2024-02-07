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
  reassignmentType: Resource.Lot.Enums.LotReassignmentType[];
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
  reassignmentType: true,
};

export function LotFilterSidebar({ filters, onChange, visibility }: LotFilterSidebarProps) {
  const fieldsVisibility = { ...defaultVisibility, ...visibility };

  return (
    <VStack w={{ base: '100%', md: '20rem' }} paddingTop="10px" gap="0.65rem" alignItems="flex-start">
      <Text display="flex" fontSize="lg" fontWeight={700} lineHeight="2rem">
        Filter
      </Text>

      <Divider color="rgba(255, 255, 255, 0.15)" />

      {fieldsVisibility.reassignmentType && (
        <UIKit.KeyValueRowAccordion keyComponent="Reassignment">
          <UILogic.LotReassignmentTypeSelect
            value={filters.reassignmentType}
            isClearable
            isMulti
            onChange={(reassignmentType) => onChange({ reassignmentType })}
            placeholder="Choose"
          />
        </UIKit.KeyValueRowAccordion>
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
