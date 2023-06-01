import { BackButton } from "@/components/BackButton/BackButton"
import { SpecialButton } from "@/components/Button/SpecialButton"
import { Container } from "@/components/PageWrapper/PageWrapper"
import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"
import { Text } from "@/components/Text/Text"
import clsx from "clsx"
import React from "react"
import { H1, LeadText } from "@/components/Text/Typography"

type PageHeaderProps = {
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

export const PageHeaderGeneric: React.FC<PageHeaderProps> = ({
	subTitle,
	title,
	titleLink,
	createOfferBtn,
	backButton,
	borderBottom,
}) => {
	return (
		<Flex
			className={clsx(
				borderBottom && "border-dark-800 border-solid border-b-[1px]",
				"w-full py-6 lg:py-8"
			)}
		>
			<Container>
				<Flex
					justifyContent={"space-between"}
					width={"100%"}
					flexWrap={"wrap"}
				>
					<Flex direction={"column"} alignItems={"flex-start"}>
						{backButton && <BackButton icon {...backButton} />}
						<HStack>
							<Box>{title}</Box>
							<Box>{titleLink}</Box>
						</HStack>
						{subTitle}
					</Flex>
					{createOfferBtn && (
						<SpecialButton
							px={"10"}
							maxWidth={"max-content"}
							size="s"
							fontSize="promo-12"
							onClick={createOfferBtn.onClick}
						>
							{createOfferBtn.label}
						</SpecialButton>
					)}
				</Flex>
			</Container>
		</Flex>
	)
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<PageHeaderGeneric
			{...props}
			subTitle={<LeadText color={"gray"}>{props.subTitle}</LeadText>}
			title={<H1>{props.title}</H1>}
		/>
	)
}
