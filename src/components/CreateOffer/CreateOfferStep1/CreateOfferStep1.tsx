import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { GradientPopup } from "@/components/Popup/Popup"
import { BaseText } from "@/components/Text/BaseText"
import { useTranslation } from "@/localization/l10n"
import { links } from "@/utils/links"
import { openExternalUrl } from "@/utils/utils"
import { HStack, VStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferStep1Props = {}

export const CreateOfferStep1: React.FC<CreateOfferStep1Props> = ({}) => {
	const l10n = useTranslation()
	return (
		<GradientPopup className="w-max ">
			<VStack>
				<HStack>
					<BaseText>Specify offer details</BaseText>
					<HowToUseBtn
						label={l10n.OTCDesk.howToUse}
						onClick={() => openExternalUrl(links.general.howToUse)}
					/>
				</HStack>
				<BaseText>
					What asset do you have and what do you want to get for it
				</BaseText>
			</VStack>
		</GradientPopup>
	)
}
