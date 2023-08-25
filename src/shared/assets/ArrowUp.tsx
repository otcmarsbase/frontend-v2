import { createIcon } from '@chakra-ui/react';

export const ArrowUp = createIcon({
  displayName: 'ArrowUp',
  viewBox: '0 0 16 16',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      d="M12.668 3.3335L3.33463 12.6668"
      stroke="#94969A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M4.26797 3.3335H12.668V11.7335"
      stroke="#94969A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});
