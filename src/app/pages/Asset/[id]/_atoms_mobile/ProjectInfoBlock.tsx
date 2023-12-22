import Linkify from 'react-linkify';

import { Accordion, AccordionItem, Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { Collapser } from './Collapser';

export interface ProjectInfoBlockProps {
  description: string;
}

export const ProjectInfoBlock: React.FC<ProjectInfoBlockProps> = ({ description }) => {
  return (
    <Collapser label="Project info">
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
    </Collapser>
  );
};
