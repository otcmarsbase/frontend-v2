import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

type BaseButtonProps = ButtonProps & {}

export const BaseButton: React.FCC<BaseButtonProps> = ({ children }) => {
	return <Button>{children}</Button>
}
