import { useMemo, useState } from 'react';

import { LotReassignmentType, UILogic, UIModals } from '@app/components';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import LINQ from '@berish/linq';
import { VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { MoneyText, UIKit } from '@shared/ui-kit';
import { formatDistance } from 'date-fns';

import { LotTargetValuation } from '../../../components/Resources/Lot/LotTargetValuation';

import { AdditionalInfoBlock, AssetBlock, Bids, SidebarBlock } from './_atoms';
import { AvailableBlock } from './_atoms/AvailableBlock';
import { MobileTabItemDictionary, MobileTabItemKey } from './_atoms/const';
import { InfoBlock } from './_atoms_mobile';

export interface LotMobileProps {
  lot: DeskGatewaySchema.Lot;
  offerMaker: DeskGatewaySchema.User;
  stat: DeskGatewaySchema.LotTransactionStatsAggregation;
  isOfferMaker: boolean;
  asset: DeskGatewaySchema.Asset | DeskGatewaySchema.LotAssetRequest;
}

export const LotMobile: React.FC<LotMobileProps> = ({ lot, asset, stat, offerMaker, isOfferMaker }) => {
  const router = useRouter();
  const [tab, setTab] = useState<MobileTabItemKey>('LOT_INFO');

  const onCreateBidClick = async () => {
    const bid = await ModalController.create(UIModals.CreateBidModal, { lot });

    if (!bid) return;

    router.navigateComponent(MBPages.Dashboard.Bids, {}, {});
  };

  const isAssetCreateRequest = 'title' in asset;

  const createdAt = useMemo(() => formatDistance(
    new Date(lot.attributes.COMMON_CREATED_AT_ATTRIBUTE),
    new Date(),
    { addSuffix: true }
  ), [lot.attributes.COMMON_CREATED_AT_ATTRIBUTE])

  const groupedByGroupLinks = new Map(
    LINQ.from(
      isAssetCreateRequest
        ? ([
            {
              type: 'SITE',
              group: 'OFFICIAL',
              title: 'Site',
              url: asset.website,
            },
          ] as DeskGatewaySchema.AssetLink[])
        : asset.info.links,
    ).groupBy((link) => link.group),
  );

  const logInfoList = useMemo(() => {
    const list = [
      {
        label: 'ID',
        value: <Text fontSize="sm">{lot.id}</Text>,
      },
      {
        label: 'Direction',
        value: <UILogic.TradeDirectionText variant="ghost" value={lot.attributes.COMMON_DIRECTION} />,
      },
      {
        label: 'Type',
        value: <UILogic.LotTypeChip withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} value={lot.type} />,
      },
      {
        label: 'Available reassignment',
        value: <LotReassignmentType value={lot.attributes.INVEST_DOC_REASSIGNMENT_TYPE} />,
      },
      {
        label: 'Size to offer',
        value: (
          <MoneyText
            value={lot.attributes.COMMON_SUMMARY}
            format="0,0.X"
            fontSize="sm"
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
      {
        label: 'Target valuation',
        value: (
          <LotTargetValuation value={lot.attributes.INVEST_DOC_FDV} fontSize="sm"/>
        ),
      },
      {
        label: 'Minimal bid',
        value: (
          <MoneyText
            value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
            format="0,0.X"
            fontSize="sm"
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      },
    ];

    if (['UNLOCKED_TOKENS', 'EQUITY'].includes(lot.type)) {
      list.push({
        label: lot.type === 'UNLOCKED_TOKENS' ? 'Price per share' : 'Price per token',
        value: (
          <MoneyText
            value={lot.attributes.COMMON_PRICE}
            format="0,0.X"
            fontSize="sm"
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        ),
      });
    } else {
      list.push({
        label: 'Vesting',
        value: <Text fontSize="sm">{lot.attributes.TOKEN_VESTING_PERIOD}</Text>,
      });
    }

    list.push({
      label: 'Publish date',
      value:  <Text fontSize="sm">{createdAt}</Text>
    })

    return list;
  }, [lot]);

  const officialLinks = groupedByGroupLinks.get('OFFICIAL');
  const socialLinks = groupedByGroupLinks.get('SOCIAL');
  const otherLinks = groupedByGroupLinks.get('OTHER');

  return (
    <VStack>
      <AssetBlock asset={asset} onCreateBidClick={onCreateBidClick} />
      <UIKit.RadioButtons
        value={tab}
        onChange={(key) => setTab(key)}
        items={MobileTabItemDictionary.keys()}
        renderKey={(key) => key}
        renderItem={(key) => MobileTabItemDictionary.get(key)}
      />
      {tab === 'LOT_INFO' && (
        <VStack w="full" gap="0.5rem">
          <InfoBlock title="Lot info" fields={logInfoList} />
          <AvailableBlock lot={lot} stat={stat} />
          <AdditionalInfoBlock lot={lot} />
        </VStack>
      )}
      {tab === 'BIDS' && <Bids isOfferMaker={isOfferMaker} offerMaker={offerMaker} lot={lot} asset={asset} />}
      {tab === 'ASSET_INFO' && (
        <VStack>
          {!isAssetCreateRequest && (
            <SidebarBlock
              title="Description"
              children={
                <UIKit.ExpandableText noOfLines={3} gap="0.75rem">
                  {asset.info.description}
                </UIKit.ExpandableText>
              }
            />
          )}
          {officialLinks && (
            <SidebarBlock
              title="Official links"
              children={officialLinks.map((props, index) => (
                <UILogic.AssetLink key={index} type={props.type} url={props.url}>
                  {props.title}
                </UILogic.AssetLink>
              ))}
            />
          )}
          {socialLinks && (
            <SidebarBlock
              title="Social media"
              children={socialLinks.map((props, index) => (
                <UILogic.AssetLink key={index} type={props.type} url={props.url}>
                  {props.title}
                </UILogic.AssetLink>
              ))}
            />
          )}
          {otherLinks && (
            <SidebarBlock
              title="Other links"
              children={otherLinks.map((props, index) => (
                <UILogic.AssetLink key={index} type={props.type} url={props.url}>
                  {props.title}
                </UILogic.AssetLink>
              ))}
            />
          )}
          {!isAssetCreateRequest && (
            <SidebarBlock
              title="Vertical"
              children={asset.info.verticals.map((type) => (
                <UILogic.AssetVerticalRow key={type} value={type} />
              ))}
            />
          )}
        </VStack>
      )}
    </VStack>
  );
};
