import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { Text } from "@/components/Text/Text"
import { useTranslation } from "@/localization/l10n"
import React from "react"
import { H1 } from "@/components/Text/Typography"
import { MPOffersListHydrator } from "@/components/OffersList/MPOffersListHydrator"
import { Flex } from "@chakra-ui/react"

type MPOffersListProps = {}

export const MPOffersList: React.FC<MPOffersListProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<PageWrapper
			header={
				<PageHeader
					createOfferBtn={{
						label: l10n.marketplace.header.offerBtn,
						onClick: () => {},
					}}
					subTitle={l10n.marketplace.header.subitle}
					title={l10n.marketplace.header.title}
				/>
			}
		>
			<Flex grow={1} w={"full"}>
				<MPOffersListHydrator />
			</Flex>
		</PageWrapper>
	)
}
