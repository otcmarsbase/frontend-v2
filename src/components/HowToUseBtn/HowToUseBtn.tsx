import React from "react"
import { QuestionIcon } from "@/icons"
import { HStack } from "@chakra-ui/react"
import { LeadText } from "@/components/Text/Typography"
import { Clickable } from "@/components/Clickable/Clickable"
import { useTranslation } from "@/localization/l10n"
import { openExternalUrl } from "@/utils/utils"
import { links } from "@/utils/links"

type HowToUseBtnProps = {}

export const HowToUseBtn: React.FC<HowToUseBtnProps> = (props) => {
	const l10n = useTranslation()
	return (
		<Clickable onClick={() => openExternalUrl(links.general.howToUse)}>
			<HStack>
				<QuestionIcon />
				<LeadText color={"orange.500"}>
					{l10n.OTCDesk.howToUse}
				</LeadText>
			</HStack>
		</Clickable>
	)
}
