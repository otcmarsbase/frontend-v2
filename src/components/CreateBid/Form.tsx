import { StepDisplay } from "@/components/CreateOffer/CreateOfferDetails/CreateOfferDetails"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidFormProps = {}

export const CreateBidForm: React.FC<CreateBidFormProps> = (props) => {
	return (
		<Flex direction={"column"} w={"50%"}>
			<FormControlHeader
				title={"Bid conditions"}
				subtitle="Enter parameters for your bid"
				titleLink={<HowToUseBtn />}
			/>
		</Flex>
	)
}
