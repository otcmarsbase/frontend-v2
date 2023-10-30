import { useMemo } from 'react';

import { AssetVerticalIcon, LotHotChip, UILogic, useAuth } from '@app/components';
import { MBPages } from '@app/pages';
import { Box, Divider, Grid, GridItem, HStack, Text, Button, VStack, Progress } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

type FieldType = {
  name: string;
  value: React.ReactNode;
  colSpan?: number;
};

export interface LotCardProps {
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset;
  onClick: () => void;
  minimalView?: boolean;
}

export const LotCard: React.FC<LotCardProps> = ({ lot, asset, minimalView = false, onClick }) => {
  const router = useRouter();
  const { account } = useAuth();
  const isOfferMaker = lot.offerMaker.id === account?.id;

  const availableSum = new Decimal(lot.available?.value || 0).toDecimalPlaces(2).toNumber();
  const totalSum = new Decimal(lot.total?.value || 0).toDecimalPlaces(2).toNumber();

  const fields: FieldType[] = useMemo(() => {
    if (lot.status !== 'ACTIVE') return [];

    return [
      {
        name: 'FDV',
        value: (
          <UIKit.MoneyText
            value={lot.attributes.INVEST_DOC_FDV}
            abbreviated
            addon={
              <Text as="span" color="dark.50">
                $
              </Text>
            }
          />
        ),
      },
      {
        name: 'Minimal Bid Size',
        value: (
          <UIKit.MoneyText
            abbreviated
            value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
            addon={<Text color="dark.50">$</Text>}
          />
        ),
      },
      {
        name: 'Total Bids Placed',
        value: <Text>{lot.totalBids}</Text>,
      },
      {
        name: 'Lot Deadline',
        value: <UIKit.DateText value={lot.attributes.COMMON_DEADLINE} format="ONLY_DATE" />,
      },
      {
        name: 'Vertical',
        colSpan: 2,
        value: (
          <HStack flexWrap="wrap">
            {asset?.info.verticals.map((vertical, index) => (
              <AssetVerticalIcon value={vertical} key={index} />
            ))}
          </HStack>
        ),
      },
    ].filter(Boolean);
  }, [lot, asset]);

  return (
    <VStack
      onClick={onClick}
      cursor="pointer"
      p="1.5rem 1.25rem"
      position="relative"
      borderRadius="sm"
      bg={minimalView ? 'dark.800' : 'dark.900'}
      gap={0}
      alignItems="start"
      h="full"
      transition="all 0.3s"
      _hover={{
        bg: minimalView ? 'dark.700' : 'dark.800',
      }}
    >
      <Box flexShrink="0" mb="0.75rem">
        <UILogic.TradeDirectionText
          invert
          value={lot.attributes.COMMON_DIRECTION}
          position="absolute"
          top="0"
          right="0"
        />
        <HStack gap="0.6rem" mt="0.1rem" mb="0.75rem">
          <Text color="dark.200" fontSize="sm">
            #{lot.id}
          </Text>
          <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />
          {lot.isHot && <LotHotChip />}
        </HStack>
        {asset && (
          <UILogic.AssetName
            asset={asset}
            onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})}
          />
        )}
      </Box>
      {!minimalView && (
        <>
          <Divider variant="dashed" color="dark.600" />
          <Box flex="1" py="1rem">
            <Grid templateColumns="repeat(2, 1fr)" gridColumnGap="2.5rem" gridRowGap="0.75rem">
              {fields.map((field, index) => (
                <GridItem key={index} colSpan={field.colSpan}>
                  <VStack gap="0.25rem" alignItems="start">
                    <Text fontWeight={600} fontSize="sm" color="dark.50">
                      {field.name}
                    </Text>
                    {field.value}
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Divider variant="dashed" mb="1rem" color="dark.600" />
        </>
      )}
      <VStack width="full" alignItems="start">
        <HStack width="full" justifyContent="space-between">
          <Text fontWeight={600} fontSize="sm" color="dark.50">
            Available
          </Text>
          <HStack fontWeight={600} color="white" fontSize="xs">
            <UIKit.MoneyText value={availableSum} abbreviated addon="$" />
            <Text>/</Text>
            <UIKit.MoneyText value={totalSum} abbreviated addon="$" />
          </HStack>
        </HStack>
        <Progress value={(availableSum / totalSum) * 100} colorScheme="green" />
      </VStack>
      {!minimalView && (
        <UILogic.AuthAction>
          <Button w="full" variant="darkOutline" size="sm" mt="1.25rem">
            {isOfferMaker ? 'View my lot' : 'Place bid'}
          </Button>
        </UILogic.AuthAction>
      )}
    </VStack>
  );
};
