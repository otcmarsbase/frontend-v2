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
	Flex,
} from '@chakra-ui/react'
import React from 'react'

type TableProps = {
	header: React.ReactNode[]
	body: React.ReactNode[]
}

const TableCtx = React.createContext<{ variant: 'row' | 'card' }>({
	variant: 'row',
})
export const Table: React.FCC<TableProps> = ({ children, body, header }) => {
	const [isDesktop, isTablet] = useMediaQuery([
		'(min-width: 1200px)',
		'(min-width: 768px)',
	])

	let BodyContainer = (b: any) => <TableBody>{b}</TableBody>
	if (!isDesktop) {
		BodyContainer = (b: any) => (
			<Grid gridTemplateColumns={isTablet ? '1fr 1fr' : '1fr'}>{b}</Grid>
		)
	}
	return (
		<TableCtx.Provider value={{ variant: isDesktop ? 'row' : 'card' }}>
			<TableContainer width={!isDesktop ? '100%' : 'auto'}>
				<TableWrapper width={'100%'} variant="unstyled">
					{isDesktop && <TableHeading>{header}</TableHeading>}
					{BodyContainer(body)}
				</TableWrapper>
			</TableContainer>
		</TableCtx.Provider>
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
	const ctx = React.useContext(TableCtx)
	if (ctx.variant === 'row')
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
