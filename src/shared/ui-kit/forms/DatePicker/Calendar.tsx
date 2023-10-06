import ReactCalendar, { CalendarProps } from 'react-calendar';

import { ChakraProps, chakra, forwardRef } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

const ChakraCalendar = chakra(ReactCalendar, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1.25rem',
    '--column-gap': '0.5rem',
    '.react-calendar': {
      '&__navigation': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 0',
        borderBottom: '1px solid rgba(225, 228, 235, 0.2)',

        '&__label': {
          fontWeight: 500,
          fontSize: 'sm',
        },
      },
      '&__viewContainer': {
        margin: 'auto',
        padding: '1.25rem 0',
        overflow: 'hidden',
      },
      '&__month-view': {
        '&__weekdays': {
          marginBottom: '1rem',
          display: 'grid !important',
          gridTemplateColumns: 'repeat(7, 2rem)',
          columnGap: 'var(--column-gap)',

          '&__weekday': {
            textAlign: 'center',
            opacity: 0.5,
            fontSize: 'xs',
            abbr: {
              textDecoration: 'none',
            },
          },
        },
        '&__days': {
          gap: '0.25rem var(--column-gap)',
          display: 'grid !important',
          gridTemplateColumns: 'repeat(7, 2rem)',
        },
      },
      '&__tile': {
        '--rounded': '0.5rem',
        overflow: 'visible !important',
        position: 'relative',
        width: '2rem',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        fontSize: 'xs',
        fontWeight: '500',

        '&::before': {
          position: 'absolute',
          content: '""',
          inset: 0,
          left: 'calc(var(--column-gap) * -1)',
        },

        '&:not(&--range)': {
          borderRadius: 'var(--rounded)',
        },
        '&--active, &--hasActive': {
          background: 'orange.500',
        },
        '&--range': {
          '&Start': {
            borderTopLeftRadius: 'var(--rounded)',
            borderBottomLeftRadius: 'var(--rounded)',
          },
          '&End': {
            borderTopRightRadius: 'var(--rounded)',
            borderBottomRightRadius: 'var(--rounded)',

            '&::before': {
              right: '100%',
            },
          },
          '&:not(&End):not(&Start)': {
            backgroundColor: 'unset',
            borderRadius: 0,
          },
          '&:not(&Start)': {
            '&::before': {
              bg: 'dark.50',
              opacity: 0.1,
            },
          },
        },
      },
    },
  },
});

export const Calendar = forwardRef<CalendarProps & ChakraProps, typeof ChakraCalendar>((props, ref) => (
  <ChakraCalendar
    locale="en-US"
    prevLabel={<UIIcons.Common.LeftIcon color="orange.500" fontSize="lg" />}
    prev2Label={null}
    nextLabel={<UIIcons.Common.RightIcon color="orange.500" fontSize="lg" />}
    next2Label={null}
    {...props}
    ref={ref}
  />
));
