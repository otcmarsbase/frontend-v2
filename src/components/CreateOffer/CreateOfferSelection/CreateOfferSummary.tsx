import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { LeadText } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateOfferSummaryProps = {}

export const CreateOfferSummary: React.FC<CreateOfferSummaryProps> = (
	props
) => {
	const hasEnoughTokens = true
	return (
		<Flex direction={"column"} className="gap-6">
			
			
		</Flex>
	)
}

type SummaryCardProps = {
	rows: { title: string; value: React.ReactNode }[]
}
const SummaryCard: React.FC<SummaryCardProps> = (props) => {
	return (
		<Flex
			direction={"column"}
			bg={"#1A1216"}
			borderRadius={"8px"}
			p={"16px"}
			gap={"16px"}
		>
			{props.rows.map((row) => (
				<Flex
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
					className="gap-4"
				>
					<LeadText fontWeight={"semibold"}>{row.title}</LeadText>
					<LeadText fontWeight={"semibold"}>{row.value}</LeadText>
				</Flex>
			))}
		</Flex>
	)
}
