import { Global } from '@emotion/react';
import EurofontExtendedCWoff from '../../assets/fonts/EurofontExtendedC-Bold.woff';
import EurofontExtendedCWoff2 from '../../assets/fonts/EurofontExtendedC-Bold.woff2';

export const CustomFontsInjection = () => {
  return (
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
};
