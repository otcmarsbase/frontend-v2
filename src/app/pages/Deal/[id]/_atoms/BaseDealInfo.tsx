import { FC, useCallback } from 'react';

import { AssetName, DealStatus, TradeDirectionText } from '@app/components';
import pages, { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/otc-desk-gateway';
import { UIIcons } from '@shared/ui-icons';

interface FieldProps {
  label: string;
  value: React.ReactNode;
}

const Field: FC<FieldProps> = ({ label, value }) => {
  return (
    <HStack gap="0.75rem">
      <Text fontSize="sm" color="dark.50" fontWeight="600">
        {label}
      </Text>
      {value}
    </HStack>
  );
};

export interface BaseDealInfoProps {
  lot: Resource.Lot.Lot;
  deal: Resource.Deal.Deal;
  asset: Resource.Asset.Asset;
}

export const BaseDealInfo: FC<BaseDealInfoProps> = ({ lot, asset, deal }) => {
  const router = useRouter();

  const copyID = useCallback(() => {
    console.log('copyToClipboard', deal?.id);
  }, [deal]);

  const pushToLot = useCallback(() => {
    router.navigateComponent(pages.Lot.__id__, { id: lot?.id }, {});
  }, [router, lot]);

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="start"
      padding="2rem 1.25rem"
      pt="3rem"
      bg="dark.900"
      flex="2"
      borderRadius="0.75rem"
      width="full"
      position="relative"
      gap="1.5rem"
    >
      <TradeDirectionText position="absolute" left="0" top="0" value={lot?.direction} />
      <VStack alignItems="start">
        <AssetName asset={asset} onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})} />
        <Button p="0" onClick={pushToLot} variant="ghost" color="dark.50" rightIcon={<UIIcons.Common.ArrowUp />}>
          Go to lot
        </Button>
      </VStack>
      <VStack alignItems="flex-end">
        <Field
          label="Deal ID"
          value={
            <HStack onClick={copyID}>
              <Text fontSize="sm" fontWeight="500">
                {deal?.id}
              </Text>
              <UIIcons.Common.CopyIcon w="1rem" h="1rem" />
            </HStack>
          }
        />
        <Field
          label="Created time"
          value={
            <Text fontSize="sm" fontWeight="500">
              {deal?.createdAt ? formatDate(deal.createdAt, 'DATE_AND_TIME') : '-'}
            </Text>
          }
        />
        <Field label="Status" value={<DealStatus value={deal?.status} />} />
      </VStack>
    </HStack>
  );
};
