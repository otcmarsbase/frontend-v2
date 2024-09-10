import { useMemo } from 'react';

import { useObserver } from 'mobx-react-lite';

import { AuthAction, UILogic } from '@app/components';
import { useToastInnerCallback } from '@app/hooks';
import pages from '@app/pages';
import { useStore } from '@app/store';
import { Grid, GridItem, HStack, IconButton, StackProps, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { LinkComponent, UIKit } from '@shared/ui-kit';

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
  withFavoriteControl?: boolean;
  onClick: () => any;
}

export const LotRow: React.FC<LotRowProps> = ({ lot, asset, stat, withFavoriteControl, onClick, ...stackProps }) => {
  const router = useRouter();
  const isBase = useBreakpointValue({ base: true, lg: false });
  const { favoriteLotStore } = useStore();

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

  const isFavorite = useObserver(() => favoriteLotStore.isFavorite(lot.id));

  const toggleFavorite = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    favoriteLotStore.toggleFavorite(lot.id);
  };

  const handleFavoriteClick = useToastInnerCallback(toggleFavorite, {
    okText: isFavorite ? 'Lot removed from favorites' : 'Lot added to favorites',
    showWhenOk: true,
  });

  if (isBase) return <LotCard lot={lot} asset={asset} stat={stat} onClick={onClick} />;

  return (
    <LinkComponent page={pages.Lot.__id__} pageProps={{ id: lot.id }} onClick={onClick}>
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
            <HStack>
              {withFavoriteControl && (
                <AuthAction>
                  <IconButton
                    variant="ghost"
                    aria-label="favorite"
                    fontSize="lg"
                    height="fit-content"
                    role="group"
                    icon={
                      <UIIcons.Common.FavoriteIcon
                        fill={isFavorite ? 'error' : ''}
                        stroke={isFavorite ? 'error' : 'dark.50'}
                        _groupHover={{ lg: { fill: 'error', stroke: 'error' } }}
                      />
                    }
                    onClick={handleFavoriteClick}
                    minW="auto"
                  />
                </AuthAction>
              )}
              <UILogic.AssetName
                size="sm"
                onClickCapture={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.navigateComponent(pages.Asset.__id__, { id: asset.id }, {});
                }}
                asset={asset || lot.attributes.INVEST_DOC_ASSET_CREATE_REQUEST}
              />
            </HStack>
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
    </LinkComponent>
  );
};
