import React from "react"
import { Button, ButtonProps, Spinner } from "@chakra-ui/react"

type BaseButtonProps = ButtonProps & {}

export const BaseButton: React.FCC<BaseButtonProps> = ({ children }) => {
	return (
		<Button
			style={{
				height: "48px",
				width: "100%",
			}}
			spinner={
				<Spinner
					thickness="2px"
					emptyColor="#515460"
					color="#C74A26"
					speed="1s"
				/>
			}
		>
			{children}
		</Button>
	)
}
