import {SVGProps} from "react";

export const ArrowLeft = ({
                            height = "24px",
                            width = "24px",
                            color = "inherit",
                            ...props
                          }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="#BC401C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

