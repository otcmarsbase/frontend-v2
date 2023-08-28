import { useEffect } from 'react';

import { UILayout } from '@components/layouts';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';

export interface ViewProps {
  direction?: Resource.Common.TradeDirection;
}

export const View: React.FC<ViewProps> = ({ direction: directionParam }) => {
  const router = useRouter();

  useEffect(() => {
    const direction: Resource.Common.TradeDirection = directionParam
      ? directionParam.toLowerCase() === 'buy'
        ? 'BUY'
        : 'SELL'
      : 'SELL';
    if (direction !== directionParam) router.navigateComponent(View, { direction }, { replace: true });
  }, [directionParam, router]);

  return <div>{directionParam}</div>;
};

View.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};

export default View;
