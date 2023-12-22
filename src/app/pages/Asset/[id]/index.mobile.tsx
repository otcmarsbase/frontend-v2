import { VStack } from '@chakra-ui/react';
import { RPC, Resource } from '@schema/desk-gateway';

import { LotsBlock, TitleBlock } from './_atoms';
import { AssetInfoBlock, ProjectInfoBlock } from './_atoms_mobile';

export interface ViewProps {
  asset: Resource.Asset.Asset;
  stats: RPC.DTO.AssetGetStatsById.Result;
}

export default function AssetViewMobile({ asset, stats }: ViewProps) {
  return (
    <VStack gap="0.75rem">
      <TitleBlock title={asset.info.title} logoUrl={asset.info.logoURL} analyticsUrl={asset.info.analyticURL} />
      <AssetInfoBlock stats={stats} />
      <ProjectInfoBlock description={asset.info.description} />
      <LotsBlock asset={asset} />
    </VStack>
  );
}
