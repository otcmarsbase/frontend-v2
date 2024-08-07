import { useEffect } from 'react';

import { UILogic } from '@app/components';
import { VStack, Text, HStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotFilterSidebarModel = Partial<{
  search: string;
  direction: DeskGatewaySchema.TradeDirection;
  type: DeskGatewaySchema.LotType[];
  verticals: DeskGatewaySchema.AssetVertical[];
  minContractValue: number;
  maxContractValue: number;
  minBidSize: number;
  maxBidSize: number;
  minTargetValuation: number;
  maxTargetValuation: number;
  reassignmentType: DeskGatewaySchema.LotReassignmentType[];
  assets: string[];
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
  minContractValue: true,
  minBidSize: true,
  minTargetValuation: true,
  reassignmentType: true,
  tier: true,
  assets: true,
};

export function LotFilterSidebar({ filters, onChange, visibility, assets = [] }: LotFilterSidebarProps) {
  const fieldsVisibility = { ...defaultVisibility, ...visibility };

  const filterAssets = assets.filter((asset) => filters.assets?.includes(asset.id));

  return (
    <VStack w={{ base: '100%', lg: '20rem' }} paddingTop="10px" gap="0.65rem" alignItems="flex-start">
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
            value={filterAssets}
            onChange={(assets) => onChange({ assets: assets.map((asset) => asset.id) })}
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
      {fieldsVisibility.minContractValue && (
        <UIKit.KeyValueRowAccordion keyComponent="Size">
          <HStack>
            <UIKit.InputNumber
              value={filters.minContractValue}
              onChange={(minContractValue) => onChange({ minContractValue })}
              placeholder="From"
            />
            <UIKit.InputNumber
              value={filters.maxContractValue}
              onChange={(maxContractValue) => onChange({ maxContractValue })}
              placeholder="To"
            />
          </HStack>
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.minBidSize && (
        <UIKit.KeyValueRowAccordion keyComponent="Minimal bid">
          <HStack>
            <UIKit.InputNumber
              value={filters.minBidSize}
              onChange={(minBidSize) => onChange({ minBidSize })}
              placeholder="From"
            />
            <UIKit.InputNumber
              value={filters.maxBidSize}
              onChange={(maxBidSize) => onChange({ maxBidSize })}
              placeholder="To"
            />
          </HStack>
        </UIKit.KeyValueRowAccordion>
      )}
      {fieldsVisibility.minTargetValuation && (
        <UIKit.KeyValueRowAccordion keyComponent="Target valuation">
          <HStack>
            <UIKit.InputNumber
              value={filters.minTargetValuation}
              onChange={(minTargetValuation) => onChange({ minTargetValuation })}
              placeholder="From"
            />
            <UIKit.InputNumber
              value={filters.maxTargetValuation}
              onChange={(maxTargetValuation) => onChange({ maxTargetValuation })}
              placeholder="To"
            />
          </HStack>
        </UIKit.KeyValueRowAccordion>
      )}
    </VStack>
  );
}
