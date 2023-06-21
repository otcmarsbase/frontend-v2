import { LeadText } from "@/components/Text/Typography"
import React from "react"

type ControlLabelProps = {} & React.ComponentProps<typeof LeadText>

export const ControlLabel: React.FC<ControlLabelProps> = (props) => {
	return <LeadText {...props} />
}

export const RedControlLabel: React.FC<ControlLabelProps> = (props) => {
	return <LeadText className="text-orange-300" {...props} />
}
