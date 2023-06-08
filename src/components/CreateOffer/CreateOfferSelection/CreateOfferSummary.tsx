import React from 'react'

type CreateOfferSummaryProps = {}

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
