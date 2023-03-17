import { Button, Checkbox, HStack, Text, VStack } from '@chakra-ui/react'
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
		value: 'Low Liquid - Top 50 - 100',
		label: 'Low Liquid - Top 50 - 100',
	},
]
export const OTCDeskFilterPanel: React.FC<OTCDeskFilterPanelProps> = ({
	title,
}) => {
	return (
		<VStack>
			<Text>{title}</Text>
			<Select
				options={tokenRanks}
				styles={{ container: (base) => ({ ...base, width: '100%' }) }}
			/>
			<HStack>
				<Checkbox size="md" colorScheme={'orange'}>
					Static
				</Checkbox>
				<Checkbox size="md" colorScheme={'orange'}>
					Dymanic
				</Checkbox>
			</HStack>
			<Button>Clean the filter</Button>
		</VStack>
	)
}
