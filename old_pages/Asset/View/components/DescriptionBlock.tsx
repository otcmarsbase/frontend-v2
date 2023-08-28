import { Text } from '@chakra-ui/react';
import { Section, SectionContent } from 'src/app/my-components';

export interface DescriptionBlockProps {
  description: string;
}

export function DescriptionBlock({ description }: DescriptionBlockProps) {
  return (
    <Section>
      <SectionContent title="Description">
        <Text w="80%" variant="h5" fontWeight="500" color="dark.50" whiteSpace="pre-line">
          {description}
        </Text>
      </SectionContent>
    </Section>
  );
}
