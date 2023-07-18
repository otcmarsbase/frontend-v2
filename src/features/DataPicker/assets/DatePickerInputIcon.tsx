import {SVGProps} from "react";

export const DataPickerInputIcon = ({
                                        height = "16px",
                                        width = "16px",
                                        color = '#FFF',
                                        ...props
                                    }: SVGProps<SVGSVGElement>) => (
    <svg width={width}
         height={height}
         viewBox="0 0 16 16"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
    >
        <g clipPath="url(#clip0_6039_159525)">
            <path
                d="M14.5 6H1.5M5 3.5V1.5M11 3.5L11 1.5M1.5 4.5L1.5 12.5C1.5 13.6046 2.39543 14.5 3.5 14.5L12.5 14.5C13.6046 14.5 14.5 13.6046 14.5 12.5V4.50002C14.5 3.39545 13.6046 2.50002 12.5 2.50002L3.5 2.5C2.39543 2.5 1.5 3.39543 1.5 4.5Z"
                stroke='inherit' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_6039_159525">
                <rect width="16" height="16"/>
            </clipPath>
        </defs>
    </svg>
);
