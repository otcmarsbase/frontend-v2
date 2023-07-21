import {CreateOffer} from "@app/pages/createOffer";

const Home: React.FC = () => {
    return (
        <div>
            {/*<div>HOME</div>*/}
            {/*<button*/}
            {/*  onClick={() =>*/}
            {/*    router.navigateComponent(pages.offers.home, { prop: 'AAA' })*/}
            {/*  }*/}
            {/*>*/}
            {/*  Click to offers*/}
            {/*</button>*/}
            <CreateOffer/>

        </div>
    );
};

export default Home;
