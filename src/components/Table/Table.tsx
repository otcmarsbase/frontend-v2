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

type TableProps = {}

export const Table: React.FCC<TableProps> = ({ children }) => {
	return (
		<TableContainer>
			<TableWrapper variant="unstyled">{children}</TableWrapper>
		</TableContainer>
	)
}

export const TableHeading: React.FCC = ({ children }) => {
	return <div className='flex'>{children}</div>
}

export const TableBody: React.FCC = ({ children }) => {
	return <div className='flex'>{children}</div>
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
	const [isDesktop] = useMediaQuery('(min-width: 1200px)')
	if (isDesktop)
		return (
			<div className='table-cell'>
				{data.map((x) => (
					<Td>{x.value}</Td>
				))}
			</div>
		)
	return <TableCard data={data} />
}

const TableCard: React.FC<{ data: TableData[] }> = ({ data }) => {
	return (
		<VStack flexBasis={"50%"}>
			{data.map((x) => (
				<HStack w={"100%"} justifyContent={'space-between'}>
					<Box>{x.title}</Box>
					<Box>{x.value}</Box>
				</HStack>
			))}
		</VStack>
	)
}
