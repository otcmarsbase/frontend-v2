import React, { useCallback, useState } from 'react';

import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Text,
  LayoutProps,
  Box,
} from '@chakra-ui/react';

export interface ModalProps extends Omit<ChakraModalProps, 'isOpen'> {
  title: React.ReactElement<typeof Text>;
  description?: React.ReactElement<typeof Text>;
  footer?: React.ReactNode;
  maxW?: LayoutProps['maxW'];
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  footer,
  title,
  description,
  maxW,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  const onCancelCallback = useCallback(() => {
    if (onClose) {
      setVisible(false);
      setTimeout(() => onClose(), 100);
    }
  }, [onClose]);

  return (
    <ChakraModal isOpen={visible} onClose={onCancelCallback} {...props}>
      <ModalOverlay />
      <ModalContent maxW={maxW}>
        <Box data-gradient-content>
          <ModalHeader>
            {title}
            {description}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>{children}</ModalBody>

          {footer && <ModalFooter>{footer}</ModalFooter>}
        </Box>
      </ModalContent>
    </ChakraModal>
  );
};
