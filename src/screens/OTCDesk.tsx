import { HStack, Link } from "@chakra-ui/react"
import React from "react"
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
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
				<ScreenHeader
					borderBottom
					titleLink={
						<HowToUseBtn
							label={l10n.OTCDesk.howToUse}
							onClick={() =>
								openExternalUrl(links.general.howToUse)
							}
						/>
					}
					createOfferBtn={{
						label: l10n.OTCDesk.createOfferLabel,
						onClick: () => {},
					}}
					subTitle={
						<Text size="14" className="text-gray">
							{l10n.OTCDesk.subTitle}
						</Text>
					}
					title={<H1>{l10n.OTCDesk.title}</H1>}
				/>
			}
		>
			<OTCDeskContent />
		</PageWrapper>
	)
}
