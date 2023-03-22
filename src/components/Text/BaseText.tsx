import { Text } from '@chakra-ui/react'
import React from 'react'

type BaseTextProps = {} & React.ComponentProps<typeof Text>

export const BaseText: React.FCC<BaseTextProps> = ({ children }) => {
	return <Text>{children}</Text>
}
