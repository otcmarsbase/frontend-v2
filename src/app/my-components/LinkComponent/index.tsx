import React, { PropsWithChildren, useMemo } from 'react';

import { NavigationOptions } from 'router5';
import { PageComponent, useRouter } from 'src/packages/router5-react-auto';

export interface LinkComponentProps<Props> {
  page: PageComponent<Props>;
  pageProps: Props;
  options?: NavigationOptions;
  onClick?: (e: React.MouseEvent, href: string) => any;
}

export function LinkComponent<Props>({
  page,
  pageProps,
  options,
  onClick,
  children,
}: PropsWithChildren<LinkComponentProps<Props>>) {
  const router = useRouter();

  //   ${window.location.origin}
  const href = useMemo(() => router.buildPathByComponent(page, pageProps) || '#', [router, page, pageProps]);
  const fullHref = useMemo(() => `${window.location.origin}${href}`, [href]);

  const onClickCallback = React.useCallback(
    (e: React.MouseEvent) => {
      if (onClick) return onClick(e, fullHref);

      e.preventDefault();
      router.navigateComponent(page, pageProps, options ?? {});
    },
    [onClick, fullHref, router, page, pageProps, options],
  );

  return React.cloneElement(React.Children.only<any>(children), { href: fullHref, onClick: onClickCallback });
}
