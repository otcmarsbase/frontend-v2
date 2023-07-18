import {
    Box,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {ReactNode} from "react";
import {SuccessIcon} from "../asssets/SuccessIcon";
import {NotTouchedIcon} from "../asssets/NotTouchedIcon";


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

const SuccessFilledItemHeader = ({stepData, isSuccessFilled}) => {
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
    1: {
        name: 'Name',
        type: 'Type'
    },
    2: {
        fdv: 'Round FDV',
        contractValue: 'Contract value',
        tokensBought: 'Tokens bought',
        pricePerToken: 'Price per token',
        pricePerEquity: 'Price per 0,01% equity'
    },
    3: {
        contractSize: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        discountFrom: 'Discount from '
    }

}

const FirstStepInner = ({name, type}) => {
    return (
        <>
            <MenuItem>
                <HStack>
                    <Box>
                        Name
                    </Box>
                    <Box>
                        {name}
                    </Box>
                </HStack>
            </MenuItem>
            <MenuItem>
                <HStack>
                    <Box>
                        Type
                    </Box>
                    <Box>
                        {type}
                    </Box>
                </HStack>
            </MenuItem>
        </>
    )
}
const EStepLabels = {
    'FIRST_STEP': {label:'Project info',index:1},
    'SECOND_STEP': {label:'Details about the token',index:2},
    'THIRD_STEP': {label:'Pricing details',index:3}
}

const StepWrapper = ({isSuccessFilled, step, children}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    function handleClick() {
        isOpen ? onClose() : onOpen()
    }

    return (
        <Menu isOpen={isOpen}>
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
                onClick={handleClick}
            >

                <SuccessFilledItemHeader
                    stepData={{step: EStepLabels[step].index, label: EStepLabels[step].label}}
                    isSuccessFilled={isSuccessFilled}
                />

                {isOpen ? '+' : '^'}
            </MenuButton>
            <MenuList>
                {children}
            </MenuList>
        </Menu>
    )
}

export function Summary({step, data}) {
    return (
        <VStack
            bg={'orange'}>
            <SummaryHeader/>
            <StepWrapper isSuccessFilled={true} step={step} children={<FirstStepInner name={data['FIRST_STEP'].name} type={data['FIRST_STEP'].type} />}/>
            <StepWrapper isSuccessFilled={true} step={step} children={data}/>

            <StepWrapper isSuccessFilled={true} step={step} children={data}/>

        </VStack>
    )
}
