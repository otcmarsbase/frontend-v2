import { CreateOfferStep } from "@/components/CreateOffer/CreateOfferStep/CreateOfferStep"
import { CreateOfferSelection } from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelection"
import { CreateOfferDetails } from "@/components/CreateOffer/CreateOfferDetails/CreateOfferDetails"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { Text } from "@/components/Text/Text"
import { useTranslation } from "@/localization/l10n"
import { Box, Flex, HStack } from "@chakra-ui/react"
import React from "react"
import { H1, H3 } from "@/components/Text/Typography"
import { CreatedFinished } from "@/components/CreateOffer/CreatedFinished"

type CreateOfferNewProps = {}

export const CreateOfferNew: React.FC<CreateOfferNewProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<PageWrapper
			header={
				<>
					<PageHeader
						subTitle={l10n.OTCDesk.subTitle}
						title={l10n.OTCDesk.title}
						borderBottom
					>
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
					</PageHeader>
				</>
			}
		>
			<div className="max-w-[790px] mx-auto w-full pt-12 lg:pt-16">
				{/* <CreateOfferDetails /> */}
				<CreateOfferSelection />
				{/* <CreatedFinished /> */}
				{/* <LoadingCreated  status="success"/> */}
			</div>
		</PageWrapper>
	)
}
