import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { LotWizardTokenWarrantBuy } from './LotWizardTokenWarrantBuy';
import { LotWizardTokenWarrantSell } from './LotWizardTokenWarrantSell';

export function LotWizardTokenWarrant() {
  const { watch } = useFormContext();

  const direction = watch('direction');

  return useMemo(() => {
    switch (direction) {
      case 'BUY':
        return <LotWizardTokenWarrantBuy />;
      case 'SELL':
        return <LotWizardTokenWarrantSell />;
    }
  }, [direction]);
}
