import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { MPOffersTable } from "@/components/Marketplace/MPOffersTable"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Text } from "@/components/Text/Text"
import { useTranslation } from "@/localization/l10n"
import React from "react"

type MPOffersListProps = {}

export const MPOffersList: React.FC<MPOffersListProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			top={
				<ScreenHeader
					createOfferBtn={{
						label: l10n.marketplace.header.offerBtn,
						onClick: () => {},
					}}
					subTitle={
						<Text size="14" className="text-gray">
							{l10n.marketplace.header.subitle}
						</Text>
					}
					title={
						<Text size="promo-32">
							{l10n.marketplace.header.title}
						</Text>
					}
				/>
			}
		>
			<MPOffersTable />
		</ScreenWrapper>
	)
}
