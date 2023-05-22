import React from "react"

type DataGridProps = {}

export const DataGrid: React.FC<DataGridProps> = ({}) => {
	return <div></div>
}

type Column<Row extends object, Key extends keyof Row> = {
	name: string
	width?: string
	key: Key
}

type SortColumn<Key> = {
	readonly columnKey: Key
	readonly direction: SortDirection
}
type SortDirection = "ASC" | "DESC"

