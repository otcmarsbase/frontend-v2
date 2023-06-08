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
			<SummaryCard
				rows={[
					{
						title: "Open price",
						value: "0.000525108",
					},
					{
						title: "Price with 0% discount",
						value: "0.000525108",
					},
					{
						title: "Will receive",
						value: "0.000525108 ETH",
					},
					{
						title: "Will receive in $",
						value: "$1.00",
					},
				]}
			/>
			<PrimaryButton disabled={hasEnoughTokens} size="lg">
				{(hasEnoughTokens
					? "Insufficient balance"
					: "Confirm offer"
				).toUpperCase()}
			</PrimaryButton>
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
