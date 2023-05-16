import { Text12Bold, Text12Normal } from "@/components/Text/Typography"
import { calculateProfit } from "@/utils/utils"
import { Flex } from "@chakra-ui/react"
import clsx from "clsx"

export const DisplayProfit: React.FC<{
	profit: ReturnType<typeof calculateProfit>
}> = ({ profit }) => {
	return (
		<Flex className="gap-1">
			<Text12Bold
				size="12"
				className={clsx({
					"text-red-300": profit.type === "discount",
					"text-green-200": profit.type === "premium",
				})}
			>
				{(profit.amount * 100).toFixed(2)}%
			</Text12Bold>
			<Text12Normal>{profit.type}</Text12Normal>
		</Flex>
	)
}
