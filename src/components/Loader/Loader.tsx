import { LoaderIcon } from "@/icons"
import React from "react"

type LoaderProps = {
	content?: React.ReactNode
}

export const Loader: React.FC<LoaderProps> = ({ content = <LoaderIcon /> }) => {
	return <div className="animate-spin">{content}</div>
}
