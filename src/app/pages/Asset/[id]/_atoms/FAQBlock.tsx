import { FC } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

interface FAQBlockProps {
  items: DeskGatewaySchema.AssetFaq[];
}

export const FAQBlock: FC<FAQBlockProps> = ({ items }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple display="grid" gap={4}>
      {items.map((item, index) => (
        <AccordionItem border="none" bg="dark.900" rounded="sm" p="1rem 1.5rem" key={index}>
          <Heading>
            <AccordionButton p="0">
              <Box as="span" flex="1" textAlign="left">
                {item.question}
              </Box>
              <AccordionIcon color="orange.500" fontSize="1.75rem" />
            </AccordionButton>
          </Heading>
          <AccordionPanel p="0" pt="2" color="dark.50">
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
