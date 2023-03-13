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
