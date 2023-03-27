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
	return <Thead>{children}</Thead>
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
			<Td>1</Td>
			<Td>2</Td>
			<Td>3</Td>
			<Td>4</Td>
			<Td>5</Td>
			<Td>6</Td>
			<Td>7</Td>
			<Td>8</Td>
		</Tr>
	)
}
