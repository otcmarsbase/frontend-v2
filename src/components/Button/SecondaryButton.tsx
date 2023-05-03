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
				borderColor: "orange.500",
				color: "orange.500",
				bg: "transparent",
			}}
			_disabled={{
				borderColor: "dark.300",
				color: "unset",
				bg: "transparent",
			}}
			_loading={{
				borderColor: "dark.300",
				color: "unset",
				bg: "transparent",
				opacity: 1,
			}}
			{...props}
		>
			{children}
		</BaseButton>
	)
}
