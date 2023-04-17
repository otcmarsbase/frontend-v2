import { Progress } from "@chakra-ui/react"

export const InfiniteProgressBar: React.FC = () => (
	<Progress
		size="sm"
		isIndeterminate
		colorScheme={"red"}
		bgColor="black"
		mb="2rem"
	/>
)
