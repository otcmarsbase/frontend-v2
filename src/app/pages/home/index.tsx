import { useEffect } from 'react';
import * as Layouts from '@app/layouts';
import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import pages from '..';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.navigateComponent(pages.dashboard.offers, {});
  }, []);

  return (
    <Box>
      <Heading
        fontFamily="promo"
        fontSize="2rem"
        marginTop="3rem"
        marginBottom="2.25rem"
      >
        Home
      </Heading>
    </Box>
  );
};

Home.getLayout = ({ children }) => {
  return <Layouts.AppLayout containerSize="md">{children}</Layouts.AppLayout>;
};

export default Home;
