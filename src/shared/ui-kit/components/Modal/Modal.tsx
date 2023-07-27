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
} from '@chakra-ui/react';

export interface ModalProps extends Omit<ChakraModalProps, 'isOpen'> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, header, footer, ...props }) => {
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
            <ModalContent>
                {header && <ModalHeader>{header}</ModalHeader>}
                <ModalCloseButton />

                <ModalBody>{children}</ModalBody>

                {footer && <ModalFooter>{footer}</ModalFooter>}
            </ModalContent>
        </ChakraModal>
    );
};
