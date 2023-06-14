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
import { Flex } from "@chakra-ui/react"
import React from "react"

type DashboardBidsProps = {}

export const DashboardBids: React.FC<DashboardBidsProps> = ({}) => {
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
						<DasboardTabs name="bids" />
					</PageContainer>
					<HeaderBottomLine />
				</>
			}
		>
			<Flex grow={1}></Flex>
		</PageWrapper>
	)
}
