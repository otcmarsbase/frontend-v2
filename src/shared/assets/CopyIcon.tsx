import { createIcon } from '@chakra-ui/react';

export const CopyIcon = createIcon({
  displayName: 'CopyIcon',
  viewBox: '0 0 18 18',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <>
      <rect
        x="5.447"
        y="5.45339"
        width="10.8077"
        height="10.8077"
        rx="1.25"
        transform="rotate(0.0200745 5.447 5.45339)"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M3.46309 13.3164L3.00155 13.3162C1.89698 13.3158 1.00186 12.4201 1.00225 11.3155L1.00516 3.00781C1.00555 1.90325 1.90129 1.00813 3.00586 1.00851L11.3135 1.01142C12.4181 1.01181 13.3132 1.90755 13.3129 3.01212L13.3127 3.47366"
        stroke="white"
        stroke-width="1.5"
      />
    </>
  ),
});
