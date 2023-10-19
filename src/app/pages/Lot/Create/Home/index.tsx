import { FC, useCallback } from 'react';

import { LotWizard, LotWizardProps, useRpcSchemaClient } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Center } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC } from '@schema/otc-desk-gateway';

const View: FC = () => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();

  const onSubmit = useCallback<LotWizardProps['onSubmit']>(
    async (data) => {
      const { type, INVEST_DOC_ASSET, ...inputs } = data;
      const payload: RPC.DTO.LotCreate.Payload = { type, inputs };

      if (typeof INVEST_DOC_ASSET === 'string') {
        payload.inputs.INVEST_DOC_ASSET_PK = INVEST_DOC_ASSET;
      } else {
        payload.inputs.INVEST_DOC_ASSET_CREATE_REQUEST = INVEST_DOC_ASSET as Required<typeof INVEST_DOC_ASSET>;
      }

      const { id } = await rpcSchema.send('lot.create', payload);

      router.navigateComponent(MBPages.Lot.Create.__id__, { id }, {});
    },
    [rpcSchema, router],
  );

  return <LotWizard onSubmit={onSubmit} />;
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
