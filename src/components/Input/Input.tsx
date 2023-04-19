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
import { Text } from "@/components/Text/Text"
import clsx from "clsx"
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
					style={{ outline: "none", boxShadow: "none" }}
					className={clsx({
						"!shadow-none focus-visible:!border-orange-100 hover:!border-orange-100  ":
							true,
						"!border-dark-200": !isInvalid,
						"!border-red-300": isInvalid,
					})}
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
			{isInvalid && <ErrorLine text={errorMsg || ""} />}
		</FormControl>
	)
}

export const ErrorLine: React.FC<{ text: string }> = ({ text }) => {
	return <Text className="text-red-500">{text}</Text>
}
