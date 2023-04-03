import { Box } from "@chakra-ui/react"
import React from "react"

type DesktopViewProps = {}

export const DesktopView: React.FCC<DesktopViewProps> = ({ children }) => {
	return <Box display={{ sm: "none", lg: "block" }}>{children}</Box>
}
