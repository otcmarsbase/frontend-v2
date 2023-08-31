import { useCallback, useMemo, useState } from 'react';

import { PortalControllerResolver, PortalProps } from '@packages/react-portal';

import { usePortalController } from '../internal';

export function usePortal<Props, Resolve>(component: React.ComponentType<Props & PortalProps<Resolve>>) {
  const controller = usePortalController();

  const [resolver, setResolver] = useState<PortalControllerResolver<any>>();
  const isOpened = useMemo(() => !!resolver, [resolver]);

  const close = useCallback(
    (reason?: any, isResolved?: boolean) => {
      if (resolver) {
        resolver.destroy(reason, isResolved);
        setResolver(null);
      }
    },
    [resolver],
  );

  const open = useCallback(
    async (props: Props) => {
      const resolver = controller.create(component, props);
      setResolver(resolver);

      try {
        return await resolver;
      } finally {
        setResolver(null);
      }
    },
    [controller, component],
  );

  return {
    controller,
    isOpened,
    open,
    close,
  };
}
