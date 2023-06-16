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
		<Flex
			direction={"column"}
			flexGrow={"1"}
			bg={"rgba(37, 38, 40, 0.4)"}
			p={"12px 18px"}
			borderRadius={"16px"}
			minW={"220px"}
			overflowX={"auto"}
		>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex alignItems={"center"} gap={"4px"}>
					<Text size="promo-12" color="orange.500">
						{props.name}
					</Text>
					<InfoTooltip size="s" infoText={props.tooltipText} />
				</Flex>
				<Image boxSize={"32px"} src={props.icon} />
			</Flex>
			<Flex mb={"8px"}>
				<Text fontWeight={"bold"} size="21">
					{props.value}
				</Text>
			</Flex>
			<Text size="12" color={"gray"}>
				{props.description}
			</Text>
		</Flex>
	)
}
