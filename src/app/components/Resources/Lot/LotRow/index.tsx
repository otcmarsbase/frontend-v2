import { useMemo } from 'react';

import { LotHotChip, UILogic } from '@app/components';
import { MBPages } from '@app/pages';
import { getContractSize } from '@app/utils';
import { Grid, GridItem, HStack, StackProps, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { LotRowFieldNameTitleMap } from './const';

interface FieldType {
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface LotRowProps extends Omit<StackProps, 'direction' | 'onClick'> {
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset;
  onClick: () => any;
}

export const LotRow: React.FC<LotRowProps> = ({ lot, asset, onClick, ...stackProps }) => {
  const router = useRouter();

  const fields = useMemo<FieldType[]>(() => {
    return [
      {
        label: LotRowFieldNameTitleMap.get('LOT_TYPE'),
        value: <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />,
      },
      {
        label: LotRowFieldNameTitleMap.get('PUBLISHED_AT'),
        value: <UIKit.DateText value={lot.attributes.COMMON_CREATED_AT_ATTRIBUTE} />,
      },
      {
        label: LotRowFieldNameTitleMap.get('FDV'),
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
        label: LotRowFieldNameTitleMap.get('LOT_VALUE'),
        value: <UIKit.PercentText value={getContractSize(lot)} />,
      },
      {
        label: LotRowFieldNameTitleMap.get('VERTICAL'),
        value: (
          <HStack>
            {asset.info.verticals.map((vertical, index) => (
              <UILogic.AssetVerticalIcon value={vertical} key={index} />
            ))}
          </HStack>
        ),
      },
      {
        label: LotRowFieldNameTitleMap.get('DEADLINE'),
        value: <UIKit.DateText value={lot.attributes.COMMON_DEADLINE} />,
      },
      {
        label: LotRowFieldNameTitleMap.get('TOTAL_BIDS_PLACE'),
        value: lot.totalBids,
      },
    ].filter(Boolean);
  }, [lot, asset]);

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
      <UILogic.TradeDirectionText position="absolute" top="0" left="0" value={lot.attributes.COMMON_DIRECTION} />
      <VStack gap="1rem" marginTop="1rem" alignItems="start">
        <HStack gap="0.7rem">
          <Text color="dark.200">#{lot.id}</Text>
          {lot.isHot && <LotHotChip />}
        </HStack>
        <HStack gap="0.5rem" alignItems="center">
          <UILogic.AssetName
            size="sm"
            onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})}
            asset={asset}
          />
        </HStack>
        <UILogic.LotStatus value={lot.status} />
      </VStack>
      <HStack>
        <Grid templateColumns={'repeat(4, 13rem)'} gridRowGap="1.5rem">
          {fields.map((field, index) => (
            <GridItem
              w="100%"
              key={index}
              borderBottom="1px solid"
              borderColor={index > 3 ? 'transparent' : 'dark.400'}
              marginRight={index > 3 ? 0 : '8rem'}
              pb="0.75rem"
            >
              <VStack alignItems="start" maxW="8rem" w="full">
                <Text whiteSpace="nowrap" fontWeight={600} color="dark.50">
                  {field.label}
                </Text>
                {typeof field.value === 'string' ? <Text fontWeight={600}>{field.value}</Text> : <>{field.value}</>}
              </VStack>
            </GridItem>
          ))}
        </Grid>
        <UIKit.Dropdown items={[{ label: 'Edit' }, { label: 'Duplicate' }, { label: 'Delete' }]}>
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
        </UIKit.Dropdown>
      </HStack>
    </HStack>
  );
};
