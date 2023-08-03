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
} from '@chakra-ui/react';

export interface ModalProps extends Omit<ChakraModalProps, 'isOpen'> {
  title: string;
  description?: string;
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
        <ModalHeader>
          {title && (
            <Text
              fontFamily="promo"
              textTransform="uppercase"
              fontSize="2md"
              color="white"
              fontWeight={700}
            >
              {title}
            </Text>
          )}
          {description && (
            <Text fontSize="sm" fontWeight={400} color="dark.50">
              {description}
            </Text>
          )}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
};
