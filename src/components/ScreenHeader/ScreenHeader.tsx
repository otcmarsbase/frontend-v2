import { BackButton } from "@/components/BackButton/BackButton"
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react"
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
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
	subTitle,
	title,
	titleLink,
	createOfferBtn,
	backButton,
}) => {
	return (
		<HStack justifyContent={"space-between"} width={"100%"}>
			<VStack alignItems={"flex-start"}>
				{backButton && <BackButton {...backButton} />}
				<HStack>
					<Box>{title}</Box>
					<Box>{titleLink}</Box>
				</HStack>
				{subTitle}
			</VStack>
			{createOfferBtn && (
				<Button onClick={createOfferBtn.onClick}>
					{createOfferBtn.label}
				</Button>
			)}
		</HStack>
	)
}

