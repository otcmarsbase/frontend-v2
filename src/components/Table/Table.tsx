import {
	Thead,
	Tr,
	TableContainer,
	Table as T,
	Tbody,
	Th,
	Td,
} from '@chakra-ui/react'
import React from 'react'

type TableProps = {}

export const Table: React.FCC<TableProps> = ({ children }) => {
	return (
		<TableContainer>
			<T variant="unstyled">{children}</T>
		</TableContainer>
	)
}
}