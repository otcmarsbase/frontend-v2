import { Fragment, useEffect } from 'react';

import { MBPages } from '@app/pages';
import { useRouter } from '@packages/router5-react-auto';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const router = useRouter();

  useEffect(() => {
    router.navigateComponent(MBPages.Dashboard.Lots, {}, { replace: true });
  }, [router]);

  return <Fragment />;
};

export default Home;
