import { createIcon } from '@chakra-ui/react';

export const TooltipIcon = createIcon({
  displayName: 'TooltipIcon',
  viewBox: '0 0 10 10',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <>
      <path
        d="M5.00016 9.16665C7.30135 9.16665 9.16683 7.30117 9.16683 4.99998C9.16683 2.69879 7.30135 0.833313 5.00016 0.833313C2.69898 0.833313 0.833496 2.69879 0.833496 4.99998C0.833496 7.30117 2.69898 9.16665 5.00016 9.16665Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00024 6.73608V4.99997M5.00024 3.61108V3.26385"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
