import pages from '@app/pages';
import { router } from '@app/logic';

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

export default Home;
