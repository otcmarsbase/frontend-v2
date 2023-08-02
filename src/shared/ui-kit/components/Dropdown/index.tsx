import React, { useRef } from 'react';
import { useClickAway } from 'react-use';
import {
  Menu,
  MenuItem,
  MenuItemProps,
  MenuList,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';

export interface DropdownProps extends React.PropsWithChildren {
  items: MenuItemProps[];
}

export const Dropdown: React.FC<DropdownProps> = ({ items, children }) => {
  const {
    isOpen: isDropdownOpen,
    onClose,
    onToggle: onChildrenClick,
  } = useDisclosure();
  const targetRef = useRef<HTMLElement>(null);

  useClickAway(targetRef, onClose);

  return (
    <Tooltip
      hasArrow
      isOpen={isDropdownOpen}
      cursor="default"
      label={
        <Menu isLazy isOpen={isDropdownOpen}>
          <MenuList>
            {items.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </MenuList>
        </Menu>
      }
    >
      {React.cloneElement(children as React.ReactElement, {
        onClick: onChildrenClick,
        ref: targetRef,
      })}
    </Tooltip>
  );
};
