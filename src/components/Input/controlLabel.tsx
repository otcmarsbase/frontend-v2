import { LeadText } from "@/components/Text/Typography"
import React from "react"

type ControlLabelProps = {} & React.ComponentProps<typeof LeadText>

export const ControlLabel: React.FC<ControlLabelProps> = (props) => {
	return <LeadText {...props} />
}

