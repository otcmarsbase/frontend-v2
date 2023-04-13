import LoaderErrorImgSource from "@/assets/images/loaderError.gif"
import LoaderLoadingImgSource from "@/assets/images/loaderLoading.gif"
import LoaderOkImgSource from "@/assets/images/loaderOk.gif"
import MetamaskImgSource from "@/assets/images/metamask.png"
import React from "react"
import { Image } from "@/components/Image/Image"

export const LoaderErrorImg: React.FC<React.ComponentProps<typeof Image>> = (
    props
) => {
    return <Image src={LoaderErrorImgSource} {...props} />
}

export const LoaderLoadingImg: React.FC<React.ComponentProps<typeof Image>> = (
    props
) => {
    return <Image src={LoaderLoadingImgSource} {...props} />
}

export const LoaderOkImg: React.FC<React.ComponentProps<typeof Image>> = (
    props
) => {
    return <Image src={LoaderOkImgSource} {...props} />
}

export const MetamaskImg: React.FC<React.ComponentProps<typeof Image>> = (
    props
) => {
    return <Image src={MetamaskImgSource} {...props} />
}
