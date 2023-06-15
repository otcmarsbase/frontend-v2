import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidOfferInfoCardProps = {
	name: string
	value: string
	description: string
	tooltipText: string
	icon: string
}

export const CreateBidOfferInfoCard: React.FC<CreateBidOfferInfoCardProps> = (
	props
) => {
		<Flex direction={"column"}>
				<Flex alignItems={"center"} >
					<Text size="promo-12" color="orange.500">
						{props.name}
					</Text>
					<InfoTooltip size="s" infoText={props.tooltipText} />
				</Flex>
				<Image boxSize={"32px"} src={props.icon} />
}
