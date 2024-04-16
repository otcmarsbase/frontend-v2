import { useEffect } from 'react';

import { UILogic } from '@app/components';
import { VStack, Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotFilterSidebarModel = Partial<{
  search: string;
  direction: DeskGatewaySchema.TradeDirection;
  type: DeskGatewaySchema.LotType[];
  verticals: DeskGatewaySchema.AssetVertical[];
  bidSize: [number, number];
  minBidSize: [number, number];
  targetValuation: [number, number];
  reassignmentType: DeskGatewaySchema.LotReassignmentType[];
  assets: DeskGatewaySchema.Asset[];
  tier: DeskGatewaySchema.AssetTier[];
}>;

type LotFilterFieldsVisibility = Partial<Record<keyof LotFilterSidebarModel, boolean>>;

export interface LotFilterSidebarProps {
  filters: LotFilterSidebarModel;
  assets?: DeskGatewaySchema.Asset[];
  visibility?: LotFilterFieldsVisibility;
  onChange: (filters: LotFilterSidebarModel) => void;
}

const defaultVisibility: LotFilterFieldsVisibility = {
  direction: true,
  type: true,
  verticals: true,
  bidSize: true,
  minBidSize: true,
  targetValuation: true,
  reassignmentType: true,
  tier: true,
  assets: true,
};

export function LotFilterSidebar({ filters, onChange, visibility, assets = [] }: LotFilterSidebarProps) {
  const fieldsVisibility = { ...defaultVisibility, ...visibility };

  return (
    <VStack w={{ base: '100%', md: '20rem' }} paddingTop="10px" gap="0.65rem" alignItems="flex-start">
      <Text display="flex" fontSize="lg" fontWeight={700} lineHeight="2rem" marginBottom="0.5rem">
        Filter
      </Text>

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
      {fieldsVisibility.assets && (
        <UIKit.KeyValueRowAccordion keyComponent="Asset">
          <UILogic.AssetSelectSync
            placeholder="Choose asset"
            isClearable
            isMulti
            items={assets}
            value={filters.assets}
            onChange={(assets) => onChange({ assets: Array.isArray(assets) ? assets : [assets] })}
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
      {fieldsVisibility.tier && (
        <UIKit.KeyValueRowAccordion keyComponent="Asset tier">
          <UILogic.AssetTierSelect
            placeholder="Choose tier"
            isClearable
            isMulti
            value={filters.tier}
            onChange={(tier) => onChange({ tier })}
          />
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.bidSize && (
        <UIKit.KeyValueRowAccordion keyComponent="Size">
          <UIKit.RangeNumberSlider
            minMax={[0, 999999]}
            value={filters.bidSize || [50000, 50000]}
            onChange={(bidSize) => onChange({ bidSize })}
            formatValue={(value) => <UIKit.MoneyText value={value} abbreviated />}
            step={20}
          />
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.minBidSize && (
        <UIKit.KeyValueRowAccordion keyComponent="Minimal bid">
          <UIKit.RangeNumberSlider
            minMax={[0, 999999]}
            value={filters.minBidSize || [5000, 999999]}
            onChange={(minBidSize) => onChange({ minBidSize })}
            formatValue={(value) => <UIKit.MoneyText value={value} abbreviated />}
            step={20}
          />
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.targetValuation && (
        <UIKit.KeyValueRowAccordion keyComponent="Target valuation">
          <UIKit.RangeNumberSlider
            minMax={[0, 999999]}
            value={filters.targetValuation || [0, 999999]}
            onChange={(targetValuation) => onChange({ targetValuation })}
            formatValue={(value) => <UIKit.MoneyText value={value} abbreviated />}
            step={20}
          />
        </UIKit.KeyValueRowAccordion>
      )}
    </VStack>
  );
}
