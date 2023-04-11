import React from "react"
import { Box } from "@chakra-ui/react"
import clsx from "clsx"

type PopupProps = {
	className?: string
}

export const Popup: React.FCC<PopupProps> = ({ children, className }) => {
	return (
		<Box
			className={clsx(
				`md:bg-popup md:rounded-2xl p-[3px] mx-auto`,
				className
			)}
		>
			{children}
		</Box>
	)
}

export const GradientPopup: React.FCC<PopupProps> = ({
	children,
	className,
}) => {
	return (
		<Box className={clsx(`bg-popup rounded-[19px] p-[3px] mx-auto w-max`)}>
			<Box className={clsx("rounded-[16px] py-[30px] px-[20px]", className)}>
				{children}
			</Box>
		</Box>
	)
}
