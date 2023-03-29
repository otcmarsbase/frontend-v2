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
						label: l10n.OTCDesk.createOfferLabel,
						onClick: () => {},
					}}
					subTitle={<BaseText>{l10n.OTCDesk.subTitle}</BaseText>}
					title={l10n.OTCDesk.title}
				/>
			}
		>
			<MPContent />
		</ScreenWrapper>
	)
}
