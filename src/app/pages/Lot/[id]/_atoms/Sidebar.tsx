import { AssetLink, AssetVerticalRow, UILogic } from '@app/components';
import { MBPages } from '@app/pages';
import LINQ from '@berish/linq';
import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { ExpandableText, GridItem, HStack } from '@shared/ui-kit';

import { AssetBlock } from './AssetBlock';
import { SidebarBlock } from './SidebarBlock';

interface SidebarProps {
  asset: Resource.Asset.Asset | Resource.Lot.ValueObjects.AssetCreateRequest;
}

export const Sidebar: React.FC<SidebarProps> = ({ asset }) => {
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
    <GridItem display="flex" h="100%" flexDirection="column" top={0}>
      <VStack top={0} position="sticky" w="full" gap="0.75rem">
        <AssetBlock asset={asset} />
        {!isAssetCreateRequest && (
          <SidebarBlock
            title="Description"
            children={
              <ExpandableText noOfLines={3} gap="0.75rem">
                {asset.info.description}
              </ExpandableText>
            }
          />
        )}
        {officialLinks && (
          <SidebarBlock
            title="Official links"
            children={officialLinks.map((props, index) => (
              <AssetLink key={index} type={props.type} url={props.url}>
                {props.title}
              </AssetLink>
            ))}
          />
        )}
        {socialLinks && (
          <SidebarBlock
            title="Social media"
            children={socialLinks.map((props, index) => (
              <AssetLink key={index} type={props.type} url={props.url}>
                {props.title}
              </AssetLink>
            ))}
          />
        )}
        {otherLinks && (
          <SidebarBlock
            title="Other links"
            children={otherLinks.map((props, index) => (
              <AssetLink key={index} type={props.type} url={props.url}>
                {props.title}
              </AssetLink>
            ))}
          />
        )}
        {!isAssetCreateRequest && (
          <SidebarBlock
            title="Vertical"
            children={asset.info.verticals.map((type) => (
              <AssetVerticalRow key={type} value={type} />
            ))}
          />
        )}
      </VStack>
    </GridItem>
  );
};
