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
import {FC, ReactNode, useEffect} from "react";
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
        projectName: 'Name',
        lotType: 'Type'
    },
    'SECOND_STEP': {
        roundFDV: 'Round FDV',
        contractValue: 'Contract value',
        tokensBought: 'Tokens bought',

    },
    'THIRD_STEP': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        pricePerToken: 'Price per token',
        pricePerEquity: 'Price per 0,01% equity'
    }

}
type StepTypes = 'FIRST_STEP' | 'SECOND_STEP' | 'THIRD_STEP'

interface IFirstStepInnerProps {
    data: any,
    step: StepTypes
}

const FirstStepInner = ({data, step}: IFirstStepInnerProps) => {

    let itemList = Object.entries(StepsText[step]).reduce((acc, curValue) => {
        let tempIbj = {}
        tempIbj['fieldName'] = curValue[1];
        tempIbj['fieldValue'] = data[curValue[0]]
        acc.push(tempIbj)
        return acc;


    }, [])

    return (
        <>
            {itemList.map((item) => <MenuItem  key={item.fieldName}>
                    <HStack>
                        <Box>
                            {item.fieldName}
                        </Box>
                        <Box>
                            {item.fieldValue?.toString()}
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

interface IStepWrapperProps {
    isSuccessFilled: boolean,
    step: StepTypes,
    children: ReactNode
}

const StepWrapper = ({isSuccessFilled, step, children}: IStepWrapperProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

// console.log({isSuccessFilled, step, children})
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
        const {SellOfferStore} = useStore();
        const {stepOneSuccess, stepTwoSuccess, stepThreeSuccess, basicInfo} = SellOfferStore;

        function publishLot() {

        }

        return (
            <VStack
                bg={'orange'}>
                <SummaryHeader/>
                <StepWrapper
                    isSuccessFilled={stepOneSuccess}
                    step={'FIRST_STEP'}
                    children={stepOneSuccess ?
                        <FirstStepInner
                            data={SellOfferStore.basicInfo}
                            step={'FIRST_STEP'}
                        /> : null
                    }
                />
                <StepWrapper
                    isSuccessFilled={stepTwoSuccess}
                    step={'SECOND_STEP'}
                    children={stepOneSuccess ?
                        <FirstStepInner
                            data={basicInfo}
                            step={'SECOND_STEP'}
                        /> : null
                    }
                />
                <StepWrapper
                    isSuccessFilled={stepThreeSuccess}
                    step={'THIRD_STEP'}
                    children={stepThreeSuccess ?
                        <FirstStepInner
                            data={basicInfo}
                            step={'THIRD_STEP'}
                        /> : null
                    }
                />
                <Button onClick={publishLot}>Publish Lot</Button>
            </VStack>
        )
    }
)
