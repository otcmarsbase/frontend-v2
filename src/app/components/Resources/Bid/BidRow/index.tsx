import { useCallback, useEffect, useState } from 'react';

import { BidRowSkeleton, UILogic, useRpcSchemaClient } from '@app/components';
import { LotMultiplicatorDictionary, LotUnitAddonDictionary } from '@app/dictionary';
import { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { Grid, GridItem, HStack, StackProps, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';
import Decimal from 'decimal.js';
import { capitalize } from 'lodash';

import { BidRowFieldNameTitleMap } from './const';

export interface BidRowProps extends Omit<StackProps, 'direction' | 'onClick'> {
  bid: Resource.Bid.Bid;
  onClick: () => any;
}

export const BidRow: React.FC<BidRowProps> = ({ bid, onClick, ...stackProps }) => {
  const router = useRouter();
  const rpcSchema = useRpcSchemaClient();
  const [asset, setAsset] = useState<Resource.Asset.Asset>();
  const [lot, setLot] = useState<Resource.Lot.Lot>();
  const [deal, setDeal] = useState<Resource.Deal.Deal>();

  const fetchAssotiations = useLoadingCallback(
    useCallback(async () => {
      const _asset = await rpcSchema.send('asset.getById', { id: bid.assetKey.id });
      const _lot = await rpcSchema.send('lot.getById', { id: bid.lotKey.id });

      setAsset(_asset);
      setLot(_lot);

      if (bid.dealKey) {
        const _deal = await rpcSchema.send('deal.getById', { id: bid.dealKey.id });
        setDeal(_deal);
      }
    }, [rpcSchema, bid]),
    true,
  );

  useEffect(() => {
    fetchAssotiations();
  }, [fetchAssotiations]);

  if (fetchAssotiations.isLoading) return <BidRowSkeleton />;

  const multiplicator = LotMultiplicatorDictionary.get(lot.type).multiplicator;

  const fields: { label: React.ReactNode; value: React.ReactNode }[] = [
    // {
    //   label: BidRowFieldNameTitleMap.get('TYPE'),
    //   value: <Text>1212</Text>,
    // },
    {
      label: BidRowFieldNameTitleMap.get('PUBLISH_DATE'),
      value: <Text>{formatDate(bid.createdAt, 'ONLY_DATE')}</Text>,
    },
    {
      label: BidRowFieldNameTitleMap.get('BID_FDV'),
      value: <UIKit.MoneyText value={bid.fdv?.value} abbreviated />,
    },
    {
      label: BidRowFieldNameTitleMap.get('BID_SIZE'),
      value: (
        <UIKit.PercentText
          value={new Decimal(bid.units.value).div(multiplicator).toString()}
          percent={LotUnitAddonDictionary.get(lot.type)}
        />
      ),
    },
    {
      label: BidRowFieldNameTitleMap.get('BID_AMOUNT'),
      value: <UIKit.MoneyText value={bid.summary.value} format="0,0.X" />,
    },
    {
      label: BidRowFieldNameTitleMap.get('OFFER_MAKER'),
      value: <UILogic.AccountAvatar nickname={lot.offerMaker.nickname} />,
    },
    {
      label: BidRowFieldNameTitleMap.get('DIRECT_SELLER'),
      value: <Text>{bid.mediatorType === 'DIRECT' ? 'Yes' : 'No'}</Text>,
    },
    {
      label: BidRowFieldNameTitleMap.get('LOCATION'),
      value: <Text>{capitalize(bid.location)}</Text>,
    },
    {
      label: BidRowFieldNameTitleMap.get('DEADLINE'),
      value: <Text>{bid.deadline ? formatDate(bid.deadline, 'ONLY_DATE') : '-'}</Text>,
    },
  ];

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
        reverse
      />
      <VStack gap="1rem" marginTop="1rem" alignItems="start">
        <HStack gap="0.7rem">
          <Text color="dark.200">#{bid.id}</Text>
        </HStack>
        <HStack gap="0.5rem" alignItems="center">
          <UILogic.AssetName
            onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: bid.assetKey.id }, {})}
            size="sm"
            asset={asset}
          />
        </HStack>
        {deal ? <UILogic.DealStatus value={deal.status} /> : <UILogic.BidStatus value={bid.status} />}
      </VStack>
      <HStack>
        <Grid templateColumns={'repeat(4, 13rem)'} gridRowGap="1.5rem">
          {fields.map((field, index) => (
            <GridItem
              w="100%"
              key={index}
              borderBottom="1px solid"
              borderColor="dark.400"
              marginRight="8rem"
              pb="0.75rem"
              __css={{
                [`:nth-last-child(-n+4)`]: {
                  marginRight: 'none',
                  borderColor: 'transparent',
                },
              }}
            >
              <VStack alignItems="start" maxW="8rem" w="full" fontSize="sm">
                <Text whiteSpace="nowrap" fontWeight={600} color="dark.50">
                  {field.label}
                </Text>
                {typeof field.value === 'string' ? <Text fontWeight={600}>{field.value}</Text> : <>{field.value}</>}
              </VStack>
            </GridItem>
          ))}
        </Grid>
        {
          // TODO fix stopPropagate on row clicking
        }
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
  );
};
