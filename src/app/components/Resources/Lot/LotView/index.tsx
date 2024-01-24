import { FC, useMemo } from 'react';

import { CommonView, SafeView, SaftView, TokenWarrantView } from './categories';
import { LotViewContext, LotViewContextValue } from './LotViewContext';

export interface LotViewProps extends LotViewContextValue {}

export const LotView: FC<LotViewProps> = ({ lot, asset }) => {
  const ViewComponent = useMemo(() => {
    switch (lot.type) {
      case 'SAFE':
        return SafeView;
      case 'SAFT':
        return SaftView;
      case 'TOKEN_WARRANT':
        return TokenWarrantView;
      default:
        return CommonView;
    }
  }, [lot]);

  const contextValue = useMemo(
    () => ({
      lot,
      asset,
    }),
    [lot, asset],
  );

  return (
    <LotViewContext.Provider value={contextValue}>
      <ViewComponent />
    </LotViewContext.Provider>
  );
};
