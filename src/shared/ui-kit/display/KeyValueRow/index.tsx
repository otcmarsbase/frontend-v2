import { PropsWithChildren } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  HStack,
  Icon,
  StackProps,
} from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Loader } from '../Loader';

export interface KeyValueRowProps extends StackProps {
  keyBoxProps?: BoxProps;
  valueBoxProps?: BoxProps;
  keyComponent?: React.ReactNode;
  isLoading?: boolean;
}

export const KeyValueRow: React.FC<PropsWithChildren<KeyValueRowProps>> = ({
  keyBoxProps,
  keyComponent,
  valueBoxProps,
  isLoading,
  children,
  ...stackProps
}) => {
  return (
    <HStack justify="space-between" {...stackProps}>
      <Box {...keyBoxProps} color="muted">
        {keyComponent}
      </Box>
      <Box {...valueBoxProps}>
        <Loader isLoading={isLoading} size="xs">
          {children}
        </Loader>
      </Box>
    </HStack>
  );
};

export interface KeyValueRowAccordionProps {
  keyComponent?: React.ReactNode;
  keyBoxProps?: BoxProps;
  valueComponent?: React.ReactNode;
  valueBoxProps?: BoxProps;
  accordionHidden?: boolean;
  isLoading?: boolean;
}

export const KeyValueRowAccordion: React.FC<PropsWithChildren<KeyValueRowAccordionProps>> = ({
  keyComponent,
  keyBoxProps,
  valueComponent,
  valueBoxProps,
  children,
  accordionHidden,
  isLoading,
}) => {
  return (
    <Accordion allowToggle variant="primary">
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <KeyValueRow keyComponent={keyComponent} keyBoxProps={keyBoxProps} valueBoxProps={valueBoxProps}>
              <HStack spacing="4">
                <Loader isLoading={isLoading} size="xs">
                  <Box>{valueComponent}</Box>
                  {!accordionHidden && (
                    <AccordionButton _hover={{ bg: 'none' }} p={0}>
                      <Icon
                        as={isExpanded ? FiChevronUp : FiChevronDown}
                        boxSize="8"
                        fontWeight="light"
                        color="blue.400"
                        cursor="pointer"
                        _hover={{
                          color: 'blue.600',
                        }}
                      />
                    </AccordionButton>
                  )}
                </Loader>
              </HStack>
            </KeyValueRow>
            {!accordionHidden && (
              <AccordionPanel pl="8" pt="4" pb="0">
                {children}
              </AccordionPanel>
            )}
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
