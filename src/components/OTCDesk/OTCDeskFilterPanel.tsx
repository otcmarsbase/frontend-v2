import { Text, VStack } from '@chakra-ui/react'
import { title } from 'process'
import Select from 'react-select'
import React from 'react'

type OTCDeskFilterPanelProps = {
	title: string
}

const tokenRanks = [
	{ value: 'High Liquid - Top 20', label: 'High Liquid - Top 20' },
	{
		value: 'Middle Liquid - Top 20 - 50',
		label: 'Middle Liquid - Top 20 - 50',
	},
	{
		value: 'Middle Liquid - Top 20 - 50',
		label: 'Middle Liquid - Top 20 - 50',
	},
]
export const OTCDeskFilterPanel: React.FC<OTCDeskFilterPanelProps> = ({}) => {
	return (
		<VStack>
			<Text>{title}</Text>
			<Select options={tokenRanks} />
		</VStack>
	)
}
