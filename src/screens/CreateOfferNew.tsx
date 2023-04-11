import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader"
import { ScreenWrapper } from "@/components/ScreenWrapper/ScreenWrapper"
import { BaseText } from "@/components/Text/BaseText"
import { useTranslation } from "@/localization/l10n"
import { HStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferNewProps = {}

export const CreateOfferNew: React.FC<CreateOfferNewProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			top={
				<>
					<ScreenHeader
						subTitle={<BaseText>{l10n.OTCDesk.subTitle}</BaseText>}
						title={l10n.OTCDesk.title}
					/>
					<HStack>
						<div>hello 1</div>
                        <div>hello 2</div>
                        <div>hello 3</div>

					</HStack>
				</>
			}
		></ScreenWrapper>
	)
}
