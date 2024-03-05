import { PropsWithChildren, useCallback } from 'react';

import { LotSimpleWizard, LotSimpleWizardProps, useRpcSchemaClient } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Center, Box } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';

interface LotCreateProps {
  direction: DeskGatewaySchema.TradeDirection;
}

const View: React.FC<PropsWithChildren<LotCreateProps>> = ({ direction }) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();

  const onSubmit = useCallback<LotSimpleWizardProps['onSubmit']>(
    async (data) => {
      const { type, INVEST_DOC_ASSET, ...inputs } = data;
      const payload: DeskGatewaySchema.RPC.DTO.LotCreate.Payload = { type, inputs };

      if ('id' in INVEST_DOC_ASSET) {
        payload.inputs.INVEST_DOC_ASSET_PK = INVEST_DOC_ASSET.id;
      } else {
        payload.inputs.INVEST_DOC_ASSET_CREATE_REQUEST = INVEST_DOC_ASSET as { title: string; website: string };
      }

      const { id } = await rpcSchema.send('lot.create', payload);

      router.navigateComponent(MBPages.Lot.Create.__id__, { id }, {});
    },
    [rpcSchema, router],
  );

  return (
    <Box justifyContent="center" maxW="36rem" w="full" p={{ base: '0', md: '8' }} bg="dark.900" rounded="3xl">
      <LotSimpleWizard direction={direction} defaultValues={{ COMMON_DIRECTION: direction }} onSubmit={onSubmit} />
    </Box>
  );
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="sm">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
