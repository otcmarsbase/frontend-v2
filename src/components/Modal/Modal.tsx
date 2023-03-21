import {
	ModalBody,
	Modal as ModalWrapper,
	ModalContent,
	ModalOverlay,
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
			<ModalOverlay
				bg="radial-gradient(50% 50% at 50% 50%,rgba(36,19,43,.8) 34.93%,rgba(19,20,25,.8) 100%)"
                backdropFilter='blur(15px)'
			/>
			<ModalContent>{renderContent(onClose)}</ModalContent>
		</ModalWrapper>
	)
}
