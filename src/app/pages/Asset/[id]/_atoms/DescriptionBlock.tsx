import { Text } from '@chakra-ui/react';
import { UIKit } from '@components/ui-kit';

export interface DescriptionBlockProps {
  description: string;
}

export function DescriptionBlock({ description }: DescriptionBlockProps) {
  return (
    <UIKit.Section>
      <UIKit.SectionContent title="Description">
        <Text w="80%" variant="h5" fontWeight="500" color="dark.50" whiteSpace="pre-line">
          {description}
        </Text>
      </UIKit.SectionContent>
    </UIKit.Section>
  );
}
