import React, { PropsWithChildren } from 'react';

import {
  HStack,
  MenuItemProps,
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverContentProps,
  PopoverTrigger,
  useDisclosure,
  VStack,
  Box,
  PopoverProps,
} from '@chakra-ui/react';

export interface DropdownItem {
  href?: string;
  label: string;
  as?: MenuItemProps['as'];
}
export interface DropdownProps extends React.PropsWithChildren {
  trigger?: PopoverProps['trigger'];
  items: DropdownItem[];
  width?: PopoverContentProps['w'];
}

export const Dropdown: React.FC<PropsWithChildren<DropdownProps>> = ({
  items,
  width = '200px',
  children,
  trigger = 'click',
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen} trigger={trigger}>
      <PopoverTrigger>
        <Box cursor="pointer">{children}</Box>
      </PopoverTrigger>
      <PopoverContent bg="dark.600" borderColor="dark.600" w={width}>
        <PopoverArrow bg="dark.600" />
        <PopoverBody p="1rem 0">
          <VStack gap="0">
            {items.map((item, index) => (
              <HStack
                _hover={{
                  bg: 'rgba(81, 84, 96, 0.30)',
                  _before: {
                    opacity: 1,
                  },
                }}
                position="relative"
                cursor="pointer"
                h="2.5rem"
                w="full"
                px="1rem"
                fontSize="sm"
                as={item.as}
                key={index}
                transition="background 0.3s"
                _before={{
                  position: 'absolute',
                  transition: 'opacity 0.3s',
                  opacity: 0,
                  content: "''",
                  width: '0.25rem',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  bg: 'orange.500',
                }}
              >
                <Text>{item.label}</Text>
              </HStack>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
