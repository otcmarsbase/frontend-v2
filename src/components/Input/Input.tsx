import React from "react"
import {
	FormControl,
	FormErrorMessage,
	Input as InputComponent,
	InputGroup,
	InputRightAddon,
	InputRightElement,
} from "@chakra-ui/react"
import { useSize } from "@chakra-ui/react-use-size"
type InputProps = React.ComponentProps<typeof InputComponent> & {
	rightComponent?: React.ReactNode
	errorMsg?: string
}

export const Input: React.FC<InputProps> = ({
	rightComponent,
	isInvalid,
	errorMsg,
	...props
}) => {
	const rightElementRef = React.useRef(null)
	const rightSizes = useSize(rightElementRef)
	return (
		<FormControl isInvalid={isInvalid}>
			<InputGroup>
				<InputComponent
					pr={rightSizes?.width || "auto"}
					bg={"transparent"}
					borderWidth={"2px"}
					borderColor={"dark.200"}
					style={{ outline: "none", boxShadow: "none" }}
					className={
						"!shadow-none focus-visible:!border-orange-100 hover:!border-orange-100 "
					}
					{...props}
				/>
				{rightComponent && (
					<InputRightElement
						paddingLeft={"4px"}
						paddingRight={"16px"}
						ref={rightElementRef}
						w={"max-content"}
					>
						{rightComponent}
					</InputRightElement>
				)}
			</InputGroup>
			{isInvalid && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</FormControl>
	)
}
