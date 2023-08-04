import { useEffect, useState } from 'react';
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import { Box } from '@chakra-ui/react';
import { getMonth, getYear, format } from 'date-fns';
import { ArrowLeft } from '../assets/ArrowLeft';
import { ArrowRight } from '../assets/ArrowRight';
import { DateIcon } from '../assets/DateIcon';
import { DataPickerInputIcon } from '../assets/DatePickerInputIcon';
import { TimeIcon } from '../assets/TimeIcon';
import { Button } from '../button/Button';

import 'react-clock/dist/Clock.css';
import './index.scss';
import 'react-time-picker/dist/TimePicker.css';

interface IDataPickerInput {
  value: Date;
  onClick: () => void;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  const [value, onChange] = useState('10:00');

  return (
    <Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '11px 8px 9px 8px',
          strokeWidth: '1px',
          stroke: '#E1E4EB',
          borderBottom: '1px solid rgba(255, 255, 255, .2)',
          color: '#FFF',
          height: '40px',
        }}
      >
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <ArrowLeft />
        </button>
        <Box display={'flex'} gap={'10px'} alignItems={'center'} opacity={0.5}>
          {months[getMonth(date)]} {getYear(date)}
        </Box>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <ArrowRight />
        </button>
      </Box>
      <Box className={'date_picker__date_time-tab'}>
        <Box className={'date_picker__date_time_wrapper'}>
          <DateIcon />
          <Box>{format(date, 'dd.MM.yyyy')}</Box>
        </Box>
        <Box className={'date_picker__date_time_wrapper'}>
          <TimeIcon />
          <Box>
            <TimePicker
              // @ts-ignore
              onChange={onChange}
              value={value}
              className={'TimePicker'}
              disableClock={true}
              clearIcon={null}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const DataPickerInput = ({ value, onClick }: IDataPickerInput) => (
  <Button
    _hover={{ borderColor: '#94969A', color: '#94969A', stroke: '#94969A' }}
    h="3rem"
    border="2px"
    borderColor="#686A6E"
    borderRadius="8px"
    stroke={'#686A6E'}
    color="#686A6E"
    bg="#000000"
    onClick={onClick}
    px={'12px'}
    w={'100%'}
    py={'4px'}
    justifyContent={'flex-start'}
  >
    <Box
      _hover={{ color: '#94969A' }}
      display="flex"
      gap="10px"
      alignItems={'center'}
      justifyContent={'start'}
    >
      <Box>
        <DataPickerInputIcon />
      </Box>
      <Box fontSize={'14px'}>{`${value ? value : 'Select date'}`}</Box>
    </Box>
  </Button>
);

export const DatePickerComp = ({ handleGetDate, isDatePickerDisabled }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  useEffect(() => {
    handleGetDate(startDate);
  }, [startDate, handleGetDate]);

  function decreaseMonth() {
    const newMonth = getMonth(startDate) - 1;
    const newDate = startDate.setMonth(newMonth);
    setStartDate((prev) => new Date(newDate));
  }

  function increaseMonth() {
    const newMonth = getMonth(startDate) + 1;
    const newDate = startDate.setMonth(newMonth);
    setStartDate((prev) => new Date(newDate));
  }

  function increaseYear() {
    const newMonth = getYear(startDate) + 1;
    const newDate = startDate.setFullYear(newMonth);
    setStartDate((prev) => new Date(newDate));
  }

  function decreaseYear() {
    const newMonth = getYear(startDate) + 1;
    const newDate = startDate.setFullYear(newMonth);
    setStartDate((prev) => new Date(newDate));
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate((prevState) => date)}
      dateFormat="dd.MM.yyyy"
      showPopperArrow={false}
      disabled={isDatePickerDisabled}
      popperPlacement="bottom-start"
      popperClassName="DataPickerPopper"
      customInput={<DataPickerInput value={startDate} onClick={() => {}} />}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
      calendarStartDay={1}
      // includeDates={[new Date(), addDays(new Date(), 1)]}
      calendarClassName="Calendar"
      // adjustDateOnChange
      renderCustomHeader={() => (
        <CustomHeader
          customHeaderCount={0}
          monthDate={new Date()}
          nextYearButtonDisabled={false}
          prevYearButtonDisabled={false}
          decreaseYear={() => decreaseYear()}
          increaseYear={() => increaseYear()}
          date={startDate}
          changeYear={() => decreaseYear()}
          changeMonth={() => increaseYear()}
          decreaseMonth={() => decreaseMonth()}
          increaseMonth={() => increaseMonth()}
          prevMonthButtonDisabled={false}
          nextMonthButtonDisabled={false}
        />
      )}
    />
  );
};
