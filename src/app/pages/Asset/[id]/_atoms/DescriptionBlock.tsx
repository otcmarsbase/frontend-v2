import Linkify from 'react-linkify';

import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

export interface DescriptionBlockProps {
  description: string;
}

export function DescriptionBlock({ description }: DescriptionBlockProps) {
  return (
    <UIKit.Section h="full">
      <UIKit.SectionContent title="Description">
        <Text
          maxH="19rem"
          h="full"
          overflow="auto"
          w="full"
          variant="h5"
          fontWeight="500"
          color="dark.50"
          whiteSpace="pre-line"
        >
          <Linkify
            componentDecorator={(href, text, key) => (
              <Text
                key={key}
                as="a"
                href={href}
                color="orange.500"
                _hover={{ textDecoration: 'underline' }}
                target="_blank"
              >
                {text}
              </Text>
            )}
          >
            {description}
          </Linkify>
        </Text>
      </UIKit.SectionContent>
    </UIKit.Section>
  );
}
