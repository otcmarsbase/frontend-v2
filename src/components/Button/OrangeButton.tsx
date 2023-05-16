import { BaseButton, BaseButtonProps } from "@/components/Button/BaseButton"
import React from "react"

type OrangeButtonProps = {} & BaseButtonProps

export const OrangeButton: React.FCC<OrangeButtonProps> = ({
	children,
	...props
}) => {
	return (
		<BaseButton
			bg={"orange.500"}
			_active={{
				bg: "orange.300",
			}}
			_hover={{
				bg: "orange.300",
				opacity: 0.8,
			}}
			_disabled={{
				opacity: 0.2,
				bg: "dark.200",
			}}
			_loading={{
				opacity: 1,
			}}
			{...props}
		>
			{children}
		</BaseButton>
	)
}
