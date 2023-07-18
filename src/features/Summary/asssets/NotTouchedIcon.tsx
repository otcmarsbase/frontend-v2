
import {SVGProps} from "react";

export const NotTouchedIcon = ({
                                height = "24px",
                                width = "24px",
                                color = "inherit",
                                ...props
                            }: SVGProps<SVGSVGElement>) => (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2.25V4.95" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13.0498V15.7498" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.22998 4.22998L6.13498 6.13498" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.865 11.8652L13.77 13.7702" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.25 9H4.95" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.05 9H15.75" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.22998 13.7702L6.13498 11.8652" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.865 6.13498L13.77 4.22998" stroke="#686A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);




