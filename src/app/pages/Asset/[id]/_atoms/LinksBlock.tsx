import { UILogic } from '@app/components';
import LINQ from '@berish/linq';
import { Divider, HStack, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export interface LinksBlockProps {
  links: DeskGatewaySchema.AssetLink[];
}

export function LinksBlock({ links }: LinksBlockProps) {
  const groupedByGroupLinks = new Map(LINQ.from(links).groupBy((link) => link.group));

  const officialLinks = groupedByGroupLinks.get('OFFICIAL');
  const socialLinks = groupedByGroupLinks.get('SOCIAL');
  const otherLinks = groupedByGroupLinks.get('OTHER');

  return (
    <VStack w="full" gap="0.8rem">
        <UIKit.Section w="full">
          <UIKit.SectionContent title="Project Links">
            <VStack alignItems="flex-start" width="full">
              {officialLinks && (
                <HStack>
                  {officialLinks.map((link) => (
                    <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                      {link.title}
                    </UILogic.AssetLink>
                  ))}
                </HStack>
              )}
              {socialLinks && (
                <>
                  <Divider variant="dashed" height="1px" marginY="1rem"/>
                  <HStack>
                    {socialLinks.map((link) => (
                      <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                        {link.title}
                      </UILogic.AssetLink>
                    ))}
                  </HStack>
                </>
              )}
              {otherLinks && (
                <>
                  <Divider variant="dashed" height="1px" marginY="1rem"/>
                  <HStack>
                    {otherLinks.map((link) => (
                      <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                        {link.title}
                      </UILogic.AssetLink>
                    ))}
                  </HStack>
                </>
              )}
            </VStack>
          </UIKit.SectionContent>
        </UIKit.Section>
    </VStack>
  );
}
