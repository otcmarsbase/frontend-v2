import { Resource } from '@schema/api-gateway';
import { Section, SectionContent } from 'src/app/my-components';

export interface VerticalBlockProps {
  verticals: Resource.Asset.AssetVertical[];
}

export function VerticalBlock({ verticals }: VerticalBlockProps) {
  return (
    <Section>
      <SectionContent>Verticals</SectionContent>
    </Section>
  );
}
