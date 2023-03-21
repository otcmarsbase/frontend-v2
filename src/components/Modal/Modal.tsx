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
		<div className="bg-overlay absolute top-0 right-0 left-0 bottom-0 z-999 backdrop-blur-lg" />
	)
}
