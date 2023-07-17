import { PropsWithChildren } from 'react';

export const TestLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div style={{ padding: '100px', backgroundColor: 'red' }}>
      <h1>With layout</h1>
      <div>{children}</div>
    </div>
  );
};
