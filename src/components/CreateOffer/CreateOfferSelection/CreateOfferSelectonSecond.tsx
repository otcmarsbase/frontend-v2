import {
	ControlContainer,
	InputName,
} from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { Input } from "@/components/Input/Input"
import { Paper } from "@/components/Paper/Paper"
import { LeadText } from "@/components/Text/Typography"
import { Tumbler } from "@/components/Tumbler/Tumbler"
import { CalendarIcon, CalendarIconRaw, TimepickerIcon } from "@/icons"
import { Flex, VStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferSelectonSecondProps = {}

export const CreateOfferSelectonSecond: React.FC<
	CreateOfferSelectonSecondProps
> = (props) => {
	const [calendarVisible, setCalendarVisible] = React.useState(false)
	return (
		<VStack alignItems={"start"} w={"full"} my={"40px"}>
			<FormControlHeader
				title={"Parameters"}
				subtitle="Choose the best strategy for exchanging your funds"
			/>
			<Flex gap={8} w={"100%"}>
				<Flex direction={"column"} w={"50%"} gap={"28px"}>
					<Flex direction={"column"} alignItems={"flex-start"}>
						<InputName text="Offer type" />
						<Tumbler
							onSelect={() => {}}
							options={["Static", "Dynamic"]}
							selectedIdx={0}
						/>
					</Flex>
					<Paper className="bg-dark-200">
						<LeadText>
							All redeemed parts of offer remain in the smart
							contract until the offer is completed
						</LeadText>
					</Paper>
					<Flex direction={"column"} alignItems={"flex-start"}>
						<InputName text="Offer condition" />
						<Tumbler
							onSelect={() => {}}
							options={["Discount", "Premium"]}
							selectedIdx={0}
						/>
					</Flex>
				</Flex>
				<Flex direction={"column"} w={"50%"} gap={"24px"}>
					<Flex gap={"20px"}>
						<ControlContainer
							titleLeft={
								<InputName
									text="Date"
									tooltipText="Select the execution date"
								/>
							}
						>
							<Input
								value={new Date().toLocaleDateString()}
								onChange={() => false}
								leftComponent={<CalendarIcon />}
							/>
						</ControlContainer>

						<ControlContainer
							titleLeft={
								<InputName
									text="Time"
									tooltipText="Select the execution time"
								/>
							}
						>
							<Input
								value={"12:00"}
								disabled
								onChange={() => false}
								leftComponent={<TimepickerIcon />}
							/>
						</ControlContainer>
					</Flex>
					<ControlContainer
						titleLeft={
							<InputName
								text="Min bid part"
								tooltipText="Indicate the minimum bid that participants can place to your offer"
							/>
						}
					>
						<Input
							rightComponent={
								<LeadText color={"orange.500"}>%</LeadText>
							}
						/>
					</ControlContainer>
					<ControlContainer
						titleLeft={
							<InputName
								text="Enter discount"
								tooltipText="Specify the size of the discount/premium"
							/>
						}
					>
						<Input
							rightComponent={
								<LeadText color={"orange.500"}>%</LeadText>
							}
						/>
					</ControlContainer>
				</Flex>
			</Flex>
		</VStack>
	)
}
