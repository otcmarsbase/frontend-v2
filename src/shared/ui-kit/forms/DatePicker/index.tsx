import { useMemo } from 'react';

import { Popover, PopoverContent, PopoverTrigger, forwardRef, useDisclosure } from '@chakra-ui/react';
import { format, isDate } from 'date-fns';
import { Range } from 'react-calendar/dist/cjs/shared/types';

import { Calendar } from './Calendar';
import { DateInput } from './DateInput';

export interface DatePickerProps {
  value: Date | Range<Date>;
  rangeMode?: boolean;
  withTime?: boolean;
  formatDate?: string;
  placeholder?: string;
  minDate?: Date;
  onChange: (value: Date | Range<Date>) => void;
}

export const DatePicker = forwardRef<DatePickerProps, 'input'>(
  ({ value, onChange, formatDate = 'dd.MM.yyyy', placeholder, rangeMode, minDate }, ref) => {
    const { onOpen, onClose, isOpen } = useDisclosure();

    const inputValue = useMemo(() => {
      if (!value) return '';

      if (value instanceof Array) {
        const [start, end] = value;

        if (!(isDate(start) && isDate(end))) return '';

        return `${format(start, formatDate)} - ${format(end, formatDate)}`;
      }

      if (!isDate(value)) return '';

      return format(value, formatDate);
    }, [value, formatDate]);

    const handleChange: typeof onChange = (value) => {
      onChange(value);
      onClose();
    };

    return (
      <Popover matchWidth isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <PopoverTrigger>
          <DateInput readOnly value={inputValue} placeholder={placeholder} ref={ref} />
        </PopoverTrigger>
        <PopoverContent rounded="0.5rem" bg="dark.800" border="none">
          <Calendar
            value={value}
            selectRange={rangeMode}
            onChange={handleChange}
            color="white"
            minDetail="year"
            minDate={minDate}
          />
        </PopoverContent>
      </Popover>
    );
  },
);
