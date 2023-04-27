import React from "react"

type ButtonProps = {
	onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
	loading?: boolean
	disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({}) => {
	return <div></div>
}
