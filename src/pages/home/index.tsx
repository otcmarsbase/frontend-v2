import pages from '@pages';
import { router } from '@logic/router';

const Home: React.FC = () => {
  return (
    <div>
      <div>HOME</div>
      <button onClick={() => router.navigateComponent(pages.offers.home, {})}>Click to offers</button>
    </div>
  );
};

export default Home;
