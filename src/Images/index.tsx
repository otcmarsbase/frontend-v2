// This file is generated automatically by generate-chakra-images.js
// Do not edit it manually
// To regenerate this file run: yarn generate-images

import LoaderErrorImgSource from "@/assets/images/loaderError.gif"
import LoaderLoadingImgSource from "@/assets/images/loaderLoading.gif"
import LoaderOkImgSource from "@/assets/images/loaderOk.gif"
import MetamaskImgSource from "@/assets/images/metamask.png"
import React from "react"
import { Image } from "@/components/Image/Image"

const img = (img: any) => {
    const Component: React.FC<React.ComponentProps<typeof Image>> = (props) => {
        return <Image src={img} {...props} />
    }
    return Component
}

export const LoaderErrorImg = img(LoaderErrorImgSource)

export const LoaderLoadingImg = img(LoaderLoadingImgSource)

export const LoaderOkImg = img(LoaderOkImgSource)

export const MetamaskImg = img(MetamaskImgSource)
