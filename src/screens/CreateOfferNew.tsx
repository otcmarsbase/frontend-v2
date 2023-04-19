import { CreateOfferStep } from "@/components/CreateOffer/CreateOfferStep/CreateOfferStep"
import { CreateOfferSelection } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelection"
import {
	CreateOfferDetails,
	LoadingCreated,
} from "@/components/CreateOffer/CreateOfferDetails/CreateOfferDetails"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Text } from "@/components/Text/Text"
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
						subTitle={<Text>{l10n.OTCDesk.subTitle}</Text>}
						title={l10n.OTCDesk.title}
						borderBottom
					/>

					<Box overflow={"scroll"} w={"full"}>
						<Flex alignItems={"stretch"} w="full">
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
		>
			<div className="max-w-[790px] mx-auto">
				<CreateOfferDetails />
				{/* <CreateOfferStep1 /> */}
				{/* <LoadingCreated progress={0}/> */}
			</div>
		</ScreenWrapper>
	)
}
