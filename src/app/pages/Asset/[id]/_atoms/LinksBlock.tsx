import { useMemo } from 'react';

import { UILogic } from '@app/components';
import LINQ from '@berish/linq';
import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export interface LinksBlockProps {
  links: Resource.Asset.AssetLink[];
}

export function LinksBlock({ links }: LinksBlockProps) {
  const groupByLinkGroup = useMemo(() => LINQ.from(links).groupBy((m) => m.group), [links]);

  return (
    <UIKit.Section>
      <UIKit.SectionContent title="Project Links">
        <VStack divider={<StackDivider />}>
          {groupByLinkGroup.map(([group, links]) => (
            <HStack key={group}>
              {links.map((link, index) => (
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
