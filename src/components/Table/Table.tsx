import {
	Thead,
	Tr,
	TableContainer,
	Table as TableWrapper,
	Tbody,
	Th,
	Td,
	useMediaQuery,
	VStack,
	Box,
	HStack,
	Grid,
} from '@chakra-ui/react'
import React from 'react'

type TableProps = {
	header: React.ReactNode[]
	body: React.ReactNode[]
}

export const Table: React.FCC<TableProps> = ({ children, body, header }) => {
	const [isDesktop] = useMediaQuery('(min-width: 1200px)')

	return (
		<TableContainer>
			<TableWrapper variant="unstyled">
				<TableHeading>{header}</TableHeading>
				<TableBody>{body}</TableBody>
			</TableWrapper>
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

type TableData = {
	title: string
	value: React.ReactNode
}
export const TableBodyItem: React.FC<{ data: TableData[] }> = ({ data }) => {
	if (isDesktop)
		return (
			<Tr>
				{data.map((x) => (
					<Td>{x.value}</Td>
				))}
			</Tr>
		)
	return <TableCard data={data} />
}

const TableCard: React.FC<{ data: TableData[] }> = ({ data }) => {
	return (
		<VStack>
			{data.map((x) => (
				<HStack w={'100%'} justifyContent={'space-between'}>
					<Box>{x.title}</Box>
					<Box>{x.value}</Box>
				</HStack>
			))}
		</VStack>
	)
}
