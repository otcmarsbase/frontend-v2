import {createIcon} from "@chakra-ui/react";

export const SortingIcon = createIcon({
    displayName: 'SortingIcon',
    viewBox: '0 0 3 8',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="8" viewBox="0 0 3 8" fill="none">
            <path d="M0 3.5L1.5 0.5L3 3.5H0Z" fill="white"/>
            <path d="M3 4.5L1.5 7.5L2.62268e-07 4.5L3 4.5Z" fill="white"/>
        </svg>
    ),
})



