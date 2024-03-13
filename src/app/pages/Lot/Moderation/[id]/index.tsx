import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { LotCreateSchema, LotReview, UILogic, useRpcSchemaClient } from '@app/components';
import { useToastOuterCallback } from '@app/hooks';
import { UILayout } from '@app/layouts';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { toNumber } from 'lodash';

import { ConfirmDeleteModal, ConfirmEditModal } from './_atoms';

const View: React.FC<PropsWithChildren<{ id: number }>> = ({ id }) => {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const queryClient = useQueryClient();
  const router = useRouter();
  const deleteToastCallback = useToastOuterCallback({
    showWhenOk: true,
    showWhenError: false,
    okText: `Lot with ${id} was success deleted`,
  });
  const [lot, setLot] = useState<DeskGatewaySchema.Lot>();
  const [asset, setAsset] = useState<DeskGatewaySchema.Asset>();

  const mappedLot = useMemo(() => {
    if (!lot) return;

    return LotCreateSchema.cast({ id: lot.id, type: lot.type, ...lot.attributes }, { assert: false });
  }, [lot]);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const lot = await queryClient.fetchQuery({
        queryKey: ['lot.getById', { id }],
        queryFn: () => rpcSchema.send('lot.getById', { id }),
      });

      if (lot.attributes.INVEST_DOC_ASSET_PK) {
        const asset = await queryClient.fetchQuery({
          queryKey: ['asset.getById', { id: lot.attributes.INVEST_DOC_ASSET_PK }],
          queryFn: () => rpcSchema.send('asset.getById', { id: lot.attributes.INVEST_DOC_ASSET_PK }),
        });
        setAsset(asset);
      }

      if (lot.status !== 'ON_MODERATION') {
        return router.navigateComponent(MBPages.Lot.__id__, { id }, { replace: true });
      }

      setLot(lot);
    }, [id, rpcSchema, router, queryClient]),
  );

  useEffect(() => {
    preload();
  }, [preload]);

  const handleEditLot = useCallback(async () => {
    const result = await ModalController.create(ConfirmEditModal, { lot });
    if (!result) return;

    const updatedLot = await rpcSchema.send('lot.cancelModeration', { id: lot.id });
    await queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('lot') });

    if (updatedLot.status === 'DRAFT') {
      return router.navigateComponent(MBPages.Lot.Create.__id__, { id: updatedLot['id'] }, { replace: true });
    } else if (updatedLot.status !== 'ON_MODERATION') {
      return router.navigateComponent(MBPages.Lot.__id__, { id: updatedLot['id'] }, { replace: true });
    }

    setLot(updatedLot);
  }, [lot, rpcSchema, router, queryClient]);

  const handleDeleteLot = useCallback(() => {
    deleteToastCallback(async () => {
      const result = await ModalController.create(ConfirmDeleteModal, { lot });
      // TODO: remove this, refactor `useToastOuterCallback` for canceling
      if (!result) throw new Error();

      const archivedLot = await rpcSchema.send('lot.archive', { id: lot.id });
      await queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('lot') });

      if (archivedLot['status'] === 'ARCHIVED') return router.navigateComponent(MBPages.Marketplace.Home, {}, {});
    });
  }, [deleteToastCallback, lot, rpcSchema, router, queryClient]);

  if (!mappedLot || (!asset && !lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST) || preload.isLoading)
    return <UIKit.Loader />;

  return (
    <VStack gap="1.5rem" w="full" alignItems="start" maxW="54rem">
      <Box
        w="full"
        bg="rgba(223, 96, 59, 0.30)"
        color="white"
        px={{ base: 4, md: 8 }}
        py={{ base: 5, md: 9 }}
        borderRadius="sm"
      >
        Thank you for creating an offer. Your lot id number is {lot.id}. We will contact you on Telegram once we have
        reviewed it. The current processing time for a review is 1 day.
      </Box>
      <HStack
        w="full"
        justifyContent="space-between"
        bg="dark.900"
        borderRadius="sm"
        px={{ base: 4, md: 8 }}
        py={{ base: 5, md: 9 }}
      >
        <UILogic.AssetName asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST} />
        <HStack>
          <Button size="sm" variant="darkOutline" onClick={handleDeleteLot}>
            Delete
          </Button>
          <Button size="sm" minW="7rem" variant="orange" onClick={handleEditLot}>
            Edit
          </Button>
        </HStack>
      </HStack>
      <LotReview values={mappedLot} />
    </VStack>
  );
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="sm">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
