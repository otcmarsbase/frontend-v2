import { useCallback, useEffect, useMemo, useState } from 'react';

import { LotHotChip, UILogic, useAuth, useRpcSchemaClient } from '@app/components';
import { LotMultiplicatorDictionary, LotUnitAddonDictionary } from '@app/dictionary';
import { MBPages } from '@app/pages';
import { Box, Divider, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { DealRowFieldNameTitleMap } from '../const';

type FieldType = {
  name: string;
  value: React.ReactNode;
  colSpan?: number;
};

export interface DealCardProps {
  deal: Resource.Deal.Deal;
  onClick: () => void;
  minimalView?: boolean;
}

export const DealCard: React.FC<DealCardProps> = ({ deal, minimalView = false, onClick }) => {
  const router = useRouter();
  const rpcSchema = useRpcSchemaClient();
  const { account } = useAuth();

  const [asset, setAsset] = useState<Resource.Asset.Asset>();
  const [lot, setLot] = useState<Resource.Lot.Lot>();

  const fetchAssotiations = useLoadingCallback(
    useCallback(async () => {
      const _asset = await rpcSchema.send('asset.getById', { id: deal.assetKey.id });
      const _lot = await rpcSchema.send('lot.getById', { id: deal.lotKey.id });

      setAsset(_asset);
      setLot(_lot);
    }, [rpcSchema, deal]),
    true,
  );

  useEffect(() => {
    fetchAssotiations();
  }, [fetchAssotiations]);

  const multiplicator = LotMultiplicatorDictionary.get(lot.type).multiplicator;

  const fields: FieldType[] = useMemo(() => {
    if (lot.status !== 'ACTIVE') return [];

    return [
      {
        name: DealRowFieldNameTitleMap.get('TYPE'),
        value: <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />,
      },
      {
        name: DealRowFieldNameTitleMap.get('LOT_ID'),
        value: <Text>#{deal.lotKey.id}</Text>,
      },
      {
        name: DealRowFieldNameTitleMap.get('DEAL_SIZE'),
        value: (
          <UIKit.PercentText
            value={new Decimal(deal.units.value).div(multiplicator).toString()}
            percent={LotUnitAddonDictionary.get(lot.type)}
          />
        ),
      },
      {
        name: DealRowFieldNameTitleMap.get('DEAL_AMOUNT'),
        value: <UIKit.MoneyText value={deal.summary.value} format="0,0.X" abbreviated />,
      },
      {
        name: DealRowFieldNameTitleMap.get('DEAL_FDV'),
        value: <UIKit.MoneyText value={deal.fdv?.value} abbreviated />,
      },
      {
        name: DealRowFieldNameTitleMap.get('CREATED_TIME'),
        value: <UIKit.DateText value={deal.createdAt} />,
      },
    ].filter(Boolean);
  }, [lot, deal, multiplicator]);

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
          reverse={deal.bidMakers.some((bidMaker) => bidMaker.nickname === account.nickname)}
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
    </VStack>
  );
};
