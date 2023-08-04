import { createIcon } from '@chakra-ui/react';

export const AlertCircle = createIcon({
  displayName: 'AlertCircle',
  viewBox: '0 0 18 18',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clipPath="url(#clip0_6130_7016)">
        <path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke="#94969A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 5.25V9.2522V7.3125M9 11.625V12"
          stroke="#94969A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6130_7016">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
});
