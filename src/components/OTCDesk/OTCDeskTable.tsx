import { Modal } from '@/components/Modal/Modal'
import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import {
	Table,
	TableBody,
	TableBodyItem,
	TableHeading,
	TableSortButton,
} from '@/components/Table/Table'
import { WelcomePopup } from '@/components/WelcomePopup/WelcomePopup'

type OTCDeskTableProps = {}

export const OTCDeskTable: React.FC<OTCDeskTableProps> = ({}) => {
	return (
		<Table>
			{/* <Modal
				onClose={() => {}}
				renderContent={(close) => <WelcomePopup onClose={close} />}
			/> */}
			<TableHeading>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					From
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					To
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Offer mode
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Available size
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Discount
				</TableSortButton>
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Deadline
				</TableSortButton>
			</TableHeading>
			<TableBody>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 21232132132132121321 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: 'Deadline', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
				<TableBodyItem
					data={[
						{ title: 'From', value: 1 },
						{ title: 'To', value: 2 },
						{ title: 'Offer mode', value: 3 },
						{ title: 'Available size', value: 4 },
						{ title: 'Discount', value: 5 },
						{ title: 'Deadline', value: 6 },
						{ title: '', value: 7 },
					]}
				></TableBodyItem>
			</TableBody>
		</Table>
	)
}
