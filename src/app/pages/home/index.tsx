import { useEffect } from 'react';

import * as Layouts from '@app/layouts';
import { appManager } from '@app/logic';
import { Button } from '@chakra-ui/react';
import { RpcClientAxiosAdapter } from '@packages/berish-rpc-axios';
import { RpcClient } from '@packages/berish-rpc-client';
import { useRouter } from '@packages/router5-react-auto';
import { RPC } from '@shared/schema/api-gateway';
import axios from 'axios';

const Home: React.FC = () => {
  const {
    serviceManager: { backendApiService },
  } = appManager;

  const router = useRouter();

  useEffect(() => {
    // router.navigateComponent(pages.otcDesk.home, {});
  }, [router]);

  const onClick = async () => {
    const response = await backendApiService.schema.send('test.hello', {
      firstName: '123',
      lastName: 'Akhmetshin',
    });
    console.log({ response });
  };

  return <Button onClick={onClick}>TestHello</Button>;
};

Home.getLayout = ({ children }) => {
  return <Layouts.AppLayout containerSize="md">{children}</Layouts.AppLayout>;
};

export default Home;
