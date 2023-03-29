import { CreateOfferHeader } from "@/components/CreateOfferHeader/CreateOfferHeader"
import { MPOffersTable } from "@/components/Marketplace/MPOffersTable"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { BaseText } from "@/components/Text/BaseText"
import { useTranslation } from "@/localization/l10n"
import React from "react"

type MPOffersListProps = {}

export const MPOffersList: React.FC<MPOffersListProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			top={
				<CreateOfferHeader
					createOfferBtn={{
						label: l10n.marketplace.header.offerBtn,
						onClick: () => {},
					}}
					subTitle={
						<BaseText>{l10n.marketplace.header.subitle}</BaseText>
					}
					title={l10n.marketplace.header.title}
				/>
			}
		>
			<MPOffersTable />
		</ScreenWrapper>
	)
}
