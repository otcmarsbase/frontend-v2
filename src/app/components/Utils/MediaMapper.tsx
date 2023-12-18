import { useBreakpointValue } from '@chakra-ui/react';

import { breakpoints } from '../../theme/foundations';

// Definition of possible media query sizes
type MediaMapperSize = keyof typeof breakpoints;

export interface MediaMapperProps extends Record<MediaMapperSize, React.ComponentType<{}>> {
  ssr?: boolean; // Flag to determine if the component is running on the server (Server-Side Rendering)
  fallback?: MediaMapperSize; // Fallback media query size used in case of no matching size
}

/**
 * The MediaMapper component is designed to render a component based on the current screen size
 * using Chakra UI and its useBreakpointValue hook.
 *
 * @param {boolean} ssr - Flag to determine if the component is running on the server (Server-Side Rendering).
 * @param {MediaMapperSize} fallback - Fallback media query size used in case of no matching size (default, base).
 * @param {...React.ComponentType<{}>} sizes - An object where keys are media query sizes, and values are
 *   components corresponding to those sizes.
 *
 * @returns {React.ReactElement} - Returns a React element corresponding to the current screen size.
 */
export const MediaMapper = ({ ssr = false, fallback, ...sizes }: MediaMapperProps) => {
  // Use the useBreakpointValue hook to determine the corresponding component
  const Component = useBreakpointValue<React.ComponentType>(sizes, { ssr, fallback });

  return <Component />;
};
