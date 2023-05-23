import { queries } from "@/utils/chakra"
import {
	Grid,
	TableContainer,
	Table as TableWrapper,
	Tbody,
	Td,
	Thead,
	Tr,
} from "@chakra-ui/react"
import { useMedia } from "react-use"
import React from "react"


type Column<Row extends object, Key extends string> = {
	name: string
	width?: string
	key?: Key
	cellRender: (row: Row) => React.ReactNode
    extraProps?: (row: Row) => Record<string, any>
}

type DataGridProps<Row extends object, Key extends string> = {
	columns: Column<Row, Key>[]
	rows: Row[]
	renderers?: {
		column?: (name: string, key?: Key) => React.ReactNode
		card?: (row: Row) => React.ReactNode
		// row?: (row: Row) => React.ReactNode
	}
	sortColumns?: SortColumn<Key>[]
	onSortColumnsChange?: (sortColumns: SortColumn<Key>[]) => void
    /** The getter should return a unique key for each row */
    rowKeyGetter: (row: Row) => string;
}

type SortColumn<Key> = {
	columnKey: Key
	direction: SortDirection
}
type SortDirection = "ASC" | "DESC"

export const DataGrid = <Row extends object, Key extends string>(props: DataGridProps<Row, Key>) => {
	const isDesktop = useMedia(queries.lg)
	const hasMobileViewRenderer = Boolean(props.renderers?.card)

	const [data, setData] = React.useState<Row[]>(props.rows)
	const [sortColumns, setSortColumns] = React.useState<
		SortColumn<keyof Row>[]
	>([])
	// const [filterColumns, setFilterColumns] = React.useState<FilterColumn<keyof Row>[]>([])

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

const MobileTableView = <Row extends object, Key extends string>(props: DataGridProps<Row, Key>) => {
	return (
		<div>
			<Grid
				gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
				gap={"15px"}
			>
				{props.rows.map((row) => {
					return props.renderers!.card!(row)
				})}
			</Grid>
		</div>
	)
}
const DesktopTableView = <Row extends object, Key extends string>(props: DataGridProps<Row, Key>) => {
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
				{props.columns.map((x) => columnRender(x.name, x.key))}
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
