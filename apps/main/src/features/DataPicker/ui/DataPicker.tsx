import React, {forwardRef, ReactNode, useState} from "react";
import DatePicker, {CalendarContainer, ReactDatePickerCustomHeaderProps} from 'react-datepicker';
import {DataPickerInputIcon} from '../assets/DataPickerInputIcon'
import "react-datepicker/dist/react-datepicker.css";
import {Button} from "@/components";
import {Box} from "@chakra-ui/react";
import './index.scss';
import {range} from "lodash";
import {getMonth, getYear, format, getDate, addDays} from 'date-fns';
import {ArrowLeft} from "@/features/DataPicker/assets/ArrowLeft";
import {ArrowRight} from "@/features/DataPicker/assets/ArrowRight";
import {DateIcon} from "@/features/DataPicker/assets/DateIcon";
import {TimeIcon} from "@/features/DataPicker/assets/TimeIcon";
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from "react-time-picker";
import 'react-clock/dist/Clock.css';
interface IDataPickerInput {
  value: Date,
  onClick: () => void
}

interface ICalendarWrapper {
  className: string,
  children: ReactNode
}

interface ICustomHeader {
  monthDate: Date,
  customHeaderCount: number,
  decreaseMonth: () => void,
  increaseMonth: () => void
}

const years = range(1990, getYear(new Date()) + 1, 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CustomHeader = ({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                      }: ReactDatePickerCustomHeaderProps) => {
  const [value, onChange] = useState('10:00');


  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: '11px 8px 9px 8px',
          strokeWidth: '1px',
          stroke: '#E1E4EB',
          borderBottom: '1px solid rgba(255, 255, 255, .2)',
          color: '#FFF',
          height: '40px'
        }}
      >
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <ArrowLeft/>
        </button>
        <Box display={'flex'} gap={'10px'} alignItems={'center'} opacity={0.5}>
          {months[getMonth(date)]} {getYear(date)}
        </Box>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <ArrowRight/>
        </button>
      </Box>
      <Box className={'date_picker__date_time-tab'}>
        <Box className={'date_picker__date_time_wrapper'}>
          <DateIcon/>
          <Box>
            {format(date, "dd.MM.yyyy")}
          </Box>
        </Box>
        <Box className={'date_picker__date_time_wrapper'}>
          <TimeIcon/>
          <Box>

            <TimePicker
              // @ts-ignore
              onChange={onChange}
              value={value}
              disableClock={true}
              clearIcon={null}
            />


          </Box>
        </Box>
      </Box>
    </Box>
  )
}
const DataPickerInput = (({value, onClick}: IDataPickerInput) => (
  <Button
    _hover={{borderColor: '#94969A', color: '#94969A', stroke: '#94969A'}}
    h='32px'
    border='2px'
    borderColor='#686A6E'
    borderRadius='8px'
    stroke={'#686A6E'}
    color='#686A6E'
    bg='#000000'
    onClick={onClick}
    px={'12px'}
    w={'342px'}
    py={'4px'}
    justifyContent={'flex-start'}
  >
    <Box
      _hover={{color: '#94969A'}}
      display='flex'
      gap='10px'
      alignItems={'center'}
      justifyContent={'start'}
    >
      <Box><DataPickerInputIcon/></Box>
      <Box fontSize={'14px'}>{`${value ? value : 'Select date'}`}</Box>
    </Box>
  </Button>
));

export const DataPicker = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());

    function decreaseMonth() {
      const newMonth = (getMonth(startDate) - 1);
      const newDate = startDate.setMonth(newMonth)
      setStartDate(prev => new Date(newDate))
    }

    function increaseMonth() {
      const newMonth = (getMonth(startDate) + 1);
      const newDate = startDate.setMonth(newMonth)
      setStartDate(prev => new Date(newDate))
    }

    function increaseYear() {
      const newMonth = (getYear(startDate) + 1);
      const newDate = startDate.setFullYear(newMonth)
      setStartDate(prev => new Date(newDate))
    }

    function decreaseYear() {
      const newMonth = (getYear(startDate) + 1);
      const newDate = startDate.setFullYear(newMonth)
      setStartDate(prev => new Date(newDate))
    }

    return (
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate((prevState) => date)}
        dateFormat="dd.MM.yyyy"
        showPopperArrow={false}
        popperPlacement="top-start"
        popperClassName="DataPickerPopper"
        customInput={<DataPickerInput value={startDate} onClick={() => {
        }}/>}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
        calendarStartDay={1}
        includeDates={[new Date(), addDays(new Date(), 1)]}
        calendarClassName="Calendar"
        adjustDateOnChange
        renderCustomHeader={() => <CustomHeader
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
          increaseMonth={()=>increaseMonth()}
          prevMonthButtonDisabled={false}
          nextMonthButtonDisabled={false}
        />}
      />
    )
  }
;
