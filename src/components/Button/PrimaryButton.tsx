import { BaseButton, BaseButtonProps } from "@/components/Button/BaseButton"
import { SystemStyleObject } from "@chakra-ui/react"
import React from "react"

type PrimaryButtonProps = {} & BaseButtonProps

export const PrimaryButton: React.FCC<PrimaryButtonProps> = ({
	children,
	...props
}) => {
	return (
		<BaseButton
			bg={"gradientBrightOrange"}
			transition={"all 0.3s ease"}
			_active={{
				bg: "gradientBrightOrange",
			}}
			_hover={{
				bg: "gradientBrightOrange",
				opacity: 0.8,
			}}
			_disabled={{
				opacity: 0.2,
				bg: "dark.200",
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
