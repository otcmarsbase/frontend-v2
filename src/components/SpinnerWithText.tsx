import { Text } from "@/components/Text/Text"
import { Flex, Spinner, VStack } from "@chakra-ui/react"

export const SpinnerWithText: React.FCC<{ height?: string }> = ({
	height,
	children,
}) => (
	<Flex justify="center" align="center" minH={height || "100vh"}>
		<VStack>
			<Spinner size="xl" />
			<Text>{children}</Text>
		</VStack>
	</Flex>
)
