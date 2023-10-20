import { Global } from '@emotion/react';

export const ScrollbarStyles = (
  <Global
    styles={`
*::-webkit-scrollbar {
  width: 0.375rem;
  
}
*::-webkit-scrollbar-track {
  border-radius: 0.5rem;
  background-color: #1B1B1C;
}
*::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: #2A2B32;
}
`}
  />
);
