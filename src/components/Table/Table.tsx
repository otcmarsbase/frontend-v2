import { queries } from "@/utils/chakra"
import {
	Thead,
	Tr,
	TableContainer,
	Table as TableWrapper,
	Tbody,
	Th,
	Td,
	useMediaQuery,
	Grid,
} from "@chakra-ui/react"
import React from "react"

type TableProps = {
	header: React.ReactNode[]
	body: React.ReactNode[]
}

const TableCtx = React.createContext<{ variant: "row" | "card" }>({
	variant: "row",
})
export const Table: React.FCC<TableProps> = (props) => {
	const [isDesktop] = useMediaQuery([queries.lg])

	return (
		<TableContainer width={{ sm: "100%", lg: "auto" }}>
			<TableWrapper width={"100%"} variant="unstyled">
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
		<TableCtx.Provider value={{ variant: "card" }}>
			<Grid
				gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
				gap={"15px"}
			>
				{body}
			</Grid>
		</TableCtx.Provider>
	)
}
const DesktopTableView: React.FCC<TableProps> = ({ body, header }) => {
	return (
		<TableCtx.Provider value={{ variant: "row" }}>
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

type RowData = React.ReactNode

export const TableRow: React.FC<{
	rowData: RowData[]
	cardData: React.ReactNode
}> = ({ rowData, cardData }) => {
	const ctx = React.useContext(TableCtx)
	if (ctx.variant === "row")
		return (
			<Tr>
				{rowData.map((x) => (
					<Td>{x}</Td>
				))}
			</Tr>
		)
	return <>{cardData}</>
}

type Order = "desc" | "asc"
type FullOrder = Order | "none"

export const useSortedData = <T extends object>(
	sortRules: { [field in keyof T]: (l: T, r: T) => number },
	rows: T[]
) => {
	const [data, setData] = React.useState<T[]>(rows)
	const [sortOrder, setSortOrder] = React.useState<{ [K in keyof T]: FullOrder }>(
		() =>
			Object.keys(sortRules).reduce((acc, x) => {
				acc[x] = "none"
				return acc
			}, {} as any)
	)

	const sort = (key: keyof T, order: Order) => {
		setSortOrder((p) => {
			return { ...p, [key]: order }
		})
		setData((p) => p.slice().sort(orders[order](sortRules[key])))
	}
	return { data, sort, sortOrder }
}

const desc = <A, B>(f: (a: A, b: B) => number) => {
	return (a: A, b: B) => f(a, b) * -1
}

const asc = <A, B>(f: (a: A, b: B) => number) => {
	return (a: A, b: B) => f(a, b)
}

const orders = {
	desc,
	asc,
}
