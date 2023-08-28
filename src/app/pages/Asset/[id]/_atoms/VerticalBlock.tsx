import { UIKit } from '@components/ui-kit';
import { Resource } from '@schema/api-gateway';

export interface VerticalBlockProps {
  verticals: Resource.Asset.AssetVertical[];
}

export function VerticalBlock({ verticals }: VerticalBlockProps) {
  return (
    <UIKit.Section>
      <UIKit.SectionContent>Verticals</UIKit.SectionContent>
    </UIKit.Section>
  );
}
