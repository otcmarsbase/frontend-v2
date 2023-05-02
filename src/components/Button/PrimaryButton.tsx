import { BaseButton, BaseButtonProps } from "@/components/Button/BaseButton"
import { SystemStyleObject } from "@chakra-ui/react"
import React from "react"

type PrimaryButtonProps = {} & BaseButtonProps

export const PrimaryButton: React.FCC<PrimaryButtonProps> = ({
	children,
	...props
}) => {
	const styles = React.useMemo(() => {
		const obj: BaseButtonProps = {
			_active: {
				bg: "gradientBrightOrange",
				transform: `scale(0.98)`,
			},
			_hover: {
				bg: "gradientBrightOrange",
				opacity: 0.8,
			},
			_disabled: {
				opacity: 0.2,
				bg: "dark.200",
			},
			_loading: {
				bg: "rgba(104, 106, 110, 0.4)",
				opacity: 1,
			},
		}
		return obj
	}, [])

	return (
		<BaseButton
			bg={"gradientBrightOrange"}
			transition={"all 0.3s ease"}
			{...styles}
			{...props}
		>
			{children}
		</BaseButton>
	)
}
