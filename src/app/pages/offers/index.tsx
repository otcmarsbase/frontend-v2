import {useState, useEffect} from "react";
import {ModalController} from "@app/logic";
import {TypeOfOffer} from "../../../features/Modals/TypeOfOffer/TypeOfOffer";
import {Box} from "@chakra-ui/react";
import {CreateOffer} from "@app/pages/offers/create/CreateOffer";

type TypeOfDeal = 'Buy' | 'Sell';

const Create = ({typeOfDeal = 'Buy'}) => {

    return (
        <Box>
            {typeOfDeal === 'Buy' ? <CreateOffer/> : <Box>Sell offer</Box>}
        </Box>

    )

};

// Create.getLayout = ({ children }) => {
//   return <Layouts.TestLayout>{children}</Layouts.TestLayout>;
// };

export default Create;



