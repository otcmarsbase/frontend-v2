import { InputName } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { Paper } from "@/components/Paper/Paper"
import { LeadText } from "@/components/Text/Typography"
import { Tumbler } from "@/components/Tumbler/Tumbler"
import { Flex, VStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferSelectonSecondProps = {}

export const CreateOfferSelectonSecond: React.FC<
	CreateOfferSelectonSecondProps
> = (props) => {
	return (
		<VStack alignItems={"start"} w={"full"}>
			<FormControlHeader
				title={"Parameters"}
				subtitle="Choose the best strategy for exchanging your funds"
			/>
			<Flex gap={8} w={"100%"}>
				<Flex direction={"column"} w={"50%"} gap={"28px"}>
					<VStack alignItems={"flex-start"}>
						<InputName text="Offer type" />
						<Tumbler
							onSelect={() => {}}
							options={["Static", "Dynamic"]}
							selectedIdx={0}
						/>
					</VStack>
					<Paper className="bg-dark-200">
						<LeadText>
							All redeemed parts of offer remain in the smart
							contract until the offer is completed
						</LeadText>
					</Paper>
					<VStack alignItems={"flex-start"}>
						<InputName text="Offer condition" />
						<Tumbler
							onSelect={() => {}}
							options={["Discount", "Premium"]}
							selectedIdx={0}
						/>
					</VStack>
				</Flex>
				<Flex direction={"column"} w={"50%"}></Flex>
			</Flex>
		</VStack>
	)
}
