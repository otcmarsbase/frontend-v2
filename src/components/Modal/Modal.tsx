import {
	ModalBody,
	Modal as ModalWrapper,
	ModalContent,
} from '@chakra-ui/react'
import React from 'react'

type ModalProps = {
	isOpen?: boolean
	onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ isOpen = true, onClose }) => {
	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose}>
			<ModalContent></ModalContent>
		</ModalWrapper>
	)
}
