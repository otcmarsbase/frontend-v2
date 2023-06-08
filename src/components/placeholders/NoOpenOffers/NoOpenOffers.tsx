import { Center, VStack } from "@chakra-ui/react"
import { H3, LeadText } from "@/components/Text/Typography"
import { NoOffersIconRaw } from "@/icons"

export const NoOpenOffersPlaceholder: React.FCC = ({ children }) => (
	<Center mt="5em">
		<VStack textAlign="center" h="100%">
			<img src={NoOffersIconRaw} alt="" />
			<H3>No open offers</H3>
			<VStack gap="16px">
				<LeadText color="grey">
					Create an offer and be the first on Mars
				</LeadText>
				{children}
			</VStack>
		</VStack>
	</Center>
)
