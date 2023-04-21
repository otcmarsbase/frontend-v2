import { BackButton } from "@/components/BackButton/BackButton"
import { ScreenContainer } from "@/components/ScreenWrapper/ScreenWrapper"
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import clsx from "clsx"
import React from "react"

type ScreenHeaderProps = {
	createOfferBtn?: {
		label: string
		onClick: () => void
	}
	backButton?: {
		label: string
		onClick: () => void
	}
	title: React.ReactNode
	subTitle: React.ReactNode
	titleLink?: React.ReactNode
	borderBottom?: boolean
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
	subTitle,
	title,
	titleLink,
	createOfferBtn,
	backButton,
	borderBottom,
}) => {
	return (
		<Box
			className={clsx(
				borderBottom && "border-dark-800 border-solid border-b-[1px]",
				"w-full"
			)}
		>
			<ScreenContainer>
				<Flex justifyContent={"space-between"} width={"100%"}>
					<Flex direction={"column"} alignItems={"flex-start"}>
						{backButton && <BackButton {...backButton} />}
						<HStack>
							<Box>{title}</Box>
							<Box>{titleLink}</Box>
						</HStack>
						{subTitle}
					</Flex>
					{createOfferBtn && (
						<Button onClick={createOfferBtn.onClick}>
							{createOfferBtn.label}
						</Button>
					)}
				</Flex>
			</ScreenContainer>
		</Box>
	)
}
