import { formatNumber } from '@app/utils';
import { StringSchema } from 'yup';

export class CustomStringScheme extends StringSchema {
  minValue(minValue: number, message?: string) {
    return this.test({
      name: 'maxValue',
      params: {
        minValue: formatNumber(minValue, 8),
      },
      test: (value) => {
        if (!value) return false;

        const numberValue = Number(value);

        return !isNaN(numberValue) && numberValue >= minValue;
      },
      message: message || 'The value must be of at least ${minValue}',
    });
  }

  lessThan(referenceField: string, message?: string) {
    return this.test({
      name: 'lessThan',
      message: message || '${path} must be less than ${reference}',
      params: {
        reference: referenceField,
      },
      test(value: string) {
        const referenceValue = Number(this.parent && this.parent[referenceField]);
        const numberValue = Number(value);

        if (!numberValue || !referenceValue) return false;

        return numberValue <= referenceValue;
      },
    });
  }
}
