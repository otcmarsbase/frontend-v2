import { useEffect } from 'react';

import * as Layouts from '@app/layouts';
import pages from '@app/pages';
import { useRouter } from '@packages/router5-react-auto';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.navigateComponent(pages.marketplace.home, {}, {});
  }, [router]);

  return null;
};

Home.getLayout = ({ children }) => {
  return <Layouts.AppLayout containerSize="md">{children}</Layouts.AppLayout>;
};

export default Home;
