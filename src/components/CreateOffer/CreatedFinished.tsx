import { AnimatedProgress } from "@/components/AnimatedProgress/AnimatedProgress"
import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { SecondaryButton } from "@/components/Button/SecondaryButton"
import { H3, Text12Normal } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"
import React from "react"

export const FinishedCreated: React.FC = (props) => {
	return (
		<Flex
			direction={"column"}
			textAlign="center"
			alignItems={"center"}
			maxW={"400px"}
			gap={2}
			mx={"auto"}
		>
			<AnimatedProgress status={"success"} />
			<H3>{"Order #123 was created"}</H3>
			<Text12Normal color="grey">
				You successfully left your mark on Mars. Wanna make another one?
			</Text12Normal>
			<Flex gap={"4"} w={"full"}>
				<SecondaryButton onClick={() => {}}>Go to OTC</SecondaryButton>
				<PrimaryButton onClick={() => {}}>Try again</PrimaryButton>
			</Flex>
		</Flex>
	)
}
