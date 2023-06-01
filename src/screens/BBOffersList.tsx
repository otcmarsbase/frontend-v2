import { BBOffersListHydrator } from "@/components/OffersList/BBOffersListHydrator"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { useTranslation } from "@/localization/l10n"
import React from "react"

type BBOffersListProps = {}

export const BBOffersList: React.FC<BBOffersListProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<PageWrapper
			header={
				<PageHeader
					createOfferBtn={{
						label: "CREATE BEST BIT AUCTION",
						onClick: () => {},
					}}
					subTitle={
						"Trade tokens in the OTC auction market with the most competitive offers or arrange escrow deals with your own counterparties."
					}
					title={"Best Bid Auctions & Escrow"}
				/>
			}
		>
			<BBOffersListHydrator />
		</PageWrapper>
	)
}
