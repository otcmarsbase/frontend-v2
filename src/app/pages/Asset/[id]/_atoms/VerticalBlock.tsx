import { UILogic } from '@app/components';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { HStack, UIKit } from '@shared/ui-kit';

export interface VerticalBlockProps {
  verticals: DeskGatewaySchema.AssetVertical[];
}

export function VerticalBlock({ verticals }: VerticalBlockProps) {
  return (
    <UIKit.Section w="full">
      <UIKit.SectionContent title="Verticals">
        <HStack gap="0.75rem" w="full">
          {verticals.map((vertical) => (
            <UILogic.AssetVerticalRow value={vertical} key={vertical} />
          ))}
        </HStack>
      </UIKit.SectionContent>
    </UIKit.Section>
  );
}
