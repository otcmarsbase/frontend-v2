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
		column?: (row: Row) => React.ReactNode
        card?: (row: Row) => React.ReactNode
		// row?: (row: Row) => React.ReactNode
	}
}

type SortColumn<Key> = {
	readonly columnKey: Key
	readonly direction: SortDirection
}
type SortDirection = "ASC" | "DESC"

export const DataGrid = (props: any) => {
	return <div></div>
}
