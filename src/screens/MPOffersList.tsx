import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { MPOffersTable } from "@/components/Marketplace/MPOffersTable"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { Text } from "@/components/Text/Text"
import { useTranslation } from "@/localization/l10n"
import React from "react"
import { H1 } from "@/components/Text/Typography"

type MPOffersListProps = {}

export const MPOffersList: React.FC<MPOffersListProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			header={
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
						<H1>
							{l10n.marketplace.header.title}
						</H1>
					}
				/>
			}
		>
			<MPOffersTable />
		</ScreenWrapper>
	)
}
