import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
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
						borderBottom
						titleLink={<HowToUseBtn />}
						createOfferBtn={{
							label: "CREATE NEW",
							onClick: () => {},
						}}
					/>
				</>
			}
		>
			<Flex grow={1}></Flex>
		</PageWrapper>
	)
}
