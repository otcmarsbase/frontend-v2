import { useMemo, useState } from 'react';
import Calendar from 'react-calendar';

import { Box, BoxProps, Button, Input } from '@chakra-ui/react';
import { format } from 'date-fns';
import { Range } from 'react-calendar/dist/cjs/shared/types';

export interface DatePickerProps extends Omit<BoxProps, 'onChange'> {
  value: Date;
  rangeMode?: boolean;
  formatDate?: string;
  placeholder?: string;
  onChange: (value: Date | Range<Date>) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  formatDate = 'dd.MM.yyyy',
  placeholder,
  rangeMode,
  ...boxProps
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const calendarValue = useMemo(() => new Date(value ?? Date.now()), [value]);

  const onOpen = () => {
    setIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(false);
  };

  return (
    <Box {...boxProps} w="full" position="relative">
      <Input
        onClick={onOpen}
        onFocus={onOpen}
        onBlur={onClose}
        w="full"
        placeholder={placeholder}
        value={format(calendarValue, formatDate)}
      />
      <Box
        position="absolute"
        visibility={isOpened ? 'visible' : 'hidden'}
        opacity={isOpened ? '1' : '0'}
        transition="all 0.3s"
        bg="dark.800"
      >
        <Calendar
          //   tileContent={(props) => <Button>{props.date.getDay()}</Button>}
          selectRange={rangeMode}
          value={calendarValue}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};
