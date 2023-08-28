import { AppLayout } from '@app/layouts';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return <>Marketplace</>;
};

Home.getLayout = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Home;
