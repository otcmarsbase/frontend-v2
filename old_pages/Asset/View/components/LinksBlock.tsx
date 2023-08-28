import { useMemo } from 'react';

import LINQ from '@berish/linq';
import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Section, SectionContent } from 'src/app/my-components';
import { AssetLink } from 'src/app/my-components/AssetLink';

export interface LinksBlockProps {
  links: Resource.Asset.AssetLink[];
}

export function LinksBlock({ links }: LinksBlockProps) {
  const groupByLinkGroup = useMemo(() => LINQ.from(links).groupBy((m) => m.group), [links]);

  return (
    <Section>
      <SectionContent title="Project Links">
        <VStack divider={<StackDivider />}>
          {groupByLinkGroup.map(([group, links]) => (
            <HStack key={group}>
              {links.map((link, index) => (
                <AssetLink key={link.title} type={link.type} url={link.url}>
                  {link.title}
                </AssetLink>
              ))}
            </HStack>
          ))}
        </VStack>
      </SectionContent>
    </Section>
  );
}
