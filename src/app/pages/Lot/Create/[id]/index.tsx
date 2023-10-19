import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { LotCreateModel, LotWizard, useRpcSchemaClient } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Center } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/otc-desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';
import { toNumber } from 'lodash';

const View: React.FC<PropsWithChildren<{ id: number }>> = ({ id }) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [lot, setLot] = useState<Resource.Lot.Lot>();

  const preload = useLoadingCallback(
    useCallback(async () => {
      const lot = await rpcSchema.send('lot.getById', { id: toNumber(id) });

      if (lot.status !== 'DRAFT') {
        return router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {});
      }

      setLot(lot);
    }, [id, rpcSchema, router]),
  );

  useEffect(() => {
    preload();
  }, [preload]);

  const onSubmit: SubmitHandler<LotCreateModel> = useCallback(
    (data) => {
      rpcSchema.send('lot.update', { id, inputs: {} });
    },
    [rpcSchema, id],
  );

  if (preload.isLoading) return <></>;

  return <LotWizard defaultValues={lot} onSubmit={onSubmit} />;
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
