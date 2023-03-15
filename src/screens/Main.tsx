import { Link } from '@chakra-ui/react'
import React from 'react'
import { CreateOfferHeader } from '@/components/CreateOfferHeader/CreateOfferHeader'
import { ScreenWrapper } from '@/components/ScreenWrapper/ScreenWrapper'
import { useTranslation } from '@/localization/l10n'
import { links } from '@/utils/links'

type MainProps = {}

export const Main: React.FC<MainProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<ScreenWrapper
			top={
				<CreateOfferHeader
					titleLink={<Link href={links.general.howToUse}>{l10n.OTCDesk.howToUse}</Link>}
					createOfferBtn={{
						label: l10n.OTCDesk.createOfferLabel,
						onClick: () => {},
					}}
					subTitle={l10n.OTCDesk.subTitle}
					title={l10n.OTCDesk.title}
				/>
			}
		>
			HELLO WORLD
		</ScreenWrapper>
	)
}
