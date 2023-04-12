import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react"
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
			className={clsx(
				"p-6 rounded-2xl flex-shrink-0 flex-grow-0 basis-[320px] items-start justify-start gap-4 ",
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
			<HStack></HStack>
		</Grid>
	)
}

type SelectContainerProps = {
	titleLeft: React.ReactNode
	titleRight?: React.ReactNode
	bottomLeft?: React.ReactNode
	bottomRight?: React.ReactNode
}
const SelectContainer: React.FCC<SelectContainerProps> = ({
	children,
	titleLeft,
	bottomLeft,
	bottomRight,
	titleRight,
}) => {
	return (
		<Flex direction={"column"}>
			<Flex justifyContent={"space-between"}>
				<Box>{titleLeft}</Box>
				{titleRight && <Box>{titleRight}</Box>}
			</Flex>
			{children}
			<Flex justifyContent={"space-between"}>
				{bottomLeft && <Box>{bottomLeft}</Box>}
				{bottomRight && <Box>{bottomRight}</Box>}
			</Flex>
		</Flex>
	)
}
