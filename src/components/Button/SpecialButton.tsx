import { BaseButton, BaseButtonProps } from "@/components/Button/BaseButton"
import React from "react"

type SpecialButtonProps = {} & BaseButtonProps

export const SpecialButton: React.FC<SpecialButtonProps> = ({
	children,
	...props
}) => {
	return (
		<BaseButton
			bg={"specialBtnGradient"}
			transition={"all 0.3s ease"}
			_active={{
				bg: "specialBtnGradient",
			}}
			_hover={{
				bg: "specialBtnGradient",
				opacity: 0.8,
			}}
			_disabled={{
				opacity: 0.2,
				bg: "specialBtnGradient",
			}}
			_loading={{
				bg: "rgba(104, 106, 110, 0.4)",
				opacity: 1,
			}}
			{...props}
		>
			{children}
		</BaseButton>
	)
}
