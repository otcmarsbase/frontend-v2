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

  const preload = useLoadingCallback(
    useCallback(async () => {
      const lot = await rpcSchema.send('lot.getById', { id });

      if (lot.status !== 'ON_MODERATION') {
        return router.navigateComponent(MBPages.Lot.__id__, { id }, {});
      }

      setLot(lot);
    }, [id, rpcSchema, router]),
  );

  useEffect(() => {
    preload();
  }, [preload]);

  if (preload.isLoading) return <></>;
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
