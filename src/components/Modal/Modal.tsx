import {
	Modal as ModalWrapper,
	ModalContent,
	ModalOverlay as ModalOverlayChakra,
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
			<ModalOverlay />
			<ModalContent>{renderContent(onClose)}</ModalContent>
		</ModalWrapper>
	)
}

export const ModalOverlay: React.FC = ({}) => {
	return (
		<ModalOverlayChakra
			bg="radial-gradient(50% 50% at 50% 50%,rgba(36,19,43,.8) 34.93%,rgba(19,20,25,.8) 100%)"
			backdropFilter="blur(15px)"
		/>
	)
}
