import { CreateOfferStep } from "@/components/CreateOffer/CreateOfferStep/CreateOfferStep"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { BaseText } from "@/components/Text/BaseText"
import { useTranslation } from "@/localization/l10n"
import { Box, Flex, HStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferNewProps = {}

export const CreateOfferNew: React.FC<CreateOfferNewProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			top={
				<>
					<ScreenHeader
						subTitle={<BaseText>{l10n.OTCDesk.subTitle}</BaseText>}
						title={l10n.OTCDesk.title}
					/>

					<Box overflow={"scroll"} w={"full"}>
						<Flex alignItems={"stretch"}>
							<CreateOfferStep
								isActive
								num={1}
								text="Set suitable conditions"
								title="Parameter selection"
							/>
							<CreateOfferStep
								num={2}
								text="Verify that all parameters are set the way you want them"
								title="Check offer details"
							/>
							<CreateOfferStep
								num={3}
								text="Send the offer to the market"
								title="Publication"
							/>
						</Flex>
					</Box>
				</>
			}
		></ScreenWrapper>
	)
}
