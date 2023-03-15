import { Link } from '@chakra-ui/react'
import React from 'react'
import { CreateOfferHeader } from '../components/CreateOfferHeader/CreateOfferHeader'
import { MainScreenWrapper } from '../components/MainScreenWrapper/MainScreenWrapper'
import { useTranslation } from '../localization/l10n'

type MainProps = {}

export const Main: React.FC<MainProps> = ({}) => {
	const l10n = useTranslation()
	return (
		<MainScreenWrapper
			top={
				<CreateOfferHeader
					titleLink={<Link>{l10n.OTCDesk.howToUse}</Link>}
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
		</MainScreenWrapper>
	)
}
