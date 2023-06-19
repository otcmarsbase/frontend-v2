import { appRoutes } from "@/AppRoutes"
import { CreateBidHydrator } from "@/components/CreateBid/CreateBidHydrator"
import { CreateBidOfferInfoCard } from "@/components/CreateBid/OfferInfoCard"
import { FromCurrToCurr } from "@/components/FromCurrToCurr/FromCurrToCurr"
import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { OfferTypeIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { LeadText } from "@/components/Text/Typography"
import { WithTooltip } from "@/components/WithTooltip/WithTooltip"
import {
	BagIconRaw,
	BidsIconRaw,
	ClockIconRaw,
	LightningIconRaw,
	PercentIconRaw,
} from "@/icons"
import { ExtractParams } from "@/utils/routes"
import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import { useParams } from "react-router-dom"

type CreateBidProps = {}

const route = () => appRoutes["/offer/:id/create-bid"]()
type CreateBidParams = ExtractParams<ReturnType<typeof route>>

export const CreateBid: React.FC<CreateBidProps> = ({}) => {
	const params = useParams<CreateBidParams>()

	return (
		<PageWrapper
			header={
				<>
					<PageHeader
						subTitle={""}
						titleLeft={
							<FromCurrToCurr
								fromIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
								toIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
							/>
						}
						title={"Offer Details"}
						borderBottom
						titleRight={
							<Flex alignItems={"center"}>
								<OfferTypeIndicator type="dynamic" size="s" />
								<InfoTooltip
									size="s"
									infoText="All redeemed parts of offer are instantly sent to your wallet"
								/>
							</Flex>
						}
						right={
							<Flex>
								<LeadText color={"gray"} marginRight={"10px"}>
									Offer ID:
								</LeadText>
								<LeadText>{parseInt(params.id || "")}</LeadText>
							</Flex>
						}
					>
						<Box overflow={"scroll"} w={"full"}>
							<Flex
								alignItems={"stretch"}
								w="full"
								gridGap={"32px"}
							>
								<CreateBidOfferInfoCard
									name={"AVAILABLE"}
									value={"0.099 ATOM"}
									description={"≈$0.82"}
									tooltipText={
										"This shows the part of the whole offer that is sold at the moment."
									}
									icon={BagIconRaw}
								/>
								<CreateBidOfferInfoCard
									name={"OFFER PRICE"}
									value={"0.099 ATOM"}
									description={"≈$0.82"}
									tooltipText={
										"This tag indicates the price at the moment of the offer creation."
									}
									icon={LightningIconRaw}
								/>
								<CreateBidOfferInfoCard
									name={"DISCOUNT / PREMIUM"}
									value={"0.099 ATOM"}
									description={"≈$0.82"}
									tooltipText={
										"Premium price means that you are ready to offer a little extra to buy or sell an asset. Discount means you want to offer a lower price to buy or sell an asset."
									}
									icon={PercentIconRaw}
								/>
								<CreateBidOfferInfoCard
									name={"BIDS"}
									value={"0.099 ATOM"}
									description={"≈$0.82"}
									tooltipText={
										"The number of bids an offer received at this moment."
									}
									icon={BidsIconRaw}
								/>
								<CreateBidOfferInfoCard
									name={"DEADLINE"}
									value={"0.099 ATOM"}
									description={"≈$0.82"}
									tooltipText={
										"How much time is left until the offer expiration"
									}
									icon={ClockIconRaw}
								/>
							</Flex>
						</Box>
					</PageHeader>
				</>
			}
		>
			<div className="mx-auto w-full pt-6 lg:pt-8 flex-grow">
				<CreateBidHydrator />
			</div>
		</PageWrapper>
	)
}
