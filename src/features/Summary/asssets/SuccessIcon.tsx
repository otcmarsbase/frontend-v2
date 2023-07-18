import {SVGProps} from "react";

export const SuccessIcon = ({
                               height = "24px",
                               width = "24px",
                               color = "inherit",
                               ...props
                           }: SVGProps<SVGSVGElement>) => (
    <svg width={height} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#279783"/>
        <path d="M18 7.5L9.75 15.75L6 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);



