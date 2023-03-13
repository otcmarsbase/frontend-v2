import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type FooterProps = {
	title: React.ReactNode
	description: React.ReactNode
	socialLinks: React.ReactNode
	copyRight: React.ReactNode
	menuLinks: React.ReactNode[]
}

export const Footer: React.FC<FooterProps> = ({
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
					<Text>MARSBASE OTC DESK</Text>
					<Text maxWidth={'308px'} align="left">
						A perfect place for crypto whales and retail investors
						to trade large volumes of any digital asset with no
						price slippage or market impact.
					</Text>
				</VStack>
			</HStack>
			<VStack>
				{socialLinks}
				{copyRight}
			</VStack>
		</HStack>
	)
}
