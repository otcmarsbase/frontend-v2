import { queries } from "@/utils/chakra"
import {
	Divider,
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
	sortingFn?: SortFunction<Row>
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
			cardComponentsView: CellViewObject<Key>
		) => React.ReactNode
		// row?: (row: Row) => React.ReactNode
	}
	// onSortColumnsChange?: (sortColumns: SortColumn<Key>) => void
	/** The getter should return a unique key for each row */
	rowKeyGetter: (row: Row) => string
}

export type SortColumn<Key extends string> = Record<Key, SortOrder>

type SortFunction<Row> = (a: Row, b: Row) => number

type SortOrder = "asc" | "desc" | "none"

export const DataGrid = <Row extends object, Key extends string>(
	props: DataGridProps<Row, Key>
) => {
	const isDesktop = useMedia(queries.lg)
	const hasMobileViewRenderer = Boolean(props.renderers?.card)

	const [data, setData] = React.useState<Row[]>(props.rows)
	const [sortColumns, setSortColumns] = React.useState<
		Record<Key, SortOrder>
	>(() =>
		props.columns.reduce<any>((acc, x) => {
			acc[x.key] = "none"
			return acc
		}, {})
	)

	const handleSort =
		(order: SortOrder) => (sort: SortFunction<Row>, key: Key) => {
			setSortColumns((p) => {
				return { ...p, [key]: order }
			})
			setData((p) => p.slice().sort(orders[order](sort)))
		}
	return (
		<TableContainer width={{ sm: "100%", lg: "auto" }}>
			<TableWrapper width={"100%"} variant="unstyled">
				{isDesktop || !hasMobileViewRenderer ? (
					<DesktopTableView
						{...props}
						rows={data}
						sort={(sort, key) =>
							handleSort(reverseOrder[sortColumns[key]])(
								sort,
								key
							)
						}
					/>
				) : (
					<MobileTableView {...props} rows={data} />
				)}
			</TableWrapper>
		</TableContainer>
	)
}

const desc = <A, B>(f: (a: A, b: B) => number) => {
	return (a: A, b: B) => f(a, b) * -1
}

const asc = <A, B>(f: (a: A, b: B) => number) => {
	return (a: A, b: B) => f(a, b)
}

const reverseOrder = {
	asc: "desc",
	desc: "asc",
	none: "asc",
} as const
const orders = {
	desc,
	asc,
	none: asc,
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
	props: DataGridProps<Row, Key> & {
		sort: (sortFn: SortFunction<Row>, key: Key) => void
	}
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
				{props.columns.map((x) => {
					const sortFn = x.sortingFn
					return (
						<Th>
							<div
								onClick={
									sortFn
										? () => props.sort(sortFn, x.key)
										: () => {}
								}
							>
								{columnRender(x.name, x.key)}
							</div>
						</Th>
					)
				})}
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

const TableHeading: React.FCC = ({ children }) => {
	return <Thead>{children}</Thead>
}

const TableBody: React.FCC = ({ children }) => {
	return <Tbody>{children}</Tbody>
}

export const DataGridCardDivider: React.FC = () => {
	return <Divider className="bg-dark-700 my-3" />
}
