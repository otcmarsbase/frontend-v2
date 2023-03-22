import React from 'react'

type ModalProps = {
	isOpen?: boolean
	onClose: () => void
	renderContent: (close: () => void) => React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ onClose, renderContent }) => {
	return (
		<div className="flex justify-center items-center z-999 fixed top-0 right-0 left-0 bottom-0">
			<ModalOverlay />
			<div className="relative w-full">{renderContent(onClose)}</div>
		</div>
	)
}

export const ModalOverlay: React.FC = ({}) => {
	return (
		<div className="bg-overlay absolute top-0 right-0 left-0 bottom-0 backdrop-blur-lg" />
	)
}
