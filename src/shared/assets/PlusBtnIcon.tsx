import {createIcon} from "@chakra-ui/react";

export const PlusBtnIcon = createIcon({
    displayName: 'PlusBtnIcon',
    viewBox: '0 0 19 18',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
        <>
            <g clip-path="url(#clip0_614_1684)">
                <path d="M9.5 3.75V14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.25 9H14.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_614_1684">
                    <rect width="18" height="18" fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </>

    ),
})

