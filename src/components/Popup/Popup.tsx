import React from "react"
import { Box } from "@chakra-ui/react"
import clsx from "clsx"

type PopupProps = {
	contentClassName?: string
	containerClassName?: string
}

export const Popup: React.FCC<PopupProps> = ({
	children,
	contentClassName,
}) => {
	return (
		<Box
			className={clsx(
				`md:bg-popup md:rounded-2xl p-[3px] mx-auto`,
				contentClassName
			)}
		>
			{children}
		</Box>
	)
}

export const GradientPopup: React.FCC<PopupProps> = ({
	children,
	contentClassName,
	containerClassName,
}) => {
	return (
		<Box
			className={clsx(
				`bg-popup rounded-[19px] p-[3px] mx-auto w-max`,
				containerClassName
			)}
		>
			<Box className={clsx("rounded-[16px]", contentClassName)}>
				{children}
			</Box>
		</Box>
	)
}
