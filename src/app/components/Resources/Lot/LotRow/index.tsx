import { useMemo } from 'react';

import { LotHotChip, UILogic } from '@app/components';
import { MBPages } from '@app/pages';
import { getContractSize } from '@app/utils';
import { Grid, GridItem, HStack, StackProps, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { LotCard } from '../LotCard';

import { LotRowFieldNameTitleMap } from './const';

interface FieldType {
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface LotRowProps extends Omit<StackProps, 'direction' | 'onClick'> {
  lot: DeskGatewaySchema.Lot;
  asset: DeskGatewaySchema.Asset;
  stat: DeskGatewaySchema.LotTransactionStatsAggregation;
  favorite?: DeskGatewaySchema.FavoriteLot;
  onClick: () => any;
}

export const LotRow: React.FC<LotRowProps> = ({ lot, asset, stat, favorite, onClick, ...stackProps }) => {
  const router = useRouter();
  const isBase = useBreakpointValue({ base: true, md: false });

  const hasPrice = useMemo(() => {
    return lot.type === 'EQUITY' || lot.type === 'UNLOCKED_TOKENS';
  }, [lot]);

  const hasFdv = useMemo(() => {
    return lot.type === 'TOKEN_WARRANT' || lot.type === 'SAFT' || lot.type === 'SAFE';
  }, [lot]);

  const priceLabel = useMemo(() => {
    switch (lot.type) {
      case 'UNLOCKED_TOKENS':
        return LotRowFieldNameTitleMap.get('PRICE_PER_TOKEN');
      case 'EQUITY':
        return LotRowFieldNameTitleMap.get('PRICE_PER_SHARE');
    }
  }, [lot]);

  const fields = useMemo<FieldType[]>(() => {
    return [
      {
        label: LotRowFieldNameTitleMap.get('LOT_TYPE'),
        value: <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />,
      },
      {
        label: LotRowFieldNameTitleMap.get('DEAL_SIZE'),
        value: (
          <UIKit.MoneyText
            value={lot.attributes.COMMON_SUMMARY}
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
      hasFdv && {
        label: LotRowFieldNameTitleMap.get('FDV'),
        value: (
          <UIKit.MoneyText
            value={lot.attributes.INVEST_DOC_FDV}
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
      hasPrice && {
        label: priceLabel,
        value: (
          <UIKit.MoneyText
            value={lot.attributes.COMMON_PRICE}
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
      {
        label: LotRowFieldNameTitleMap.get('OFFER_MAKER'),
        value: <Text>{lot.attributes.COMMON_IS_DIRECT ? 'Direct' : 'Broker'}</Text>,
      },
      {
        label: LotRowFieldNameTitleMap.get('MIN_BID'),
        value: (
          <UIKit.MoneyText
            value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
    ].filter(Boolean);
  }, [lot, hasFdv, hasPrice, priceLabel]);

  if (isBase) return <LotCard lot={lot} asset={asset} stat={stat} favorite={favorite} onClick={onClick} />;

  return (
    <HStack
      bg="dark.900"
      borderRadius="0.75rem"
      width="full"
      padding="1.5rem"
      paddingTop="2rem"
      paddingRight="6rem"
      justifyContent="space-between"
      position="relative"
      transition="all 0.3s"
      cursor="pointer"
      _hover={{
        bg: 'dark.800',
      }}
      alignItems="start"
      onClick={onClick}
      {...stackProps}
    >
      <UILogic.TradeDirectionText position="absolute" top="0" left="0" value={lot.attributes.COMMON_DIRECTION} />
      <VStack alignItems="flex-start" spacing="0">
        <Text color="dark.50">#{lot.id}</Text>
        <HStack gap="1rem" alignItems="center">
          <UILogic.AssetName
            size="sm"
            onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})}
            asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST}
          />
          <UILogic.LotStatus value={lot.status} />
        </HStack>
      </VStack>
      <HStack>
        <Grid templateColumns={'repeat(5, minmax(9rem, 1fr))'} gap="2rem" w="full">
          {fields.map((field, index) => (
            <GridItem w="full" key={index} pb="0.75rem">
              <VStack alignItems="start" maxW="8rem" w="full" key={index}>
                <Text whiteSpace="nowrap" fontWeight={600} color="dark.50">
                  {field.label}
                </Text>
                {typeof field.value === 'string' ? <Text fontWeight={600}>{field.value}</Text> : <>{field.value}</>}
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </HStack>
    </HStack>
  );
};
