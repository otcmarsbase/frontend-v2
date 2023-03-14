import {
	Box,
	Button,
	Grid,
	GridItem,
	HStack,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from '../../localization/l10n'
import { links } from '../../utils/links'

type FooterProps = {
	title: React.ReactNode
	description: React.ReactNode
	socialLinks: React.ReactNode
	copyRight: React.ReactNode
	menuLinks: React.ReactNode[]
}

const FooterLayout: React.FC<FooterProps> = ({
	copyRight,
	description,
	socialLinks,
	title,
	menuLinks,
}) => {
	return (
		<HStack width={'100%'} justifyContent={'space-between'}>
			<HStack>
				<Grid
					templateColumns="repeat(2, 1fr)"
					templateRows={'repeat(4, 1fr)'}
					gap={2}
				>
					{menuLinks}
				</Grid>
				<VStack>
					{title}
					{description}
				</VStack>
			</HStack>
			<VStack>
				{socialLinks}
				{copyRight}
			</VStack>
		</HStack>
	)
}
const footerLinks = Object.entries(links.footer)
export const Footer: React.FC = () => {
	const l10n = useTranslation()
	return (
		<FooterLayout
			copyRight={
				<>
					commit: {process.env.VITE_GIT_COMMIT} version:
					{process.env.VITE_APP_VERSION}
					<br />© All Rights Reserved MarsBase,
					{new Date().getFullYear()}
				</>
			}
			description={
				<Text maxWidth={'308px'} align="left">
					A perfect place for crypto whales and retail investors to
					trade large volumes of any digital asset with no price
					slippage or market impact.
				</Text>
			}
			menuLinks={footerLinks.map(([key, href]) => (
				<Link href={href} target={'_blank'}>
					{l10n.footer[key as keyof typeof l10n.footer]}
				</Link>
			))}
			socialLinks={null}
			title={<Text>MARSBASE OTC DESK</Text>}
		/>
	)
}
