import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { useTranslation } from "@/localization/l10n"
import { openExternalUrl } from "@/utils/utils"
import React from "react"

type DashboardOffersProps = {}

export const DashboardOffers: React.FC<DashboardOffersProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<PageWrapper
			header={
				<>
					<PageHeader
						subTitle={""}
						title={"My dashboard"}
						borderBottom
						titleLink={<HowToUseBtn />}
						createOfferBtn={{
							label: "CREATE NEW",
							onClick: () => {},
						}}
					/>
				</>
			}
		></PageWrapper>
	)
}
