import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { LotWizard, LotWizardProps, useRpcSchemaClient } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Center } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/otc-desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';
import { toNumber } from 'lodash';

const View: React.FC<PropsWithChildren<{ id: number }>> = ({ id }) => {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [lot, setLot] = useState<Resource.Lot.Lot>();

  const mappedLot = useMemo(() => {
    if (!lot) return;

    return { id: lot.id, type: lot.type, ...lot.attributes };
  }, [lot]);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const lot = await rpcSchema.send('lot.getById', { id });

      if (lot.status !== 'DRAFT') {
        return router.navigateComponent(MBPages.Lot.__id__, { id }, {});
      }

      setLot(lot);
    }, [id, rpcSchema, router]),
  );

  useEffect(() => {
    preload();
  }, [preload]);

  const onSubmit = useCallback<LotWizardProps['onSubmit']>(
    async (data, meta) => {
      if (meta.isLastStep) {
        await rpcSchema.send('lot.sendOnModeration', { id });
        router.navigateComponent(MBPages.Lot.Moderation.__id__, { id }, {});
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
    },
    [rpcSchema, router, id],
  );

  if (preload.isLoading) return <></>;

  return <LotWizard defaultValues={mappedLot} onSubmit={onSubmit} />;
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
