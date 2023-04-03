import { Box } from "@chakra-ui/react"
import React from "react"

type MobileViewProps = {}

export const MobileView: React.FCC<MobileViewProps> = ({ children }) => {
	return <Box display={{ lg: "none" }}>{children}</Box>
}
