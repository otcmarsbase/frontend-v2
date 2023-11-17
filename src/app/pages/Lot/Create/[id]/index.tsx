import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { LotWizard, LotWizardProps, useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Center } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { toNumber } from 'lodash';

const View: React.FC<PropsWithChildren<{ id: number }>> = ({ id }) => {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const { data: lot, isLoading } = useRpcSchemaQuery('lot.getById', { id });
  const queryClient = useQueryClient();

  const mappedLot = useMemo(() => {
    if (!lot) return;

    return { id: lot.id, type: lot.type, ...lot.attributes };
  }, [lot]);

  useEffect(() => {
    if (lot.status !== 'DRAFT') {
      router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {});
    }
  }, [lot, router]);

  const onSubmit = useCallback<LotWizardProps['onSubmit']>(
    async (data, meta) => {
      if (meta.isLastStep) {
        await rpcSchema.send('lot.sendOnModeration', { id });
        await queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('lot') });

        router.navigateComponent(MBPages.Lot.Moderation.__id__, { id }, { replace: true });
        return;
      }

      const { type, INVEST_DOC_ASSET, ...inputs } = data;
      const payload: RPC.DTO.LotUpdate.Payload = { id, type, inputs };

      if (INVEST_DOC_ASSET instanceof Object) {
        if ('id' in INVEST_DOC_ASSET) {
          payload.inputs.INVEST_DOC_ASSET_PK = INVEST_DOC_ASSET.id;
        } else {
          payload.inputs.INVEST_DOC_ASSET_CREATE_REQUEST = INVEST_DOC_ASSET as { title: string; website: string };
        }
      }

      await rpcSchema.send('lot.update', payload);
      await queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('lot') });
    },
    [rpcSchema, router, id, queryClient],
  );

  if (isLoading) return <UIKit.Loader />;

  return <LotWizard defaultValues={mappedLot} onSubmit={onSubmit} />;
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
