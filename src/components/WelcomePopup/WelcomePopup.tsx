import React from 'react'
import { Popup } from '../Popup/Popup'

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<Popup className="w-full tablet-vh:w-[436px]">
			<div className="bg-white tablet-vh:rounded-2xl">
				<div>asd</div>
				<div>asd</div>
				<div>asd</div>
				<div>asd</div>
			</div>
		</Popup>
	)
}
