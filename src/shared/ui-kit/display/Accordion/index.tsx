import { ReactNode } from 'react';

import {
  Accordion as AccordionChakra,
  AccordionProps as AccordionChakraProps,
  AccordionItem as AccordionItemChakra,
  AccordionButton as AccordionButtonChakra,
  AccordionIcon  as AccordionIconChakra,
  AccordionPanel as AccordionPanelChakra,
} from '@chakra-ui/react';

export interface AccordionProps extends AccordionChakraProps {
  items: {
    key: string,
    label: string | ReactNode,
    body: ReactNode
  }[]
}

export function Accordion({ items, ...rest }: AccordionProps) {
  return (
    <AccordionChakra {...rest}>
      {items.map((item) => (
        <AccordionItemChakra key={item.key}>
          <AccordionButtonChakra>
            {item.label}
            <AccordionIconChakra color="orange.500"/>
          </AccordionButtonChakra>
          <AccordionPanelChakra>
            {item.body}
          </AccordionPanelChakra>
        </AccordionItemChakra>
      ))}
    </AccordionChakra>
  )
}
