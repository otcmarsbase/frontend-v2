import React from "react"
import {
	FormControl,
	Input as InputComponent,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from "@chakra-ui/react"
import { useSize } from "@chakra-ui/react-use-size"
import { Text } from "@/components/Text/Text"
import clsx from "clsx"
import { Text12Normal } from "@/components/Text/Typography"
type InputProps = React.ComponentProps<typeof InputComponent> & {
	rightComponent?: React.ReactNode
	leftComponent?: React.ReactNode
	errorMsg?: string
}

export const Input: React.FC<InputProps> = ({
	rightComponent,
	isInvalid,
	leftComponent,
	errorMsg,
	...props
}) => {
	const rightElementRef = React.useRef(null)
	const leftElementRef = React.useRef(null)
	const rightSizes = useSize(rightElementRef)
	const leftSizes = useSize(leftElementRef)
	return (
		<FormControl isInvalid={isInvalid}>
			<InputGroup>
				{leftComponent && (
					<InputLeftElement
						paddingLeft={"16px"}
						paddingRight={"4px"}
						ref={leftElementRef}
						w={"max-content"}
						height={"100%"}
					>
						{leftComponent}
					</InputLeftElement>
				)}
				<InputComponent
					pr={rightSizes?.width || "auto"}
					pl={leftSizes?.width || "auto"}
					bg={"transparent"}
					borderWidth={"2px"}
					style={{
						outline: "none",
						boxShadow: "none",
						height: "48px",
					}}
					_disabled={{
						borderColor: "dark.200",
					}}
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
						height={"100%"}
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
	return (
		<Text12Normal className="text-red-500 font-bold">{text}</Text12Normal>
	)
}
