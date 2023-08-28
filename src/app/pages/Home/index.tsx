import { Fragment, useEffect } from 'react';

import { MBPages } from '@app/pages';
import { useRouter } from '@packages/router5-react-auto';

export interface HomeProps {}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.navigateComponent(MBPages.Marketplace.Home, {}, { replace: true });
  }, [router]);

  return <Fragment />;
}
