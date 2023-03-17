import { Button, Checkbox, HStack, Text, VStack } from '@chakra-ui/react'
import Select from 'react-select'
import React from 'react'
import { useTranslation } from '../../localization/l10n'

type OTCDeskFilterPanelProps = {
	title: string
	onClearFilterClick: () => void
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
	onClearFilterClick,
}) => {
	const l10n = useTranslation()
	return (
		<VStack alignItems={'flex-start'}>
			<Text>{title}</Text>
			<Select
				options={tokenRanks}
				styles={{ container: (base) => ({ ...base, width: '100%' }) }}
			/>
			<Text>Offer type</Text>
			<HStack>
				<Checkbox size="md" colorScheme={'orange'}>
					Static
				</Checkbox>
				<Checkbox size="md" colorScheme={'orange'}>
					Dymanic
				</Checkbox>
			</HStack>
			<Button onClick={onClearFilterClick}>Clean the filter</Button>
			<VStack>
				{Object.values(l10n.OTCDesk.emoji).map((x) => (
					<Text>{x}</Text>
				))}
			</VStack>
		</VStack>
	)
}
