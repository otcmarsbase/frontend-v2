import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { LotCreateMappingSchema, UILogic, useRpcSchemaClient } from '@app/components';
import { useToastOuterCallback } from '@app/hooks';
import { UILayout } from '@app/layouts';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
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
  const [lot, setLot] = useState<Resource.Lot.Lot>();
  const [asset, setAsset] = useState<Resource.Asset.Asset>();

  const mappedLot = useMemo(() => {
    if (!lot) return;

    return LotCreateMappingSchema.cast({ id: lot.id, type: lot.type, ...lot.attributes }, { assert: false });
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
    <VStack gap="1.5rem" w="full" alignItems="start">
      <Box w="full" bg="rgba(223, 96, 59, 0.30)" color="white" p="1.5rem 2rem" borderRadius="sm">
        The lot has been added and is in the process of moderation. As a rule, this takes up to 3 days. You can always
        edit or delete a published lot in your personal account.
      </Box>
      <HStack w="full" justifyContent="space-between" bg="dark.900" borderRadius="sm" p="1.25rem 1.5rem">
        <UILogic.AssetName asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST} />
        <HStack>
          <Button variant="orange" onClick={handleEditLot}>
            Edit
          </Button>
          <Button variant="darkOutline" onClick={handleDeleteLot}>
            Delete
          </Button>
        </HStack>
      </HStack>
      <UILogic.LotReview values={mappedLot} />
    </VStack>
  );
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="sm">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
