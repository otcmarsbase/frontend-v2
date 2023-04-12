import { HowToUseBtn } from "@/components/HowToUseBtn/HowToUseBtn"
import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { GradientPopup } from "@/components/Popup/Popup"
import { BaseText } from "@/components/Text/BaseText"
import { SwapHorizontalIcon } from "@/icons"
import { useTranslation } from "@/localization/l10n"
import { links } from "@/utils/links"
import { openExternalUrl } from "@/utils/utils"
import { Box, Flex, HStack, VStack } from "@chakra-ui/react"
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
				<HStack>
					<SelectContainer
						titleLeft={<InfoTooltip intoText="hello" />}
					/>
					<div className="w-12 h-12 bg-dark800 flex justify-center items-center rounded-full">
						<SwapHorizontalIcon />
					</div>
					<SelectContainer
						titleLeft={<InfoTooltip intoText="hello" />}
					/>
				</HStack>
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
		<Flex direction={"column"}>
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
