import { PropsWithChildren } from 'react';
import { useToggle } from 'react-use';

import { Box, BoxProps, HStack, Text, Icon, StackProps, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Loader } from '../Loader';

export interface KeyValueRowProps extends StackProps {
  keyBoxProps?: BoxProps;
  valueBoxProps?: BoxProps;
  isLoading?: boolean;
}

export const KeyValueRow: React.FC<PropsWithChildren<KeyValueRowProps>> = ({
  keyBoxProps,
  valueBoxProps,
  isLoading,
  children,
  ...stackProps
}) => {
  return (
    <HStack justify="space-between" w="full" {...stackProps}>
      <Box {...valueBoxProps} w="full">
        <Loader isLoading={isLoading} size="xs">
          {children}
        </Loader>
      </Box>
    </HStack>
  );
};

export interface KeyValueRowAccordionProps {
  keyComponent?: React.ReactNode;
  isHidden?: boolean;
  isLoading?: boolean;
}

export const KeyValueRowAccordion: React.FC<PropsWithChildren<KeyValueRowAccordionProps>> = ({
  keyComponent,
  children,
  isHidden,
  isLoading,
}) => {
  const [isExpanded, toggle] = useToggle(false);

  return (
    <VStack w="full" alignItems="start" borderTop="0.0625rem solid" borderColor="rgba(255, 255, 255, 0.15)" pt="0.6rem">
      <HStack userSelect="none" w="full" justifyContent="space-between" cursor="pointer" onClick={toggle}>
        <Text fontWeight={500}>{keyComponent}</Text>
        <Icon w="1.25rem" h="1.25rem" as={isExpanded ? FiChevronUp : FiChevronDown} />
      </HStack>
      {isExpanded && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          style={{ width: '100%' }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {children}
        </motion.div>
      )}
    </VStack>
  );
};
