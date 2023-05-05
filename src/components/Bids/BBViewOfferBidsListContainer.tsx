import { ViewOfferBidsTable } from "@/components/Bids/ViewOfferBidsTable"
import { SpecialButton } from "@/components/Button/SpecialButton"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { Flex } from "@chakra-ui/react"
import React from "react"

type BBViewOfferBidsListContainerProps = {}

export const BBViewOfferBidsListContainer: React.FC<
	BBViewOfferBidsListContainerProps
> = ({}) => {
	return (
		<Flex flexDirection={"column"}>
			<Flex justifyContent={"space-between"}>
				<FormControlHeader title="Bids" subtitle="2 bids total" />
				<SpecialButton maxWidth={"max-content"}>
					PLACE BID
				</SpecialButton>
			</Flex>
			<ViewOfferBidsTable />
		</Flex>
	)
}
