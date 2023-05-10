import { AnimatedProgress } from "@/components/AnimatedProgress/AnimatedProgress"
import { H3, Text12Normal } from "@/components/Text/Typography"
import { Flex } from "@chakra-ui/react"

export const CreatedLoading: React.FC = (props) => {
	return (
		<Flex direction={"column"} textAlign="center" alignItems={"center"}>
			<AnimatedProgress status={"lodaing"} />
			<H3>{"Creating your offer"}</H3>
			<Text12Normal color="grey">
				Please wait for a few moments. Colonizing Mars may take a
				while...
			</Text12Normal>
		</Flex>
	)
}