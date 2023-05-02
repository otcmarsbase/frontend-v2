import React from "react"
import { Button, ButtonProps, Spinner } from "@chakra-ui/react"
import { Text } from "@/components/Text/Text"

export type BaseButtonProps = ButtonProps & {}

export const BaseButton: React.FCC<BaseButtonProps> = ({
	children,
	...props
}) => {
	const TextComp = <Text size="promo-14">{children}</Text>
	const styles = React.useMemo(
		() => ({
			height: "48px",
			width: "100%",
			borderRadius: "8px",
		}),
		[size]
	)
	return (
		<Button
			opacity={1}
			style={styles}
			spinner={
				<Spinner
					thickness="2px"
					emptyColor="#515460"
					color="#C74A26"
					speed="1s"
				/>
			}
			gap={1}
			//@ts-ignore
			loadingText={TextComp}
			{...props}
		>
			{TextComp}
		</Button>
	)
}
