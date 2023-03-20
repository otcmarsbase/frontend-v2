import {
	Thead,
	Tr,
	TableContainer,
	Table as TableWrapper,
	Tbody,
	Th,
	Td,
} from '@chakra-ui/react'
import React from 'react'

type TableProps = {}

export const Table: React.FCC<TableProps> = ({ children }) => {
	return (
		<TableContainer>
			<TableWrapper variant="unstyled">{children}</TableWrapper>
		</TableContainer>
	)
}

export const TableHeading: React.FCC = ({ children }) => {
	return (
		<Thead>
			<Tr>{children}</Tr>
		</Thead>
	)
}

export const TableBody: React.FCC = ({ children }) => {
	return <Tbody>{children}</Tbody>
}

type TableSortButtonProps = {
	sorted: boolean
	reversed: boolean
	onClick: () => void
}
export const TableSortButton: React.FCC<TableSortButtonProps> = ({
	children,
}) => {
	return <Th>{children}</Th>
}

export const TableBodyItem: React.FCC = ({ children }) => {
	return (
		<Tr>
			<Td>{children}</Td>
		</Tr>
	)
}
