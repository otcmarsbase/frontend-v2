import { Grid } from "@chakra-ui/react"
import React from "react"

type TwoButtonsProps = {}

export const TwoButtons: React.FCC<TwoButtonsProps> = ({ children }) => {
	return (
		<Grid
			justifyContent={"space-between"}
			templateColumns={{ sm: "100%", md: "45% 45%" }}
			gap={"1rem"}
		>
			{children}
		</Grid>
	)
}
