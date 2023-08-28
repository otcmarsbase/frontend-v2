import React, { PropsWithChildren, useMemo } from 'react';

import { PageComponent, useRouter } from '@packages/router5-react-auto';
import { NavigationOptions } from 'router5';

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

  const href = useMemo(() => router.buildPathByComponent(page, pageProps) || '#', [router, page, pageProps]);
  const fullHref = useMemo(() => `${window.location.origin}${href}`, [href]);

  const onClickCallback = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (onClick) return onClick(e, fullHref);
      else router.navigateComponent(page, pageProps, options ?? {});
    },
    [onClick, fullHref, router, page, pageProps, options],
  );

  console.log(children);

  return React.cloneElement(React.Children.only<any>(children), { href: fullHref, onClick: onClickCallback });
}
