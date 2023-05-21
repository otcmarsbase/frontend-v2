import { queries } from "@/utils/chakra"
import {
	Grid,
	TableContainer,
	Table as TableWrapper,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react"
import { useMedia } from "react-use"
import React from "react"

type Column<Row extends object, Key extends string> = {
	name: string
	width?: string
	/** The a unique key for each column */
	key: Key
	cellRender: (row: Row) => React.ReactNode
	/** cardRender is used for card view, if not passed, uses cellRender instead */
	cardRender?: (row: Row) => React.ReactNode
	sortingFn?: (a: Row, b: Row) => number
}

type CellViewObject<Key extends string> = Record<
	Key,
	{ view: React.ReactNode; name: string }
>
type DataGridProps<Row extends object, Key extends string> = {
	columns: Column<Row, Key>[]
	rows: Row[]
	renderers?: {
		column?: (name: string, key?: Key) => React.ReactNode
		card?: (
			row: Row,
			cellViewObject: CellViewObject<Key>
		) => React.ReactNode
		// row?: (row: Row) => React.ReactNode
	}
	sortColumns?: SortColumn[]
	onSortColumnsChange?: (sortColumns: SortColumn[]) => void
	/** The getter should return a unique key for each row */
	rowKeyGetter: (row: Row) => string
}

export type SortColumn = {
	columnKey: string
	direction: SortDirection
}
type SortOrder = "asc" | "desc"

export const DataGrid = <Row extends object, Key extends string>(
	props: DataGridProps<Row, Key>
) => {
	const isDesktop = useMedia(queries.lg)
	const hasMobileViewRenderer = Boolean(props.renderers?.card)

	const [data, setData] = React.useState<Row[]>(props.rows)
	const [sortColumns, setSortColumns] = React.useState<SortColumn[]>([])

	return (
		<TableContainer width={{ sm: "100%", lg: "auto" }}>
			<TableWrapper width={"100%"} variant="unstyled">
				{isDesktop || !hasMobileViewRenderer ? (
					<DesktopTableView {...props} rows={data} />
				) : (
					<MobileTableView {...props} rows={data} />
				)}
			</TableWrapper>
		</TableContainer>
	)
}

const MobileTableView = <Row extends object, Key extends string>(
	props: DataGridProps<Row, Key>
) => {
	const cellViewObject = (row: Row) =>
		props.columns.reduce((acc, x) => {
			//@ts-ignore
			acc[x.key] = {
				view: x.cardRender ? x.cardRender(row) : x.cellRender(row),
				name: x.name,
			}
			return acc
		}, {}) as CellViewObject<Key>
	return (
		<div>
			<Grid
				gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
				gap={"15px"}
			>
				{props.rows.map((row) => {
					return props.renderers!.card!(row, cellViewObject(row))
				})}
			</Grid>
		</div>
	)
}
const DesktopTableView = <Row extends object, Key extends string>(
	props: DataGridProps<Row, Key>
) => {
	const columnRender =
		props.renderers?.column ||
		((name: string, row?: Key) => <th>{name}</th>)
	return (
		<div>
			<colgroup>
				{props.columns.map((x, i) => (
					<col style={{ width: x.width || "auto" }} />
				))}
			</colgroup>
			<TableHeading>
				{props.columns.map((x) => (
					<Th>{columnRender(x.name, x.key)}</Th>
				))}
			</TableHeading>
			<TableBody>
				{props.rows.map((row) => (
					<Tr key={props.rowKeyGetter(row)}>
						{props.columns.map((x) => (
							<Td py={"0.5"}>{x.cellRender(row)}</Td>
						))}
					</Tr>
				))}
			</TableBody>
		</div>
	)
}

export const TableHeading: React.FCC = ({ children }) => {
	return <Thead>{children}</Thead>
}

export const TableBody: React.FCC = ({ children }) => {
	return <Tbody>{children}</Tbody>
}
