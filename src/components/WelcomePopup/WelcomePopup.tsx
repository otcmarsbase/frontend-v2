import React from 'react'
import { Popup } from '../Popup/Popup'

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<Popup>
			<div className="w-full h-full bg-black rounded-2xl tablet-vh:w-[436px] ">
				<div>asd</div>
				<div>asd</div>
				<div>asd</div>
				<div>asd</div>
			</div>
		</Popup>
	)
}
