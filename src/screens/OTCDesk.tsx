import { HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { CreateOfferHeader } from '@/components/CreateOfferHeader/CreateOfferHeader'
import { ScreenWrapper } from '@/components/ScreenWrapper/ScreenWrapper'
import { useTranslation } from '@/localization/l10n'
import { links } from '@/utils/links'
import { HowToUseBtn } from '../components/HowToUseBtn/HowToUseBtn'

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
								window.open(links.general.howToUse, '_blank')
							}
						/>
					}
					createOfferBtn={{
						label: l10n.OTCDesk.createOfferLabel,
						onClick: () => {},
					}}
					subTitle={<Text>{l10n.OTCDesk.subTitle}</Text>}
					title={l10n.OTCDesk.title}
				/>
			}
		>
			HELLO WORLD
		</ScreenWrapper>
	)
}
