import { BaseButton, BaseButtonProps } from "@/components/Button/BaseButton"
import React from "react"

type SecondaryButtonProps = {} & BaseButtonProps

export const SecondaryButton: React.FCC<SecondaryButtonProps> = ({
	children,
	...props
}) => {
	return (
		<BaseButton
			bg={"transparent"}
			borderWidth={"2px"}
			borderColor={"dark.300"}
			_active={{
				bg: "transparent",
			}}
			_hover={{
				
				bg: "transparent",
			}}
			_disabled={{
				bg: "transparent",
			}}
			_loading={{
				bg: "transparent",
				opacity: 1,
			}}
			{...props}
		>
			{children}
		</BaseButton>
	)
}
