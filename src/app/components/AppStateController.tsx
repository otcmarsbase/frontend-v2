import { FC, PropsWithChildren, useMemo } from 'react';

import { useStore } from '@app/store';
import { Maintenance } from '@shared/ui-kit';

export const AppStateController: FC<PropsWithChildren> = ({ children }) => {
  const { systemStore } = useStore();

  return useMemo(() => {
    if (systemStore.maintenance) {
      return <Maintenance />;
    }

    return <>{children}</>;
  }, [systemStore.maintenance, children]);
};
