import { BaseText } from "@/components/Text/BaseText"
import { Flex, Spinner, VStack } from "@chakra-ui/react"

export const SpinnerWithText: React.FCC<{ height?: string }> = ({
	height,
	children,
}) => (
	<Flex justify="center" align="center" minH={height || "100vh"}>
		<VStack>
			<Spinner size="xl" />
			<BaseText>{children}</BaseText>
		</VStack>
	</Flex>
)
