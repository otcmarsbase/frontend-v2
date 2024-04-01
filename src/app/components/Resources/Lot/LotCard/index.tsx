import { useMemo } from 'react';

import { LotReassignmentType, UILogic, useAuth } from '@app/components';
import { MBPages } from '@app/pages';
import { Box, Divider, HStack, Text, Button, VStack, Progress } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { LotTargetValuation } from '../LotTargetValuation';

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
}

export const LotCard: React.FC<LotCardProps> = ({ lot, asset, stat, minimalView = false, onClick }) => {
  const router = useRouter();
  const { account } = useAuth();
  const isOfferMaker = lot.offerMaker.id === account?.id;

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
        value: (
          <LotTargetValuation value={lot.attributes.INVEST_DOC_FDV}/>
        ),
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
            currencyPlacement='end'
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
    ].filter(Boolean);
  }, [lot, asset]);

  return (
    <VStack
      onClick={onClick}
      cursor='pointer'
      p='1.5rem 1.25rem'
      position='relative'
      borderRadius='sm'
      bg={minimalView ? 'dark.800' : 'dark.900'}
      gap={0}
      alignItems='start'
      h='full'
      transition='all 0.3s'
      _hover={{
        bg: minimalView ? 'dark.700' : 'dark.800',
      }}
    >
      <Box flexShrink='0' mb='0.75rem'>
        {asset && (
          <UILogic.AssetName
            asset={asset}
            onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})}
          />
        )}
      </Box>
      {!minimalView && (
        <>
          <Divider variant='dashed' color='dark.600' />
          <VStack flex='1' py='1rem' spacing='0.75rem' alignItems='flex-start' w='full'>
            {fields.map((field, index) => (
              <HStack gap='0.25rem' alignItems='center' key={index} justifyContent='space-between' w='full'>
                <Text fontWeight={600} fontSize='sm' color='dark.50'>
                  {field.name}
                </Text>
                {field.value}
              </HStack>
            ))}
          </VStack>
          <Divider variant='dashed' mb='1rem' color='dark.600' />
        </>
      )}
      <VStack width='full' alignItems='start'>
        <HStack width='full' justifyContent='space-between'>
          <Text fontWeight={600} fontSize='sm' color='dark.50'>
            Available
          </Text>
          <HStack fontWeight={600} color='white' fontSize='xs'>
            <UIKit.MoneyText value={available.toNumber()} abbreviated />
            <Text>/</Text>
            <UIKit.MoneyText value={total.toNumber()} abbreviated />
          </HStack>
        </HStack>
        <Progress value={progress.toNumber()} />
      </VStack>
      {!minimalView && (
        <UILogic.AuthAction>
          <Button w='full' variant='darkOutline' size='sm' mt='1.25rem'>
            {isOfferMaker ? 'View my lot' : 'Place bid'}
          </Button>
        </UILogic.AuthAction>
      )}
    </VStack>
  );
};
