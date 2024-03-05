import { UILogic, useAuth } from '@app/components';
import { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { GridItem, HStack, SimpleGrid, StackProps, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { DealRowFieldNameTitleMap } from '../const';
import { DealCard } from '../DealCard';

export interface DealRowProps extends Omit<StackProps, 'direction' | 'onClick'> {
  deal: DeskGatewaySchema.Deal;
  asset: DeskGatewaySchema.Asset;
  lot: DeskGatewaySchema.Lot;
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
      value: <Text>#{lot.id}</Text>,
    },
    {
      label: DealRowFieldNameTitleMap.get('DEAL_AMOUNT'),
      value: <UIKit.MoneyText value={deal.summary} format="0,0.X" abbreviated />,
    },
    {
      label: DealRowFieldNameTitleMap.get('DEAL_FDV'),
      value: <UIKit.MoneyText value={deal.fdv} abbreviated />,
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
      <UILogic.TradeDirectionText
        position="absolute"
        top="0"
        left="0"
        value={lot.attributes.COMMON_DIRECTION}
        reverse={deal.bidMakers.some((bidMaker) => bidMaker.id === account.id)}
      />
      <HStack justifyContent="space-between" w="full">
        <VStack gap="1rem" marginTop="1rem" alignItems="start">
          <HStack gap="0.7rem">
            <Text color="dark.200">#{deal.id}</Text>
          </HStack>
          <HStack gap="0.5rem" alignItems="center">
            <UILogic.AssetName
              onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})}
              size="sm"
              asset={asset}
            />
          </HStack>
          <UILogic.DealStatus value={deal.status} />
        </VStack>
        <HStack w="70%">
          <SimpleGrid columns={6}>
            {fields.map((field, index) => (
              <GridItem key={index} marginRight="8rem" pb="0.75rem">
                <VStack alignItems="start" maxW="8rem" w="full" fontSize="sm">
                  <Text whiteSpace="nowrap" fontWeight={600} color="dark.50">
                    {field.label}
                  </Text>
                  {typeof field.value === 'string' ? <Text fontWeight={600}>{field.value}</Text> : <>{field.value}</>}
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
          {/* <UIKit.Dropdown items={[{ label: 'Edit' }, { label: 'Duplicate' }, { label: 'Delete' }]}>
            <UIIcons.Common.KebabMenuIcon
              position="absolute"
              top="1.5rem"
              right="2rem"
              w="2rem"
              color="dark.200"
              transition="all 0.3s"
              _hover={{ color: 'orange.500' }}
              h="2rem"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </UIKit.Dropdown> */}
        </HStack>
      </HStack>
    </HStack>
  );
};
