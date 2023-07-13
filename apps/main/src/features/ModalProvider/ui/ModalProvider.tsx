import {ModalContext} from '../lib/ModalContext';
import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {
  Button,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";

export const ModalProvider: FC<PropsWithChildren> = ({children}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const defaultProps = {
    isOpen,
    onOpen,
    onClose
  }

  return (
    <ModalContext.Provider value={defaultProps}>
      <>
        {children}

      </>
    </ModalContext.Provider>
  );

};




