import {
	ModalBody,
	Modal as ModalWrapper,
	ModalContent,
} from '@chakra-ui/react'
import React from 'react'

type ModalProps = {
	isOpen?: boolean
	onClose: () => void
	renderContent: (close: () => void) => React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
	isOpen = true,
	onClose,
	renderContent,
}) => {
	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose}>
			<ModalContent>{renderContent(onClose)}</ModalContent>
		</ModalWrapper>
	)
}
