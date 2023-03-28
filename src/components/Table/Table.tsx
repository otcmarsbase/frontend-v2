import { queries } from '@/utils/chakra'
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
export const Table: React.FCC<TableProps> = (props) => {
	const [isDesktop] = useMediaQuery([queries.lg])

	return (
		<TableContainer width={{ sm: '100%', lg: 'auto' }}>
			<TableWrapper width={'100%'} variant="unstyled">
				{isDesktop ? (
					<DesktopTableView {...props} />
				) : (
					<MobileTableView {...props} />
				)}
			</TableWrapper>
		</TableContainer>
	)
}
const MobileTableView: React.FCC<TableProps> = ({ body, header }) => {
	return (
		<TableCtx.Provider value={{ variant: 'card' }}>
			<Grid gridTemplateColumns={{ md: '1fr 1fr', sm: '1fr' }} gap={"15px"}>
				{body}
			</Grid>
		</TableCtx.Provider>
	)
}
const DesktopTableView: React.FCC<TableProps> = ({ body, header }) => {
	return (
		<TableCtx.Provider value={{ variant: 'row' }}>
			<TableHeading>{header}</TableHeading>
			<TableBody>{body}</TableBody>
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
		<VStack  border="1px solid red">
			{data.map((x) => (
				<HStack w={'100%'} justifyContent={'space-between'}>
					<Box>{x.title}</Box>
					<Box>{x.value}</Box>
				</HStack>
			))}
		</VStack>
	)
}
