import { AppLayout } from '@app/layouts';

export const NotFound: React.FC = () => {
  return <>Not found</>;
};

NotFound.getLayout = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default NotFound;
