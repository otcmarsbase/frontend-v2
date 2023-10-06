import { forwardRef, useCallback, useImperativeHandle } from 'react';

import { Resource } from '@schema/api-gateway';
import { useForm } from '@shared/ui-kit';

import { FormInvalidError } from '../../../../_const';
import { StepPropsByDocumentType } from '../../../types';
import { lotInfoSchema } from '../../schema';
import { LotInfoStepRef } from '../../types';
import { LotInfoModel } from '../../View';

import { LotInfoSAFEBuy } from './BUY';
import { LotInfoSAFESell } from './SELL';

const LotInfoByDirection: Record<Resource.Common.Enums.TradeDirection, typeof LotInfoSAFEBuy | typeof LotInfoSAFESell> =
  {
    BUY: LotInfoSAFEBuy,
    SELL: LotInfoSAFESell,
  };

export interface LotInfoSAFEProps extends StepPropsByDocumentType {
  direction: Resource.Common.Enums.TradeDirection;
}

export const LotInfoSAFE: React.FC<LotInfoSAFEProps> = forwardRef<LotInfoStepRef, LotInfoSAFEProps>(
  ({ direction, lot }, ref) => {
    const Component = LotInfoByDirection[direction];

    const {
      control,
      isRequired,
      handleSubmit,
      formState: { errors },
      setValue,
      getValues,
    } = useForm({
      schema: lotInfoSchema,
      defaultValues: {},
    });

    const onSubmit = useCallback(async () => {
      const validatePromise = new Promise<LotInfoModel>((resolve, reject) => {
        handleSubmit(resolve, (err) => {
          reject(FormInvalidError);
        })();
      });
      const params = await validatePromise;
      return params;
    }, [handleSubmit]);

    useImperativeHandle(
      ref,
      () => ({
        onSubmit,
        getValues,
        isRequired,
        isSkippable: false,
        schema: lotInfoSchema,
      }),
      [onSubmit, getValues, isRequired],
    );

    return <Component lot={lot} setValue={setValue} errors={errors} isRequired={isRequired} control={control} />;
  },
);
