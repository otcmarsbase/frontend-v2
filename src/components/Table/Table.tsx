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

const useSortedData = <
	T extends {},
	RowData,
	SortOrder extends { data: RowData; order: "asc" | "desc" }
>(
	sortRule: { [field in keyof T]: (l: T[field], r: T[field]) => number },
	rows: RowData[]
) => {
	const [data, setData] = React.useState<RowData[]>(rows)
	const [sortOrder, setSortOrder] = React.useState()

	const sort = (field: keyof T) =>
		setData((p) => p.sort((a, b) => sortRule[field](a, b)))
	return { data, sort, sortOrder }
}
