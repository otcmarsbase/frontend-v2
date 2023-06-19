import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { Input } from "@/components/Input/Input"
import { SwapHorizontalIcon } from "@/icons"
import { useTranslation } from "@/localization/l10n"
import { links } from "@/utils/links"
import { openExternalUrl } from "@/utils/utils"
import { Box, Flex, Grid, VStack } from "@chakra-ui/react"
import React from "react"
import { FormControlHeader } from "@/components/FormControlHeader/FormControlHeader"
import { TokenSelectorDropdown } from "@/components/TokenSelect/TokenSelect"
import { LeadText } from "@/components/Text/Typography"

type CreateOfferSelectonFirstProps = {}

export const CreateOfferSelectonFirst: React.FC<
	CreateOfferSelectonFirstProps
> = (props) => {
	const l10n = useTranslation()
	return (
		<VStack alignItems={"start"} w={"full"}>
			<FormControlHeader
				title={"Specify offer details"}
				subtitle="What asset do you have and what do you want to get for it"
				titleLink={<HowToUseBtn />}
			/>
			<SelectWrapper>
				<ControlContainer
					titleLeft={<InputName text="From" tooltipText="From kek" />}
					bottomLeft={<InputNote text="hello world" />}
				>
					<TokenSelectorDropdown
						tokens={[
							{
								name: "BNB",
								symbol: "BNB",
								iconUrl:
									"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
								address: "0x0000000",
								decimals: 18,
							},
							{
								name: "Ethereum",
								symbol: "ETH",
								iconUrl:
									"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
								address: "0x0000000",
								decimals: 18,
							},
						]}
						onTokenDeselected={() => console.log("DESELECT")}
						onTokenSelected={(token) =>
							console.log("SELECT", token)
						}
						tokenSelectedIdx={0}
						disabled={false}
					/>
				</ControlContainer>
				<SwapWrapper>
					<SwapHorizontalIcon />
				</SwapWrapper>
				<ControlContainer
					titleLeft={<InputName text="From" tooltipText="From kek" />}
					bottomLeft={<InputNote text="hello world" />}
				>
					<TokenSelectorDropdown
						tokens={[
							{
								name: "BNB",
								symbol: "BNB",
								iconUrl:
									"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
								address: "0x0000000",
								decimals: 18,
							},
							{
								name: "Ethereum",
								symbol: "ETH",
								iconUrl:
									"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
								address: "0x0000000",
								decimals: 18,
							},
						]}
						onTokenDeselected={() => console.log("DESELECT")}
						onTokenSelected={(token) =>
							console.log("SELECT", token)
						}
						tokenSelectedIdx={0}
						disabled={false}
					/>
				</ControlContainer>
			</SelectWrapper>
			<ControlContainer
				titleLeft={
					<InputName text="Offer size" tooltipText="From kek" />
				}
				bottomLeft={<InputNote text="hello world" />}
				titleRight={<InputNote text="Balance: 0.0000000" />}
			>
				<Input />
			</ControlContainer>
		</VStack>
	)
}

export const InputName: React.FC<{
	tooltipText?: string
	text: string
	tooltipSize?: React.ComponentProps<typeof InfoTooltip>["size"]
}> = ({ text, tooltipText, tooltipSize }) => {
	return (
		<Grid templateColumns={"auto auto"} gap={"4px"} alignItems="center">
			<LeadText className={"text-white"}>{text}</LeadText>
			{tooltipText && (
				<InfoTooltip
					height={"10px"}
					width={"10px"}
					infoText={tooltipText}
					display="flex"
					size={tooltipSize}
				/>
			)}
		</Grid>
	)
}

export const InputNote: React.FC<{ text: string }> = ({ text }) => {
	return (
		<LeadText className="text-gray" fontSize={{ base: "12px", md: "14px" }}>
			{text}
		</LeadText>
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

type ControlContainerProps = {
	titleLeft?: React.ReactNode
	titleRight?: React.ReactNode
	bottomLeft?: React.ReactNode
	bottomRight?: React.ReactNode
}
export const ControlContainer: React.FCC<ControlContainerProps> = ({
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
