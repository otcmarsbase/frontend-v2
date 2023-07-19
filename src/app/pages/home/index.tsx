import pages from '@app/pages';
import {router} from '@app/logic';
// import {Summary} from "../../../features/Summary";
import {BasicInfo} from "../../../features/BasicInfo";
import {Summary} from "../../../features/Summary";
import {Box, HStack, VStack} from "@chakra-ui/react";

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
            <HStack
            justifyContent={'center'}
            mt={'20px'}
            gap={'20px'}
            >
                <BasicInfo/>
                <Box
                    h={'100%'}
                alignSelf={'flex-start'}
                >
                    <Summary/>
                </Box>

            </HStack>

        </div>
    );
};

export default Home;
