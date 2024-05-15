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

const FAQ_ITEMS = [
  {
    title: 'How to place a bid?',
    text: 'If you liked the lot or have any questions, leave a bid by clicking on the “create bid” button and start discussions with the owner about the lot',
  },
];

export const FAQBlock: FC = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {FAQ_ITEMS.map((item, index) => (
        <AccordionItem border="none" bg="dark.900" rounded="sm" p="1rem 1.5rem" key={index}>
          <Heading>
            <AccordionButton p="0">
              <Box as="span" flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon color="orange.500" fontSize="1.75rem" />
            </AccordionButton>
          </Heading>
          <AccordionPanel p="0" pt="2" color="dark.50">
            {item.text}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
