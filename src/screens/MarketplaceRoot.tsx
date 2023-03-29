import { CreateOfferHeader } from "@/components/CreateOfferHeader/CreateOfferHeader"
import { MPContent } from "@/components/Marketplace/MPContent"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { BaseText } from "@/components/Text/BaseText"
import { useTranslation } from "@/localization/l10n"
import React from "react"

type MarketplaceRootProps = {}

export const MarketplaceRoot: React.FC<MarketplaceRootProps> = ({}) => {
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
			<MPContent />
		</ScreenWrapper>
	)
}
