import { Global } from '@emotion/react';

export const FixFocusVisible = (
  <Global
    styles={`
/*
  https://github.com/WICG/focus-visible#2-update-your-css

  This will hide the focus indicator if the element receives focus via the mouse,
  but it will still show up on keyboard focus.
*/
.js-focus-visible :focus:not(.focus-visible),
.js-focus-visible :focus:not(.focus-visible) + [data-focus] {
  outline: none;
  box-shadow: none;
}
`}
  />
);
