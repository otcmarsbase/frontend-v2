import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"

type CreateOfferStepProps = {
	num: number
	title: React.ReactNode
	text: React.ReactNode
	isActive?: boolean
}

export const CreateOfferStep: React.FC<CreateOfferStepProps> = ({
	num,
	text,
	title,
	isActive,
}) => {
	return (
		<Grid
			autoFlow={"column"}
			gap={4}
			className={clsx(
				"p-6 rounded-2xl basis-[340px] items-start justify-start ml-3",
				isActive && "bg-[rgba(37,38,40,.5)]"
			)}
		>
			<Box
				className={clsx(
					"h-9 w-9 rounded-full flex justify-center items-center bg-dark300 text-black",
					isActive && "bg-mainGradient text-white"
				)}
			>
				<Text>{num}</Text>
			</Box>
			<Box className={clsx(!isActive && "opacity-40")}>
				<Text>{title}</Text>
				<Text>{text}</Text>
			</Box>
		</Grid>
	)
}
