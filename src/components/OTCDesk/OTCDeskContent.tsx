import { OTCDeskFilterPanel } from "@/components/OTCDesk/OTCDeskFilterPanel"
import { OTCSearch } from "@/components/OTCDesk/OTCSearch"
import { HStack } from "@chakra-ui/react"
import React from "react"
import { OTCDeskTable } from "./OTCDeskTable"

type OTCDeskContentProps = {}

export const OTCDeskContent: React.FC<OTCDeskContentProps> = ({}) => {
	const [val, setVal] = React.useState<any>("")
	return (
		<HStack justifyContent={"space-between"} width={"100%"}>
			<OTCDeskFilterPanel
				onClearFilterClick={() => {}}
				title="SORT OTC DEALS BY CATEGORY"
			/>
			<OTCSearch
				options={[
					{
						value: "eth",
						currencyImg: "",
						fullName: "Etherium",
						id: 1,
						label: "asd",
						shortName: "asdadssd",
					},
					{
						value: "btc",
						currencyImg: "",
						fullName: "Bitcoin",
						id: 2,
						label: "asd",
						shortName: "asdadssd",
					},
				]}
				isClearable
				inputValue={val}
				onInputChange={(e) => setVal(e)}
				onChange={(e) => {
					console.log("value", e)
				}}
			/>
			<OTCDeskTable />
		</HStack>
	)
}
