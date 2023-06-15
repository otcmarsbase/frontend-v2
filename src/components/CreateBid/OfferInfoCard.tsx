import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { Text } from "@/components/Text/Text"
import { Flex, Image } from "@chakra-ui/react"
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
	return (
		<Flex direction={"column"}>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex alignItems={"center"} gap={"4px"}>
					<Text size="promo-12" color="orange.500">
						{props.name}
					</Text>
					<InfoTooltip size="s" infoText={props.tooltipText} />
				</Flex>
				<Image boxSize={"32px"} src={props.icon} />
			</Flex>
		</Flex>
	)
}
