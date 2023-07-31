import {SVGProps} from "react";

export const DashboardEditBtn = ({
                                     height = "24px",
                                     width = "24px",
                                     color = "inherit",
                                     ...props
                                 }: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="6.66667" r="2.66667" fill="#686A6E"/>
        <circle cx="16" cy="16" r="2.66667" fill="#686A6E"/>
        <ellipse cx="16" cy="25.3334" rx="2.66667" ry="2.66667" fill="#686A6E"/>
    </svg>
);
