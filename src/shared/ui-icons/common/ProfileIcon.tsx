import { createIcon } from '@chakra-ui/react';

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>;

export const ProfileIcon = createIcon({
  displayName: 'ProfileIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'transparent',
  },
  path: [
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9986 3C9.51259 3 7.49727 5.01472 7.49727 7.5C7.49727 9.98528 9.51259 12 11.9986 12C14.4847 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4847 3 11.9986 3ZM19.2012 16.284L20.9027 19.695C21.0431 19.9736 21.0292 20.305 20.866 20.5708C20.7028 20.8367 20.4135 20.9991 20.1015 21H3.89657C3.58454 20.9991 3.29525 20.8367 3.13203 20.5708C2.9688 20.305 2.95491 19.9736 3.09533 19.695L4.79684 16.284C5.56002 14.7615 7.11755 13.8001 8.82106 13.8H15.177C16.8805 13.8001 18.438 14.7615 19.2012 16.284Z"
      fill="currentColor"
    />,
  ],
});
