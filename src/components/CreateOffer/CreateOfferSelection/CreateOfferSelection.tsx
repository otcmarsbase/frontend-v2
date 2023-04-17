import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { Input } from "@/components/Input/Input"
import { GradientPopup } from "@/components/Popup/Popup"
import { SelectV2 } from "@/components/SelectV2/SelectV2"
import { BaseText } from "@/components/Text/BaseText"
import { SwapHorizontalIcon } from "@/icons"
import { useTranslation } from "@/localization/l10n"
import { queries } from "@/utils/chakra"
import { links } from "@/utils/links"
import { Config } from "tailwindcss"
import { openExternalUrl } from "@/utils/utils"
import { Box, Flex, Grid, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferSelectionProps = {}

export const CreateOfferSelection: React.FC<CreateOfferSelectionProps> = ({}) => {
	const l10n = useTranslation()
	const [from, setFrom] = React.useState()
	const [to, setTo] = React.useState()
	return (
		<GradientPopup
			contentClassName="bg-black px-6 py-8 w-full"
			containerClassName="w-full"
		>
			<VStack alignItems={"start"} w={"full"}>
				<HStack>
					<BaseText>Specify offer details</BaseText>
					<HowToUseBtn
						label={l10n.OTCDesk.howToUse}
						onClick={() => openExternalUrl(links.general.howToUse)}
					/>
				</HStack>
				<BaseText>
					What asset do you have and what do you want to get for it
				</BaseText>
				<SelectWrapper>
					<SelectContainer
						titleLeft={
							<InputName text="From" tooltipText="From kek" />
						}
						bottomLeft={<InputNote text="hello world" />}
					>
						<SelectV2
							isSearcheable
							options={[]}
							onChange={(t) => {
								console.log("change:", t)
							}}
						/>
					</SelectContainer>
					<SwapWrapper>
						<SwapHorizontalIcon />
					</SwapWrapper>
					<SelectContainer
						titleLeft={
							<InputName text="From" tooltipText="From kek" />
						}
						bottomLeft={<InputNote text="hello world" />}
					>
						<SelectV2
							isSearcheable
							options={[]}
							onChange={(t) => {
								console.log("change:", t)
							}}
						/>
					</SelectContainer>
				</SelectWrapper>
				<SelectContainer
					titleLeft={
						<InputName text="Offer size" tooltipText="From kek" />
					}
					bottomLeft={<InputNote text="hello world" />}
					titleRight={<InputNote text="Balance: 0.0000000" />}
				>
					<Input />
				</SelectContainer>
			</VStack>
		</GradientPopup>
	)
}

type SelectContainerProps = {
	titleLeft: React.ReactNode
	titleRight?: React.ReactNode
	bottomLeft?: React.ReactNode
	bottomRight?: React.ReactNode
}
const SelectContainer: React.FCC<SelectContainerProps> = ({
	children,
	titleLeft,
	bottomLeft,
	bottomRight,
	titleRight,
}) => {
	return (
		<Flex direction={"column"} w={"full"}>
			<Flex justifyContent={"space-between"}>
				<Box>{titleLeft}</Box>
				{titleRight && <Box>{titleRight}</Box>}
			</Flex>
			{children}
			<Flex justifyContent={"space-between"}>
				{bottomLeft && <Box>{bottomLeft}</Box>}
				{bottomRight && <Box>{bottomRight}</Box>}
			</Flex>
		</Flex>
	)
}

const InputName: React.FC<{
	tooltipText: string
	text: string
}> = ({ text, tooltipText }) => {
	return (
		<Grid templateColumns={"auto auto"} gap={"4px"} alignItems="center">
			<BaseText className={"text-white"}>{text}</BaseText>
			<InfoTooltip
				height={"10px"}
				width={"10px"}
				infoText={tooltipText}
				display="flex"
			/>
		</Grid>
	)
}

const InputNote: React.FC<{ text: string }> = ({ text }) => {
	return (
		<BaseText className="text-gray" fontSize={{ base: "12px", md: "14px" }}>
			{text}
		</BaseText>
	)
}

const SwapWrapper: React.FCC = ({ children }) => {
	return (
		<div className="w-12 h-12 bg-dark-800 flex justify-center items-center rounded-full justify-self-center sm:rotate-90 md:rotate-0">
			{children}
		</div>
	)
}
const SelectWrapper: React.FCC = ({ children }) => {
	return (
		<Grid
			gridTemplateColumns={{ sm: "none", md: "1fr auto 1fr" }}
			autoFlow={{ md: "column", sm: "row" }}
			className="sm:gap-2 md:gap-4 w-full items-center"
		>
			{children}
		</Grid>
	)
}
