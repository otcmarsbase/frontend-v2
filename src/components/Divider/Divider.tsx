import clsx from "clsx"
import React from "react"
import styles from "./Divider.module.scss"

type DividerProps = { className?: string }

export const Divider: React.FC<DividerProps> = (props) => {
	return <div className={clsx(styles.container, props.className)}></div>
}
