import React, { PropsWithChildren, useMemo } from 'react';

import { PageComponent, useRouter } from '@packages/router5-react-auto';
import { NavigationOptions } from 'router5';

export interface LinkComponentProps<Props> {
  page: PageComponent<Props>;
  pageProps: Props;
  options?: NavigationOptions;
  onClick?: (e: React.MouseEvent, href: string) => any;
  overrideClick?: boolean;
}

export function LinkComponent<Props>({
  page,
  pageProps,
  options,
  onClick,
  overrideClick = true,
  children,
}: PropsWithChildren<LinkComponentProps<Props>>) {
  const router = useRouter();

  const href = useMemo(() => router.buildPathByComponent(page, pageProps) || '#', [router, page, pageProps]);
  const fullHref = useMemo(() => `${window.location.origin}${href}`, [href]);

  const onClickCallback = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (onClick) onClick(e, fullHref);

      if (!(overrideClick && onClick)) router.navigateComponent(page, pageProps, options ?? {});
    },
    [onClick, fullHref, router, page, pageProps, options, overrideClick],
  );

  return React.cloneElement(React.Children.only<any>(children), { href: fullHref, onClick: onClickCallback });
}
