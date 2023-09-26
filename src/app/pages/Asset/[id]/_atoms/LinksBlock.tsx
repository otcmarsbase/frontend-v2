import { useMemo } from 'react';

import { UILogic } from '@app/components';
import LINQ from '@berish/linq';
import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export interface LinksBlockProps {
  links: Resource.Asset.ValueObjects.AssetLink[];
}

export function LinksBlock({ links }: LinksBlockProps) {
  const groupByLinkGroup = useMemo(() => LINQ.from(links).groupBy((m) => m.group), [links]);

  return (
    <UIKit.Section w="full">
      <UIKit.SectionContent title="Project Links">
        <VStack w="full" divider={<StackDivider borderStyle="dashed" color="dark.600" />} gap="1rem" alignItems="start">
          {groupByLinkGroup
            .filter(([group, links]) => links.length)
            .map(([group, links]) => (
              <HStack key={group}>
                {links.map((link) => (
                  <UILogic.AssetLink key={link.title} type={link.type} url={link.url}>
                    {link.title}
                  </UILogic.AssetLink>
                ))}
              </HStack>
            ))}
        </VStack>
      </UIKit.SectionContent>
    </UIKit.Section>
  );
}
