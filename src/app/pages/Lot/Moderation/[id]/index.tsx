import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { LotWizard, LotWizardProps, UILogic, useRpcSchemaClient } from '@app/components';
import { UILayout } from '@app/layouts';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/otc-desk-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';
import { toNumber } from 'lodash';

import { ConfirmEditModal } from './_atoms';

const View: React.FC<PropsWithChildren<{ id: number }>> = ({ id }) => {
  id = toNumber(id);
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [lot, setLot] = useState<Resource.Lot.Lot>();
  const [asset, setAsset] = useState<Resource.Asset.Asset>();

  const mappedLot = useMemo(() => {
    if (!lot) return;

    return { id: lot.id, type: lot.type, ...lot.attributes };
  }, [lot]);

  const preload = useLoadingCallback(
    useCallback(async () => {
      const lot = await rpcSchema.send('lot.getById', { id });
      const asset = await rpcSchema.send('asset.getById', { id: lot.attributes.INVEST_DOC_ASSET_PK });

      if (lot.status !== 'ON_MODERATION') {
        return router.navigateComponent(MBPages.Lot.__id__, { id }, {});
      }

      setLot(lot);
      setAsset(asset);
    }, [id, rpcSchema, router]),
  );

  useEffect(() => {
    preload();
  }, [preload]);

  const handleEditLot = useCallback(async () => {
    const result = await ModalController.create(ConfirmEditModal, { lot });
    if (result) {
      // TODO: make lot draft
    }
  }, []);

  if (!mappedLot || !asset || preload.isLoading) return <UIKit.Loader />;

  return (
    <VStack gap="1.5rem" w="full" alignItems="start">
      <Box w="full" bg="rgba(223, 96, 59, 0.30)" color="white" p="1.5rem 2rem" borderRadius="sm">
        The lot has been added and is in the process of moderation. As a rule, this takes up to 3 days. You can always
        edit or delete a published lot in your personal account.
      </Box>
      <HStack w="full" justifyContent="space-between" bg="dark.900" borderRadius="sm" p="1.25rem 1.5rem">
        <UILogic.AssetName asset={asset} />
        <HStack>
          <Button variant="orange" onClick={handleEditLot}>
            Edit
          </Button>
          <Button variant="darkOutline">Delete</Button>
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
