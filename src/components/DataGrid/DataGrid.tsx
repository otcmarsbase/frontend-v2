import React from "react"

type Column<Row extends object, Key extends keyof Row> = {
	name: string
	width?: string
	key: Key
}

type DataGridProps<Row extends object> = {
	columns: Column<Row, keyof Row>[]
	rows: Row[]
	renderers?: {
		column?: (row: Row, name: string) => React.ReactNode
		card?: (row: Row) => React.ReactNode
		// row?: (row: Row) => React.ReactNode
	}
	sortColumns?: SortColumn<keyof Row>[]
	onSortColumnsChange?: (sortColumns: SortColumn<keyof Row>[]) => void
}

type SortColumn<Key> = {
	readonly columnKey: Key
	readonly direction: SortDirection
}
type SortDirection = "ASC" | "DESC"

export const DataGrid = <Row extends object>(props: DataGridProps<Row>) => {
	return <div></div>
}
