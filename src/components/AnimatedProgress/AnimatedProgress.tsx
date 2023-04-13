import { LoaderErrorImg, LoaderLoadingImg, LoaderOkImg } from "@/Images"
import React from "react"

type AnimatedProgressProps = {
	status: "lodaing" | "success" | "failed"
}

export const AnimatedProgress: React.FC<AnimatedProgressProps> = ({
	status,
}) => {
	if (status === "success") return <LoaderOkImg />
	if (status === "failed") return <LoaderErrorImg />
	return <LoaderLoadingImg />
}
