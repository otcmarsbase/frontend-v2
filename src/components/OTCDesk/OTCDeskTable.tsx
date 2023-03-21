import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Table, TableBody, TableBodyItem, TableHeading, TableSortButton } from '../Table/Table'

type OTCDeskTableProps = {}

export const OTCDeskTable: React.FC<OTCDeskTableProps> = ({}) => {
	return (
		<Table>
			<TableHeading>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					hello
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					world
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					lol
				</TableSortButton>
			</TableHeading>
			<TableBody>
                <TableBodyItem>hello</TableBodyItem>
                <TableBodyItem>hello</TableBodyItem>
                <TableBodyItem>hello</TableBodyItem>
            </TableBody>
		</Table>
	)
}
