import { useToggle } from 'react-use';

import { Accordion, Text, AccordionItem, Box, HStack, IconButton } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface CollapserProps {
  label: string;
  defaultOpened?: boolean;
  children: React.ReactNode;
}

export const Collapser: React.FC<CollapserProps> = ({ label, children, defaultOpened }) => {
  const [isOpened, togglePanel] = useToggle(defaultOpened);

  return (
    <Box bg="dark.900" w="full" borderRadius="sm" p="0.75rem">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="md" textTransform="uppercase" fontFamily="promo">
          {label}
        </Text>
        <IconButton
          variant="ghost"
          onClick={togglePanel}
          aria-label="down"
          icon={<UIIcons.Common.ArrowDown w="1.5rem" h="1.5rem" />}
        />
      </HStack>
      <Box
        transition="all 0.15s opacity 0.05s"
        h={isOpened ? 'auto' : '0'}
        opacity={isOpened ? 1 : 0}
        visibility={isOpened ? 'visible' : 'hidden'}
      >
        {children}
      </Box>
    </Box>
  );
};
