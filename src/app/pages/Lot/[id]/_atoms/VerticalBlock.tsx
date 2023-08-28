import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

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
