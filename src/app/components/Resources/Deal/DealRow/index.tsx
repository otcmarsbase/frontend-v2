import { UILogic, useAuth } from '@app/components';
import { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { Grid, GridItem, HStack, SimpleGrid, StackProps, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { DealRowFieldNameTitleMap } from '../const';
import { DealCard } from '../DealCard';

export interface DealRowProps extends Omit<StackProps, 'direction' | 'onClick'> {
  deal: Resource.Deal.Deal;
  asset: Resource.Asset.Asset;
  lot: Resource.Lot.Lot;
  onClick: () => any;
}

export const DealRow: React.FC<DealRowProps> = ({ deal, lot, asset, onClick, ...stackProps }) => {
  const router = useRouter();
  const { account } = useAuth();

  const isBase = useBreakpointValue({ base: true, md: false });

  const fields: { label: React.ReactNode; value: React.ReactNode }[] = [
    {
      label: DealRowFieldNameTitleMap.get('TYPE'),
      value: <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />,
    },
    {
      label: DealRowFieldNameTitleMap.get('LOT_ID'),
      value: <Text>#{deal.lotKey.id}</Text>,
    },
    {
      label: DealRowFieldNameTitleMap.get('DEAL_AMOUNT'),
      value: <UIKit.MoneyText value={deal.summary.value} format="0,0.X" abbreviated />,
    },
    {
      label: DealRowFieldNameTitleMap.get('DEAL_FDV'),
      value: <UIKit.MoneyText value={deal.fdv?.value} abbreviated />,
    },
    {
      label: DealRowFieldNameTitleMap.get('CREATED_TIME'),
      value: <Text>{formatDate(deal.createdAt, 'DATE_AND_TIME')}</Text>,
    },
  ];

  if (isBase) return <DealCard deal={deal} lot={lot} asset={asset} onClick={onClick} />;

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
          <UILogic.DealStatus value={deal.status} />
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
