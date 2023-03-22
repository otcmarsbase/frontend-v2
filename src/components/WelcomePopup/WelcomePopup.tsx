import { Popup } from '@/components/Popup/Popup'
import { BaseText } from '@/components/Text/BaseText'
import React from 'react'

type WelcomePopupProps = {
	onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
	return (
		<Popup className="w-full tablet-vh:w-[436px]">
			<div className="bg-white tablet-vh:rounded-2xl">
				<BaseText>Welcome to DeFi OTC Marsbase</BaseText>
				<BaseText>
					Connect to one of the available providers or create a new
					wallet
				</BaseText>
				<div>asd</div>
				<div>asd</div>
			</div>
		</Popup>
	)
}
