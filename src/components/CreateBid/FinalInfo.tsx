import { FromCurrToCurr } from "@/components/FromCurrToCurr/FromCurrToCurr"
import { LeadText } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidFinalInfoProps = {}

export const CreateBidFinalInfo: React.FC<CreateBidFinalInfoProps> = (
	props
) => {
	return (
		<Flex bg={"rgba(36, 37, 45, 0.3)"} borderRadius={"12px"} w={"50%"}>
			<Flex px={"24px"}>
				<FromCurrToCurr
					size="m"
					fromIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
					toIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
				>
					<LeadText fontWeight={"semibold"}>ATOM/USDC</LeadText>
				</FromCurrToCurr>
			</Flex>
		</Flex>
	)
}
