import clsx from "clsx"
import React from "react"

type ClickableProps = {} & React.ComponentProps<"div">

export const Clickable: React.FCC<ClickableProps> = (props) => {
	return (
		<div {...props} className={clsx("cursor-pointer", props.className)}>
			{props.children}
		</div>
	)
}
