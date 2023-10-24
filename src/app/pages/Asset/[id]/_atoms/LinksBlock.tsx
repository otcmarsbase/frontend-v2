import { UILogic } from '@app/components';
import LINQ from '@berish/linq';
import { HStack, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { UIKit } from '@shared/ui-kit';

export interface LinksBlockProps {
  links: Resource.Asset.ValueObjects.AssetLink[];
}

export function LinksBlock({ links }: LinksBlockProps) {
  const groupedByGroupLinks = new Map(LINQ.from(links).groupBy((link) => link.group));

  const officialLinks = groupedByGroupLinks.get('OFFICIAL');
  const socialLinks = groupedByGroupLinks.get('SOCIAL');
  const otherLinks = groupedByGroupLinks.get('OTHER');

  return (
    <VStack w="full" gap="0.8rem">
      {officialLinks && (
        <UIKit.Section w="full">
          <UIKit.SectionContent title="Project Links">
            <HStack>
              {officialLinks.map((link) => (
                <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                  {link.title}
                </UILogic.AssetLink>
              ))}
            </HStack>
          </UIKit.SectionContent>
        </UIKit.Section>
      )}

      {socialLinks && (
        <UIKit.Section w="full">
          <UIKit.SectionContent title="Social Links">
            <HStack>
              {socialLinks.map((link) => (
                <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                  {link.title}
                </UILogic.AssetLink>
              ))}
            </HStack>
          </UIKit.SectionContent>
        </UIKit.Section>
      )}
      {otherLinks && (
        <UIKit.Section w="full">
          <UIKit.SectionContent title="Other Links">
            <HStack>
              {otherLinks.map((link) => (
                <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                  {link.title}
                </UILogic.AssetLink>
              ))}
            </HStack>
          </UIKit.SectionContent>
        </UIKit.Section>
      )}
    </VStack>
  );
}
