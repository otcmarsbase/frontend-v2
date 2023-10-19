import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { LotWizardSafeBuy } from './LotWizardSafeBuy';
import { LotWizardSafeSell } from './LotWizardSafeSell';

export function LotWizardSafe() {
  const { watch } = useFormContext();

  const direction = watch('direction');

  return useMemo(() => {
    switch (direction) {
      case 'BUY':
        return <LotWizardSafeBuy />;
      case 'SELL':
        return <LotWizardSafeSell />;
    }
  }, [direction]);
}
