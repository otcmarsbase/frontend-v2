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
			
		</VStack>
	)
}
