import 'react-input-mask';

declare module 'react-input-mask' {
  export interface Props {
    formatChars?: Record<string, string>;
  }
}
