import { CreateBidFinalInfo } from "@/components/CreateBid/FinalInfo"
import { CreateBidForm } from "@/components/CreateBid/Form"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidHydratorProps = {}

export const CreateBidHydrator: React.FCC<CreateBidHydratorProps> = (props) => {
	
	return (
		<Flex gap={"32px"} alignItems={"start"}>
			<CreateBidForm />
			<CreateBidFinalInfo />
		</Flex>
	)
}
