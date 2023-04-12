import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { GradientPopup } from "@/components/Popup/Popup"
import { SelectV2 } from "@/components/SelectV2/SelectV2"
import { BaseText } from "@/components/Text/BaseText"
import { SwapHorizontalIcon } from "@/icons"
import { useTranslation } from "@/localization/l10n"
import { links } from "@/utils/links"
import { openExternalUrl } from "@/utils/utils"
import { Box, Flex, Grid, HStack, VStack } from "@chakra-ui/react"
import React from "react"

type CreateOfferStep1Props = {}

export const CreateOfferStep1: React.FC<CreateOfferStep1Props> = ({}) => {
	const l10n = useTranslation()
	return (
		<GradientPopup className="bg-black px-6 py-8">
			<VStack alignItems={"start"}>
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
				<Grid autoFlow={"column"} className="sm:gap-2 lg:gap-4 w-full items-center">
					<SelectContainer
						titleLeft={<InfoTooltip intoText="hello" />}
						bottomLeft={<InfoTooltip intoText="hello" />}
					>
						<SelectV2
							options={[]}
							onChange={(t) => {
								console.log("change:", t)
							}}

						/>
					</SelectContainer>
					<div className="w-12 h-12 bg-dark800 flex justify-center items-center rounded-full justify-self-center">
						<SwapHorizontalIcon />
					</div>
					<SelectContainer
						titleLeft={<InfoTooltip intoText="hello" />}
						bottomLeft={<InfoTooltip intoText="hello" />}
					>
						<SelectV2
							options={[]}
							onChange={(t) => {
								console.log("change:", t)
							}}
						/>
					</SelectContainer>
				</Grid>
				<SelectContainer
						titleLeft={<InfoTooltip intoText="hello" />}
						bottomLeft={<InfoTooltip intoText="hello" />}
						titleRight={<InfoTooltip intoText="hello" />}
					>
						<SelectV2
							options={[]}
							onChange={(t) => {
								console.log("change:", t)
							}}

						/>
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
