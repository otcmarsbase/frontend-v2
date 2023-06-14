import { HStack, Link } from "@chakra-ui/react"
import React from "react"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { useTranslation } from "@/localization/l10n"
import { links } from "@/utils/links"
import { Text } from "@/components/Text/Text"
import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { openExternalUrl } from "@/utils/utils"
import { OTCDeskContent } from "@/components/OTCDesk/OTCDeskContent"
import { H1 } from "@/components/Text/Typography"

type OTCDeskProps = {}

export const OTCDesk: React.FC<OTCDeskProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<PageWrapper
			header={
				<PageHeader
					borderBottom
					titleRight={<HowToUseBtn />}
					createOfferBtn={{
						label: l10n.OTCDesk.createOfferLabel,
						onClick: () => {},
					}}
					subTitle={l10n.OTCDesk.subTitle}
					title={l10n.OTCDesk.title}
				/>
			}
		>
			<OTCDeskContent />
		</PageWrapper>
	)
}
