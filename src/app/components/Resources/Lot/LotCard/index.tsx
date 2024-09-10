import { useMemo } from 'react';

import { useObserver } from 'mobx-react-lite';

import { AuthAction, LotReassignmentType, UILogic, useAuth } from '@app/components';
import { useToastInnerCallback } from '@app/hooks';
import pages from '@app/pages';
import { useStore } from '@app/store';
import { Box, Divider, HStack, Text, Button, VStack, Progress, IconButton } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { LinkComponent, UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { LotTargetValuation } from '../LotTargetValuation';

import { LotCardBadge } from './LotCardBadge';

type FieldType = {
  name: string;
  value: React.ReactNode;
  colSpan?: number;
};

export interface LotCardProps {
  lot: DeskGatewaySchema.Lot;
  stat: DeskGatewaySchema.LotTransactionStatsAggregation;
  asset: DeskGatewaySchema.Asset;
  onClick: () => void;
  minimalView?: boolean;
  viewCount?: DeskGatewaySchema.LotViewCountAggregation;
}

export const LotCard: React.FC<LotCardProps> = ({ lot, asset, stat, minimalView = false, onClick, viewCount }) => {
  const router = useRouter();
  const { account } = useAuth();
  const isOfferMaker = lot.offerMaker.id === account?.id;
  const { favoriteLotStore } = useStore();

  const available = new Decimal(stat.available || '0');
  const total = new Decimal(lot.attributes.COMMON_SUMMARY || '0');
  const executed = total.minus(available);
  const progress = executed.div(total).mul(100);

  const fields: FieldType[] = useMemo(() => {
    if (lot.status !== 'ACTIVE' || !asset) return [];

    return [
      {
        name: 'Lot',
        value: <UILogic.TradeDirectionChip value={lot.attributes.COMMON_DIRECTION} />,
      },
      {
        name: 'Type',
        value: <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />,
      },
      {
        name: 'Target valuation',
        value: <LotTargetValuation value={lot.attributes.INVEST_DOC_FDV} />,
      },
      {
        name: 'Reassignment',
        value: <LotReassignmentType value={lot.attributes.INVEST_DOC_REASSIGNMENT_TYPE} />,
      },
      {
        name: 'Minimal Bid Size',
        value: (
          <UIKit.MoneyText
            value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
            currencyPlacement="end"
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
    ].filter(Boolean);
  }, [lot, asset]);

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

  const borderColor = useMemo(() => {
    switch (lot.attributes.COMMON_BADGE?.toLowerCase()) {
      case 'vip':
        return 'linear-gradient(121deg, #CF8E16 12.55%, #DAB36C 51.61%, #CB8C16 90.67%)';
      case 'hot':
        return 'linear-gradient(266deg, #FF9B3F 10%, #FF3216 100%)';
      case 'promo':
        return 'linear-gradient(106deg, #4E7FFE -1.74%, #DA48FF 94.35%)';
    }
  }, [lot]);

  const background = useMemo(() => {
    switch (lot.attributes.COMMON_BADGE?.toLowerCase()) {
      case 'vip':
        return '#19170e';
      case 'hot':
        return '#100502';
      case 'promo':
        return '#090c1a';
      default:
        return minimalView ? 'dark.800' : 'dark.900';
    }
  }, [lot, minimalView]);

  return (
    <LinkComponent page={pages.Lot.__id__} pageProps={{ id: lot.id }} onClick={onClick}>
      <VStack
        onClick={onClick}
        cursor="pointer"
        p="1rem 1.25rem"
        position="relative"
        borderRadius="sm"
        gap={0}
        alignItems="start"
        h="full"
        transition="all 0.3s"
        background={background}
        _hover={{
          bg: minimalView ? 'dark.700' : 'dark.800',
        }}
        as="a"
      >
        {lot.attributes.COMMON_BADGE && (
          <>
            <Box background={borderColor} position="absolute" borderRadius="sm" inset="-2px" zIndex={-1} />
            {!minimalView && (
              <LotCardBadge
                pos="absolute"
                top={0}
                left="50%"
                transform="translateX(-50%)"
                type={lot.attributes.COMMON_BADGE}
              />
            )}
          </>
        )}

        {minimalView && (
          <UILogic.TradeDirectionChip
            value={lot.attributes.COMMON_DIRECTION}
            position="absolute"
            top={0}
            right={0}
            borderRadius={12}
            borderTopLeftRadius={0}
            borderBottomRightRadius={0}
          />
        )}
        <Box flexShrink="0" mb="0.75rem" w="full">
          <HStack alignItems="center" marginBottom="0.125rem">
            <Text color="dark.50" fontSize="0.8rem" textDecoration="none">
              #{lot.id}
            </Text>
            {minimalView && (
              <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />
            )}
          </HStack>
          <HStack justifyContent="space-between" alignItems="center" w="full">
            {asset && (
              <UILogic.AssetName
                asset={asset}
                onClickCapture={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.navigateComponent(pages.Asset.__id__, { id: asset.id }, {});
                }}
              />
            )}
            <HStack>
              {viewCount && (
                <HStack color="dark.50" spacing={1}>
                  <UIIcons.Common.ViewIcon />
                  <Text color="dark.50" fontSize="sm">
                    {viewCount.count}
                  </Text>
                </HStack>
              )}
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
                />
              </AuthAction>
            </HStack>
          </HStack>
        </Box>

        {!minimalView && (
          <>
            <Divider variant="dashed" color="dark.600" />
            <VStack flex="1" py="1rem" spacing="0.75rem" alignItems="flex-start" w="full">
              {fields.map((field, index) => (
                <HStack gap="0.25rem" alignItems="center" key={index} justifyContent="space-between" w="full">
                  <Text fontWeight={600} fontSize="sm" color="dark.50">
                    {field.name}
                  </Text>
                  {field.value}
                </HStack>
              ))}
            </VStack>
            <Divider variant="dashed" mb="1rem" color="dark.600" />
          </>
        )}
        <VStack width="full" alignItems="start">
          <HStack width="full" justifyContent="space-between">
            <Text fontWeight={600} fontSize="sm" color="dark.50">
              Available
            </Text>
            <HStack fontWeight={600} color="white" fontSize="xs">
              <UIKit.MoneyText value={available.toNumber()} abbreviated />
              <Text>/</Text>
              <UIKit.MoneyText value={total.toNumber()} abbreviated />
            </HStack>
          </HStack>
          <Progress value={progress.toNumber()} />
        </VStack>
        {!minimalView && (
          <UILogic.AuthAction>
            <Button w="full" variant="darkOutline" size="sm" mt="1.25rem">
              {isOfferMaker ? 'View my lot' : 'Place bid'}
            </Button>
          </UILogic.AuthAction>
        )}
      </VStack>
    </LinkComponent>
  );
};
