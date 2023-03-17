import { HStack } from '@chakra-ui/react'
import React from 'react'
import { OTCDeskFilterPanel } from './OTCDeskFilterPanel'

type OTCDeskContentProps = {}

export const OTCDeskContent: React.FC<OTCDeskContentProps> = ({}) => {
	return (
		<HStack justifyContent={'space-between'} width={'100%'}>
			<OTCDeskFilterPanel
				onClearFilterClick={() => {}}
				title="SORT OTC DEALS BY CATEGORY"
			/>
		</HStack>
	)
}
