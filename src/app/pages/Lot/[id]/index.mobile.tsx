import { useState } from 'react';

import { UILogic, UIModals } from '@app/components';
import { UIDictionary } from '@app/dictionary';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { getContractSize, getRoundContractSize } from '@app/utils';
import LINQ from '@berish/linq';
import { VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { AdditionalInfoBlock, AssetBlock, Bids, SidebarBlock } from './_atoms';
import { AvailableBlock } from './_atoms/AvailableBlock';
import {
  MainChipFieldTypeTitleMap,
  MobileTabItemDictionary,
  MobileTabItemKey,
  RoundInfoFieldDictionary,
} from './_atoms/const';
import { InfoBlock } from './_atoms_mobile';

export interface LotMobileProps {
  lot: Resource.Lot.Lot;
  isOfferMaker: boolean;
  asset: Resource.Asset.Asset | Resource.Lot.ValueObjects.AssetCreateRequest;
}

export const LotMobile: React.FC<LotMobileProps> = ({ lot, asset, isOfferMaker }) => {
  const router = useRouter();
  const [tab, setTab] = useState<MobileTabItemKey>('BIDS');
  const { attributes } = lot;

  const onCreateBidClick = async () => {
    const bid = await ModalController.create(UIModals.CreateBidModal, { lot });

    if (!bid) return;

    router.navigateComponent(MBPages.Dashboard.Bids, {}, {});
  };

  const isAssetCreateRequest = 'title' in asset;

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
          ] as Resource.Asset.ValueObjects.AssetLink[])
        : asset.info.links,
    ).groupBy((link) => link.group),
  );

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
      {tab === 'BIDS' && <Bids isOfferMaker={isOfferMaker} lot={lot} asset={asset} />}
      {tab === 'LOT_INFO' && (
        <VStack w="full" gap="0.5rem">
          <InfoBlock
            title="Main info"
            fields={[
              {
                label: 'ID',
                value: <Text fontSize="sm">{lot.id}</Text>,
              },
              {
                label: 'Direction',
                value: <UILogic.TradeDirectionText variant="ghost" value={attributes.COMMON_DIRECTION} />,
              },
              {
                label: 'Type',
                value: <UILogic.LotTypeChip withTokenWarrant={attributes.SAFE_WITH_TOKEN_WARRANT} value={lot.type} />,
              },
            ]}
          />
          <InfoBlock
            title="More info"
            fields={[
              {
                label:
                  lot.type !== 'TOKEN_WARRANT' &&
                  RoundInfoFieldDictionary.get(lot.type === 'SAFE' ? 'ROUND_EQUITY_PRICE' : 'ROUND_TOKEN_PRICE').title,
                value:
                  lot.type !== 'TOKEN_WARRANT' ? (
                    <UIKit.PercentText
                      fontWeight={800}
                      value={attributes.INVEST_DOC_ROUND_PRICE}
                      fontSize="sm"
                      percentTextProps={{ fontWeight: 800 }}
                    />
                  ) : (
                    <UIKit.PercentText
                      fontWeight={800}
                      format="0.0000"
                      value={getRoundContractSize(lot)}
                      fontSize="sm"
                      percentTextProps={{ fontWeight: 800 }}
                    />
                  ),
              },
              (lot.type !== 'SAFE' || lot.attributes.SAFE_WITH_TOKEN_WARRANT) && {
                label: RoundInfoFieldDictionary.get('TGE_DATE').title,
                value: (
                  <UIKit.DateText value={typeof attributes.TOKEN_TGE === 'number' ? attributes.TOKEN_TGE : undefined} />
                ),
              },
              {
                label: RoundInfoFieldDictionary.get('ROUND_FDV').title,
                value: (
                  <UIKit.MoneyText
                    value={attributes.INVEST_DOC_ROUND_FDV}
                    fontSize="sm"
                    format="0,00"
                    fontWeight={800}
                    currencyTextProps={{
                      fontSize: 'sm',
                      color: 'dark.50',
                      fontWeight: 800,
                    }}
                  />
                ),
              },
              (lot.type !== 'SAFE' || lot.attributes.SAFE_WITH_TOKEN_WARRANT) && {
                label: RoundInfoFieldDictionary.get('LOCKUP_PERIOD').title,
                value: (
                  <Text fontWeight={800} fontSize="sm">
                    {lot.attributes.TOKEN_LOCKUP_PERIOD ? attributes.TOKEN_LOCKUP_PERIOD : '-'}
                  </Text>
                ),
              },
              (lot.type !== 'SAFE' || lot.attributes.SAFE_WITH_TOKEN_WARRANT) && {
                label: RoundInfoFieldDictionary.get('VESTING_CALENDAR').title,
                value: (
                  <Text fontSize="sm" fontWeight={800}>
                    {attributes.TOKEN_VESTING_PERIOD ? attributes.TOKEN_VESTING_PERIOD : '-'}
                  </Text>
                ),
              },
            ].filter(Boolean)}
          />
          <AvailableBlock lot={lot} />
          <InfoBlock
            title="Round info"
            fields={[
              {
                label: MainChipFieldTypeTitleMap.get(
                  lot.type === 'SAFT' ? 'PRICE_UNIT' : lot.type === 'TOKEN_WARRANT' ? 'PRICE_TOKEN' : 'PRICE_EQUITY',
                ),
                value: (
                  <UIKit.MoneyText fontSize="sm" fontWeight={500} value={lot.attributes.COMMON_PRICE} abbreviated />
                ),
              },
              {
                label: MainChipFieldTypeTitleMap.get('LOT_FDV'),
                value: (
                  <UIKit.MoneyText fontSize="sm" abbreviated fontWeight={500} value={lot.attributes.INVEST_DOC_FDV} />
                ),
              },
              {
                label: MainChipFieldTypeTitleMap.get('CONTRACT_SIZE'),
                value: (
                  <VStack>
                    <UIKit.MoneyText
                      fontSize="sm"
                      abbreviated
                      fontWeight={500}
                      color="dark.50"
                      value={lot.attributes.COMMON_SUMMARY}
                    />
                    {lot.type === 'SAFT' ? (
                      <UIKit.MoneyText fontSize="xs" fontWeight={500} value={getContractSize(lot)} abbreviated />
                    ) : (
                      <UIKit.PercentText fontSize="xs" fontWeight={500} value={getContractSize(lot)} />
                    )}
                  </VStack>
                ),
              },
              {
                label: MainChipFieldTypeTitleMap.get('OWNER'),
                value: <UILogic.AccountAvatar nickname={lot.offerMaker.nickname} />,
              },
              {
                label: MainChipFieldTypeTitleMap.get(lot.attributes.COMMON_DIRECTION === 'BUY' ? 'BUYER' : 'SELLER'),
                value: (
                  <Text fontWeight="500" fontSize="sm">
                    {UIDictionary.MediatorTypeDictionary.get(lot.attributes.COMMON_MEDIATOR).title}
                  </Text>
                ),
              },
              {
                label: MainChipFieldTypeTitleMap.get('MIN_BID'),
                value: (
                  <UIKit.MoneyText
                    fontSize="sm"
                    fontWeight={500}
                    abbreviated
                    value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
                  />
                ),
              },
              {
                label: MainChipFieldTypeTitleMap.get('TYPE_OF_BIDDER'),
                value: <UILogic.ParticipantTypesText fontSize="sm" value={lot.attributes.COMMON_BID_MAKER_TYPES} />,
              },
              {
                label: MainChipFieldTypeTitleMap.get('TYPE_OF_SELLER'),
                value: <UILogic.ParticipantTypesText fontSize="sm" value={lot.attributes.COMMON_OFFER_MAKER_TYPES} />,
              },
            ].filter(Boolean)}
          />
          <AdditionalInfoBlock lot={lot} />
        </VStack>
      )}
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
