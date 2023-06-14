import { DasboardTabs } from "@/components/Dashboard/Tabs"
import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import {
	HeaderBottomLine,
	PageHeader,
} from "@/components/PageHeader/PageHeader"
import {
	PageContainer,
	PageWrapper,
} from "@/components/PageWrapper/PageWrapper"
import { useTranslation } from "@/localization/l10n"
import { Flex } from "@chakra-ui/react"
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
						titleRight={<HowToUseBtn />}
						createOfferBtn={{
							label: "CREATE NEW",
							onClick: () => {},
						}}
					></PageHeader>
					<PageContainer>
						<DasboardTabs name="offers" />
					</PageContainer>
					<HeaderBottomLine />
				</>
			}
		>
			<Flex grow={1}></Flex>
		</PageWrapper>
	)
}
