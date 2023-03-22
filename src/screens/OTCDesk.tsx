import { HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { CreateOfferHeader } from '@/components/CreateOfferHeader/CreateOfferHeader'
import { ScreenWrapper } from '@/components/ScreenWrapper/ScreenWrapper'
import { useTranslation } from '@/localization/l10n'
import { links } from '@/utils/links'
import { BaseText } from '@/components/Text/BaseText'
import { HowToUseBtn } from '@/components/HowToUseBtn/HowToUseBtn'
import { openExternalUrl } from '@/utils/utils'
import { OTCDeskContent } from '@/components/OTCDesk/OTCDeskContent'

type OTCDeskProps = {}

export const OTCDesk: React.FC<OTCDeskProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			top={
				<CreateOfferHeader
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
					subTitle={<BaseText>{l10n.OTCDesk.subTitle}</BaseText>}
					title={l10n.OTCDesk.title}
				/>
			}
		>
			<OTCDeskContent />
		</ScreenWrapper>
	)
}
