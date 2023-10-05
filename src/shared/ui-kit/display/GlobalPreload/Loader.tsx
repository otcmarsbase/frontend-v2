import { createIcon } from '@chakra-ui/react';

export const Loader = createIcon({
  viewBox: '0 0 220 220',
  path: (
    <svg version="1.1" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="GlobalPreloadGradiendFirst">
          <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
          <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="GlobalPreloadGradiendSecond">
          <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
          <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <g strokeWidth="5">
        <path
          stroke="url(#GlobalPreloadGradiendFirst)"
          d="M206.003 110C206.003 163.019 163.022 206 110.003 206C56.9833 206 14.0026 163.019 14.0026 110"
        />
        <path
          stroke="url(#GlobalPreloadGradiendSecond)"
          d="M14.0026 110C14.0026 56.9807 56.9833 14 110.003 14C163.022 14 206.003 56.9806 206.003 110"
        />
      </g>
      <circle cx="15" cy="105" r="10" fill="currentColor" />
    </svg>
  ),
});
