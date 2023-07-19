import {
    Box, Button,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {FC, ReactNode} from "react";
import {SuccessIcon} from "../asssets/SuccessIcon";
import {NotTouchedIcon} from "../asssets/NotTouchedIcon";
import {observer} from "mobx-react-lite";
import {useStore} from "@app/store";
import _ from "lodash";


const SummaryHeader = () => {
    return (
        <Box>
            <Box>
                Final selection
            </Box>
            <Box>
                Set suitable conditions
            </Box>
        </Box>

    )
}

interface SummaryProps {
    children: ReactNode
}

const StepHeader = ({stepData, isSuccessFilled}) => {
    return (
        <HStack>
            {isSuccessFilled ? <SuccessIcon/> : <NotTouchedIcon/>}
            <Box>
                Step {stepData.step}
            </Box>
            <Box>
                {stepData.label}
            </Box>
        </HStack>
    )
}

interface IFirstStep {
    name: string,
    type: string

}

interface ISecondStep {
    fdv: string,
    pricePerEquity?: string,
    pricePerToken?: string,
    contractValue?: string,
    tokensBought?: string
}

interface ISecondStep {
    contractSize: string,
    minDealSize: string,
    discountFrom: string
}

const StepsText = {
    'FIRST_STEP': {
        ProjectName: 'Name',
        Type: 'Type'
    },
    'SECOND_STEP': {
        fdv: 'Round FDV',
        contractValue: 'Contract value',
        tokensBought: 'Tokens bought',
        pricePerToken: 'Price per token',
        pricePerEquity: 'Price per 0,01% equity'
    },
    'THIRD_STEP': {
        contractSize: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        discountFrom: 'Discount from '
    }

}
type StepTypes = 'FIRST_STEP' | 'SECOND_STEP' | 'THIRD_STEP'
interface IFirstStepInnerProps {
    data: any,
    step: StepTypes
}
const FirstStepInner = ({data, step}: IFirstStepInnerProps) => {
    console.log("datttt1222",data, Object.keys(StepsText[step]))


    console.log("datttt",_.pickBy(data, Object.keys(StepsText[step])))

    return (
        <>
            {Object.entries(data).map((item) => <MenuItem>
                    <HStack>
                        <Box>
                            {StepsText[step][item[0]]}
                        </Box>
                        <Box>
                            {/*// @ts-ignore*/}
                            {item[1] ? item[1].toString() : ''}
                        </Box>
                    </HStack>
                </MenuItem>
            )

            }
        </>
    )
}
const EStepLabels = {
    'FIRST_STEP': {label: 'Project info', index: 1},
    'SECOND_STEP': {label: 'Details about the token', index: 2},
    'THIRD_STEP': {label: 'Pricing details', index: 3}
}
interface IStepWrapperProps{
    isSuccessFilled: boolean,
    step: StepTypes,
    children: ReactNode
}
const StepWrapper = ({isSuccessFilled, step, children}: IStepWrapperProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
console.log({isSuccessFilled, step, children})
    function handleClick() {
        isOpen ? onClose() : onOpen()
    }

    return (
        <Menu isOpen={isOpen}>
            <HStack>
            <MenuButton
                // variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{bg: useColorModeValue("gray.100", "gray.700")}}
                aria-label="Courses"
                bg={'skyblue'}
                fontWeight="normal"
                onClick={isSuccessFilled ? handleClick : null}
            >

                <StepHeader
                    stepData={{step: EStepLabels[step].index, label: EStepLabels[step].label}}
                    isSuccessFilled={isSuccessFilled}
                />

                {isSuccessFilled &&
                    <>{isOpen ? '+' : '^'}</>
                }
            </MenuButton>
            </HStack>
            <MenuList>
                {children}
            </MenuList>
        </Menu>
    )
}

export const Summary = observer(() => {
    const { SellOfferStore } = useStore();
    console.log('SellOfferStore',SellOfferStore.basicInfo)
    function publishLot(){

    }
    return (
        <VStack
            bg={'orange'}>
            <SummaryHeader/>
            <StepWrapper isSuccessFilled={SellOfferStore.stepOneSuccess} step={'FIRST_STEP'} children={
                <FirstStepInner
                    data={SellOfferStore.basicInfo}
                    step={'FIRST_STEP'}
                />
            }
            />
            <StepWrapper isSuccessFilled={false} step={'SECOND_STEP'} children={null}/>
            <StepWrapper isSuccessFilled={false} step={'THIRD_STEP'} children={null}/>
            <Button onClick={publishLot} >Publish Lot</Button>
        </VStack>
    )
}
)
