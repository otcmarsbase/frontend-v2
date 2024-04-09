import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import {
  LotCreateModel,
  LotSimpleWizard,
  LotSimpleWizardProps, useAuth,
  useRpcSchemaClient,
  useRpcSchemaQuery,
} from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Box, Center } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { toNumber } from 'lodash';

const View: React.FC<PropsWithChildren<{ id: number }>> = ({ id }) => {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();

  const { data: lot, isLoading } = useRpcSchemaQuery('lot.getById', { id });

  const router = useRouter();
  const { account } = useAuth();

  const [lotCreateModel, setLotCreateModel] = useState<LotCreateModel>({})

  const mappedLot = useMemo(() => {
    if (!lot) return;

    return { id: lot.id, type: lot.type, ...lot.attributes };
  }, [lot]);

  useEffect(() => {
    if (!lot) return;

    if (lot?.offerMaker?.id !== account?.id) {
      router.navigateComponent(MBPages.Home, {}, { replace: true })
    }

    if (lot.status !== 'ACTIVE') {
      router.navigateComponent(MBPages.Lot.Moderation.__id__, { id }, { replace: true });
    }
  }, [lot, router]);

  const onSubmit = useCallback<LotSimpleWizardProps['onSubmit']>(
    async (data, meta) => {
      setLotCreateModel((prev) => ({...prev, ...data}))
      if (meta.isLastStep) {
        const { type, INVEST_DOC_ASSET, ...inputs } = lotCreateModel
        const payload: DeskGatewaySchema.RPC.DTO.LotUpdate.Payload = { id, type, inputs };

        if (INVEST_DOC_ASSET instanceof Object) {
          if ('id' in INVEST_DOC_ASSET) {
            payload.inputs.INVEST_DOC_ASSET_PK = INVEST_DOC_ASSET.id;
          } else {
            payload.inputs.INVEST_DOC_ASSET_CREATE_REQUEST = INVEST_DOC_ASSET as { title: string; website: string };
          }
        }

        await rpcSchema.send('lot.update', payload);
        await rpcSchema.send('lot.sendOnModeration', { id });
        await queryClient.invalidateQueries({
          predicate: ({ queryKey }) => {
            return queryKey[0]?.toString()?.includes('lot');
          },
        });

        router.navigateComponent(MBPages.Lot.Moderation.__id__, { id }, { replace: true });
        return;
      }
    },
    [rpcSchema, router, id, queryClient, lotCreateModel],
  );

  if (isLoading) return <UIKit.Loader />;

  return (
    <Box justifyContent="center" maxW="36rem" w="full" p={{ base: '0', md: '8' }} bg="dark.900" rounded="3xl">
      <LotSimpleWizard direction={lot.attributes.COMMON_DIRECTION} defaultValues={mappedLot} onSubmit={onSubmit} />
    </Box>
  );
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
