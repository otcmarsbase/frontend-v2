import { setLocale, printValue, ValidationError } from 'yup';

export let mixed = {
  default: 'This is invalid',
  required: 'This is a required field',
  defined: 'This must be defined',
  notNull: 'This cannot be null',
  oneOf: 'This must be one of the following values: ${values}',
  notOneOf: 'This must not be one of the following values: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const castMsg =
      originalValue != null && originalValue !== value
        ? ` (cast from the value \`${printValue(originalValue, true)}\`).`
        : '.';

    return type !== 'mixed'
      ? `This must be a \`${type}\` type, ` + `but the final value was: \`${printValue(value, true)}\`` + castMsg
      : `This must match the configured type. ` + `The validated value was: \`${printValue(value, true)}\`` + castMsg;
  },
};

export let string = {
  length: 'This must be exactly ${length} characters',
  min: 'This must be at least ${min} characters',
  max: 'This must be at most ${max} characters',
  matches: 'This must match the following: "${regex}"',
  email: 'This must be a valid email',
  url: 'This must be a valid URL',
  uuid: 'This must be a valid UUID',
  trim: 'This must be a trimmed string',
  lowercase: 'This must be a lowercase string',
  uppercase: 'This must be a upper case string',
};

export let number = {
  min: 'This must be greater than or equal to ${min}',
  max: 'This must be less than or equal to ${max}',
  lessThan: 'This must be less than ${less}',
  moreThan: 'This must be greater than ${more}',
  positive: 'This must be a positive number',
  negative: 'This must be a negative number',
  integer: 'This must be an integer',
};

export let date = {
  min: 'This field must be later than ${min}',
  max: 'This field must be at earlier than ${max}',
};

export let boolean = {
  isValue: 'This field must be ${value}',
};

export let object = {
  noUnknown: 'This field has unspecified keys: ${unknown}',
};

export let array = {
  min: 'This field must have at least ${min} items',
  max: 'This field must have less than or equal to ${max} items',
  length: 'This must have ${length} items',
};

export let tuple = {
  notType: (params) => {
    const { path, value, spec } = params;
    const typeLen = spec.types.length;
    if (Array.isArray(value)) {
      if (value.length < typeLen)
        return `This tuple value has too few items, expected a length of ${typeLen} but got ${
          value.length
        } for value: \`${printValue(value, true)}\``;
      if (value.length > typeLen)
        return `This tuple value has too many items, expected a length of ${typeLen} but got ${
          value.length
        } for value: \`${printValue(value, true)}\``;
    }

    return ValidationError.formatError(mixed.notType, params);
  },
};

function initApp() {
  setLocale({
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
  });
}

initApp();
