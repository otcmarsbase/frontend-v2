import { useCallback, useEffect, useState } from 'react';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const InvestDocAssetField = {
  renderTitle: () => <Text>Project Name</Text>,
  renderValue: (model) => <AssetField value={model.INVEST_DOC_ASSET} />,
} satisfies StepReviewField<LotCreateModel>;

const AssetField = ({ value }: { value: LotCreateModel['INVEST_DOC_ASSET'] }) => {
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();

  const [asset, setAsset] = useState<DeskGatewaySchema.Asset | DeskGatewaySchema.LotAssetRequest>();

  const preload = useLoadingCallback(
    useCallback(async () => {
      if (!('id' in value)) {
        setAsset(value as DeskGatewaySchema.LotAssetRequest);
        return;
      }

      const result = await queryClient.fetchQuery({
        queryKey: ['asset.getById', { id: value.id }],
        queryFn: () => rpcSchema.send('asset.getById', { id: value.id }),
      });
      setAsset(result);
    }, [value, rpcSchema, queryClient]),
  );

  useEffect(() => {
    preload();
  }, [preload]);

  if (preload.isLoading || !asset) return <></>;

  return (
    <UILogic.AssetName size="xs" asset={'title' in value ? (value as DeskGatewaySchema.LotAssetRequest) : asset} />
  );
};
