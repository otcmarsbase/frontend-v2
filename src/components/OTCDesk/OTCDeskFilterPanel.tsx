import { Button, Checkbox, HStack, Text, VStack } from '@chakra-ui/react'
import Select from 'react-select'
import React from 'react'
import { InfoIcon } from '@/icons'
import { BaseText } from '@/components/Text/BaseText'
import { useTranslation } from '@/localization/l10n'
import { WithTooltip } from '@/components/WithTooltip/WithTooltip'

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
			<BaseText>
				{title}{' '}
				<WithTooltip intoText={l10n.OTCDesk.sortPanel.titleTip}>
					<img src={InfoIcon}></img>
				</WithTooltip>
			</BaseText>
			<Select
				options={tokenRanks}
				styles={{ container: (base) => ({ ...base, width: '100%' }) }}
			/>
			<HStack alignItems={'center'}>
				<BaseText>Offer type </BaseText>
				<WithTooltip intoText={l10n.OTCDesk.sortPanel.offerTypeTip}>
					<img src={InfoIcon}></img>
				</WithTooltip>
			</HStack>
			<HStack>
				<Checkbox size="md" colorScheme={'orange'}>
					Static
				</Checkbox>
				<Checkbox size="md" colorScheme={'orange'}>
					Dymanic
				</Checkbox>
			</HStack>
			<Button onClick={onClearFilterClick}>Clean the filter</Button>
			<VStack alignItems={'flex-start'}>
				{Object.values(l10n.OTCDesk.emoji).map((x) => (
					<BaseText>{x}</BaseText>
				))}
			</VStack>
		</VStack>
	)
}
