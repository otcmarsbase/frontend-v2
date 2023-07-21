import { Global } from '@emotion/react';
import '@fontsource-variable/inter';
import EurofontExtendedCWoff from './fonts/EurofontExtendedC-Bold.woff';
import EurofontExtendedCWoff2 from './fonts/EurofontExtendedC-Bold.woff2';

export const FontsInjection = (
  <Global
    styles={`
@font-face {
font-family: "EurofontExtended";
src: url("${EurofontExtendedCWoff2}") format("woff2"),
  url("${EurofontExtendedCWoff}") format("woff");
font-weight: bold;
font-style: normal;
font-display: swap;
}
`}
  />
);
