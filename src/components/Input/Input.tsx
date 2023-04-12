import React from "react"
import { Input as InputComponent } from "@chakra-ui/react"
type InputProps = React.ComponentProps<typeof InputComponent>

export const Input: React.FC<InputProps> = (props) => {
	return (
		<InputComponent
			boxShadow={"none"}
			bg={"transparent"}
			borderWidth={"2px"}
			style={{ outline: "none" }}
			className={
				"border-dark200 shadow-none focus-visible:border-orange100"
			}
			{...props}
		/>
	)
}
