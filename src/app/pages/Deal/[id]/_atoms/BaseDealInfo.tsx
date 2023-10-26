import { FC, useCallback, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

import { AssetName, DealStatus, TradeDirectionText, useAuth } from '@app/components';
import pages, { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { Button, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
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
  const { account } = useAuth();

  const [, setClipboardValue] = useCopyToClipboard();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const copyID = useCallback(() => {
    if (deal.id) {
      setClipboardValue(`${deal.id}`);
    }
  }, [deal.id, setClipboardValue]);

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
      <TradeDirectionText
        position="absolute"
        left="0"
        top="0"
        value={lot?.attributes.COMMON_DIRECTION}
        reverse={deal.bidMakers.some((bidMaker) => bidMaker.nickname === account.nickname)}
      />
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
              <Tooltip
                hasArrow
                closeOnPointerDown
                isOpen={tooltipIsOpen}
                onClose={() => setTooltipIsOpen(false)}
                closeDelay={500}
                placement="bottom-start"
                offset={[-10, 10]}
                label={<Text fontSize="sm">ID Copied</Text>}
              >
                <UIIcons.Common.CopyIcon color="white" />
              </Tooltip>
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
