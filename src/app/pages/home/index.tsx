import pages from '@app/pages';
import { router } from '@app/logic';
import {BasicInfo} from "../../../features/BasicInfo";
import {Summary} from "../../../features/Summary";

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
        <Summary />
    </div>
  );
};

export default Home;
