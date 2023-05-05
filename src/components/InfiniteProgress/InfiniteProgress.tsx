import { H3 } from "@/components/Text/Typography"
import { Center, Progress } from "@chakra-ui/react"

export const InfiniteProgressBar: React.FC = () => (
	<Progress
		size="sm"
		isIndeterminate
		colorScheme={"red"}
		bgColor="black"
		mb="2rem"
	/>
)

export const TransactionInProgress: React.FCC = ({ children }) => (
	<>
		{children && (
			<Center mt={"2rem"}>
				<H3>{children}</H3>
			</Center>
		)}
		<InfiniteProgressBar />
	</>
)
