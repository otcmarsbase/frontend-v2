import React from "react"
import { Center, VStack } from "@chakra-ui/react"
import { H3, LeadText } from "@/components/Text/Typography"
import { SorryNoDealsImg } from "@/Images"

type NoDealsProps = {}

export const NoDeals: React.FCC<NoDealsProps> = (props) => {
	return (
		<Center mt="5em">
			<VStack textAlign="center" h="100%">
				<SorryNoDealsImg />
				<H3>No open offers</H3>
				<VStack gap="16px">
					<LeadText color="grey">
						Create an offer and be the first on Mars
					</LeadText>
					{props.children}
				</VStack>
			</VStack>
		</Center>
	)
}
