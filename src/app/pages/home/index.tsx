import Layouts from '@app/layouts';
import { router } from '@app/logic';
import pages from '@app/pages';

const Home: React.FC = () => {
  return (
    <div>
      <div>HOME</div>
      <button
        onClick={() =>
          router.navigateComponent(pages.offers.home, { prop: 'AAA' })
        }
      >
        Click to offers
      </button>
    </div>
  );
};

Home.getLayout = ({ children }) => {
  return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default Home;
