import { UILogic } from '@app/components';
import { Resource } from '@schema/otc-desk-gateway';
import { SimpleGrid, UIKit } from '@shared/ui-kit';

export interface VerticalBlockProps {
  verticals: Resource.Asset.Enums.AssetVertical[];
}

export function VerticalBlock({ verticals }: VerticalBlockProps) {
  return (
    <UIKit.Section w="full">
      <UIKit.SectionContent title="Verticals">
        <SimpleGrid columns={3} gap="0.75rem" w="full">
          {verticals.map((vertical) => (
            <UILogic.AssetVerticalRow value={vertical} key={vertical} />
          ))}
        </SimpleGrid>
      </UIKit.SectionContent>
    </UIKit.Section>
  );
}
