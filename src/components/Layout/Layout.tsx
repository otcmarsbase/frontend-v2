import { Container, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

type LayoutProps = {
	top?: React.ReactNode
}

export const Layout: React.FCC<LayoutProps> = ({ top, children }) => {
	return (
		<PageWrapper>
			<Container paddingX={'20px'}>{children}</Container>
		</PageWrapper>
	)
}

const PageWrapper: React.FCC = ({ children }) => {
	return (
		<VStack minHeight={'100vh'} height={'100%'}>
			{children}
		</VStack>
	)
}

const Header: React.FCC = ({ children }) => {
	return <VStack></VStack>
}
