import { AssetLink, AssetVerticalRow } from '@app/components';
import LINQ from '@berish/linq';
import { Button, Heading, Link, Image, Text, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { ExpandableText, GridItem, HStack } from '@shared/ui-kit';

import { SidebarBlock } from './SidebarBlock';

interface SidebarProps {
  asset: Resource.Asset.Asset;
  analyticsLink?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ asset, analyticsLink = '#' }) => {
  const groupedByGroupLinks = new Map(LINQ.from(asset.info.links).groupBy((link) => link.group));

  return (
    <GridItem display="flex" h="100%" flexDirection="column" top={0}>
      <VStack top={0} position="sticky" w="full" gap="0.75rem">
        <HStack
          w="100%"
          h="5.5rem"
          justifyContent="space-between"
          padding="0.75rem 1.25rem"
          bg="dark.900"
          borderRadius="0.75rem"
        >
          <HStack gap="2.12rem">
            <HStack gap="1.5rem">
              <Image w="4rem" src={asset.info.logo_url} borderRadius="light" />
              <Heading as="h2" variant="h4" fontSize={'lg'} fontFamily="promo">
                {asset.info.title}
              </Heading>
            </HStack>
            <Link href={analyticsLink}>
              <Button size="xs" variant="darkOutline" leftIcon={<UIIcons.Common.DownloadIcon />}>
                <Text fontWeight="800" whiteSpace="nowrap">
                  Get analytics
                </Text>
              </Button>
            </Link>
          </HStack>
        </HStack>
        <SidebarBlock
          title="Description"
          children={
            <ExpandableText noOfLines={3} gap="0.75rem">
              {asset.info.description}
            </ExpandableText>
          }
        />
        <SidebarBlock
          title="Official links"
          children={groupedByGroupLinks.get('OFFICIAL').map((props) => (
            <AssetLink type={props.type} url={props.url}>
              {props.title}
            </AssetLink>
          ))}
        />
        <SidebarBlock
          title="Social media"
          children={groupedByGroupLinks.get('SOCIAL').map((props) => (
            <AssetLink type={props.type} url={props.url}>
              {props.title}
            </AssetLink>
          ))}
        />
        <SidebarBlock
          title="Vertical"
          children={asset.info.verticals.map((type) => (
            <AssetVerticalRow value={type} />
          ))}
        />
      </VStack>
    </GridItem>
  );
};
