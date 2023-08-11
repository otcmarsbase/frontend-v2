import {createIcon} from "@chakra-ui/react";

export const EllipseIcon = createIcon({
    displayName: 'EllipseIcon',
    viewBox: '0 0 8 8',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
        <>
        <circle cx="4" cy="4" r="4" fill="#34A853"/>
        </>


    ),
})
