import { SVGProps } from 'react';

export const ArrowRight = ({
  height = '24px',
  width = '24px',
  color = 'inherit',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 6L15 12L9 18" stroke="#BC401C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
