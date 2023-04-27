import { BaseButton, BaseButtonProps } from "@/components/Button/BaseButton"
import React from "react"

type PrimaryButtonProps = {} & BaseButtonProps

export const PrimaryButton: React.FCC<PrimaryButtonProps> = ({ children }) => {
	return (
		<BaseButton
			bg={"gradientBrightOrange"}
			_active={{
				bg: "gradientBrightOrange",
				transform: `scale(0.98)`,
			}}
			_hover={{ bg: "gradientBrightOrange", opacity: 0.8 }}
			transition={"all 0.3s ease"}
		>
			{children}
		</BaseButton>
	)
}
