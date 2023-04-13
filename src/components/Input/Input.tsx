import React from "react"
import { Input as InputComponent } from "@chakra-ui/react"
type InputProps = React.ComponentProps<typeof InputComponent>

export const Input: React.FC<InputProps> = (props) => {
	return (
		<InputComponent
			bg={"transparent"}
			borderWidth={"2px"}
			style={{ outline: "none", boxShadow: "none" }}
			className={
				"border-dark-200 shadow-none focus-visible:!border-orange-100 hover:!border-orange-100 "
			}
			{...props}
		/>
	)
}
