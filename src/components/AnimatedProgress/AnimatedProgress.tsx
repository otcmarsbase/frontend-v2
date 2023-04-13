import { LoaderErrorImg, LoaderLoadingImg, LoaderOkImg } from "@/Images"
import React from "react"

type AnimatedProgressProps = {
	status: "lodaing" | "success" | "failed"
}

export const AnimatedProgress: React.FC<AnimatedProgressProps> = ({
	status,
}) => {
	let Img = LoaderLoadingImg
	if (status === "success") Img = LoaderOkImg
	if (status === "failed") Img = LoaderErrorImg

	return (
		<div className="sm:w-[167px] sm:h-[167px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px]">
			<Img />
		</div>
	)
}
