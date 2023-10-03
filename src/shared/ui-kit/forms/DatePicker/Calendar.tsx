import ReactCalendar, { CalendarProps } from 'react-calendar';

import { ChakraProps, chakra, forwardRef } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { UIIcons } from '@shared/ui-icons';

const calendarCss = css`
  .react-calendar {
    &__navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6rem 0.5rem;
      order: 1;

      &__label {
        font-weight: 500;
        opacity: 0.5;
        font-size: 0.875rem;
      }
    }

    &__viewContainer {
      max-width: 14rem;
      margin: auto;
      padding: 1rem 0 1.5rem;
      order: 3;
    }

    &__tile {
      --rounded: 0.25rem;

      abbr {
        min-width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        font-size: 0.75rem;
      }

      &:not(&--range) {
        border-radius: var(--rounded);
      }

      &--active,
      &--hasActive {
        abbr {
          background: var(--chakra-colors-orange-500);
        }
      }

      &--range {
        &Start {
          abbr {
            border-top-left-radius: var(--rounded);
            border-bottom-left-radius: var(--rounded);
          }
        }

        &End {
          abbr {
            border-top-right-radius: var(--rounded);
            border-bottom-right-radius: var(--rounded);
          }
        }

        &:not(&End):not(&Start) {
          abbr {
            border-radius: 0;
          }
        }
      }
    }

    &__month-view {
      &__weekdays {
        margin-bottom: 1rem;

        &__weekday {
          text-align: center;
          opacity: 0.5;
          font-size: 0.75rem;

          abbr {
            text-decoration: none;
          }
        }
      }
    }
  }
`;

const ChakraCalendar = chakra(ReactCalendar, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
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
    css={calendarCss}
  />
));
