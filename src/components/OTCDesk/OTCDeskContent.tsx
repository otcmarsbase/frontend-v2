import { OTCDeskFilterPanel } from '@/components/OTCDesk/OTCDeskFilterPanel'
import { HStack } from '@chakra-ui/react'
import React from 'react'
import { OTCDeskTable } from './OTCDeskTable'

type OTCDeskContentProps = {}

export const OTCDeskContent: React.FC<OTCDeskContentProps> = ({}) => {
	const [val, setVal] = React.useState<any>("")
	return (
		<HStack justifyContent={'space-between'} width={'100%'}>
			<OTCDeskFilterPanel
				onClearFilterClick={() => {}}
				title="SORT OTC DEALS BY CATEGORY"
			/>
			<OTCDeskTable />
		</HStack>
	)
}
