import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    HStack,
    Input,
    VStack,
    FormControl,
    FormErrorMessage,
    FormLabel
} from "@chakra-ui/react";
import {useState} from "react";
import _ from "lodash";
import {DatePickerComp} from "src/features/DataPicker";
import {useForm} from '@shared/ui-kit';
import * as yup from 'yup';
import {
    Fields,
    IInvAccProps,
    IInvAccType,
    ILotType,
    InvAccTypes,
    IRawCheckboxProps,
    IRawFieldProps, LotTypes
} from "../types";

const RawCheckbox = ({handleChange, value, label}: IRawCheckboxProps) => {
    const schema = yup.object({
        [label]: yup.string().required(`${label} is required`)
    });

    const {register} = useForm({schema});


    return (
        <HStack>
            <FormControl>
                <Checkbox {...register(label, {onChange: () => handleChange(!value)})} checked={value}>
                    {label}
                </Checkbox>
            </FormControl>
        </HStack>
    )
}

const RawField = ({handleChange, value, label}: IRawFieldProps) => {
    const schema = yup.object({
        [label]: yup.string().required(`${label} is required`)
    });

    const {
        register,
        isRequired,
        formState: {errors},
    } = useForm({schema});

    return (
        <HStack>
            <FormControl
                isRequired={isRequired(label)}
                isInvalid={Boolean(errors[label])}
            >
                <FormLabel>{label}</FormLabel>
                <Input placeholder={label}
                       value={value}
                       {...register(label, {onChange: (e) => handleChange(e.currentTarget.value)})
                       }
                />
                {errors[label] ?
                    <FormErrorMessage>{errors[label].message}</FormErrorMessage>
                    :
                    <Box height={'25px'}
                    />
                }

            </FormControl>
        </HStack>
    )
}

// const RawButton = ({handleChange, label}: IRawButtonProps) => {
//     const schema = yup.object({
//         [label]: yup.string()
//     });
//
//     const {register} = useForm({schema});
//     return (
//         <Button id={label} {...register[label]} onClick={(e) => handleChange(e.currentTarget.id as ILotType)}>
//             {label}
//         </Button>
//     )
//
// }
const MultiSelectWrapper = ({handleChange, data, label, children}: IInvAccProps) => {
    return (
        <HStack>
            <Box>{label}</Box>
            <ButtonGroup>
                {data.map(item => <Button
                    key={item}
                    id={item}
                    onClick={(e) => handleChange(e.currentTarget.id as IInvAccType)}
                >
                    {item}
                </Button>)}
                {children}
            </ButtonGroup>
        </HStack>
    )
}

export function BasicInfo() {
    const [projectName, setProjectName] = useState<string>('')
    const [projectWebsite, setProjectWebsite] = useState<string>('')
    const [lotType, setLotType] = useState<ILotType | null>(null)
    const [invAccType, setInvAccType] = useState<IInvAccType[]>([])
    const [telegram, setTelegram] = useState<string>('')
    const [isReAssigned, setIsReAssign] = useState<boolean | null>(null)
    const [isDirectSeller, setIsDirectSeller] = useState<boolean | null>(null);
    const [isAdmToBuy, setIsAdmToBuy] = useState<boolean | null>(null);
    const [isDataPickerDisabled, setIsDataPickerDisabled] = useState<boolean | null>(null)
    const [isTokenWarrant, setIsTokenWarrant] = useState<boolean | null>(null)
    const selectTypeOfSeller = (accType) => {
        if (_.includes(invAccType, accType)) {
            setInvAccType(prev => _.without(invAccType, accType));
        } else {
            setInvAccType(prev => _.concat(invAccType, accType));
        }
    }

    function selectTypeOfBuyer(accType) {
        if (_.includes(invAccType, accType)) {
            setInvAccType(prev => _.without(invAccType, accType));
        } else {
            setInvAccType(prev => _.concat(invAccType, accType));
        }
    }

    return (
        <VStack>
            <Button
                onClick={() => console.log('invAccType', invAccType)}>
                checker dev
            </Button>
            <RawField handleChange={setProjectName} value={projectName} label={Fields.PROJECT_NAME}/>
            <RawField handleChange={setProjectWebsite} value={projectWebsite} label={Fields.PROJECT_WEBSITE}/>
            <MultiSelectWrapper
                handleChange={setLotType}
                data={LotTypes}
                label={'Type of lot'}
                children={
                    <>
                        {lotType === ILotType.SAFE ?
                            <RawCheckbox
                                value={isTokenWarrant}
                                label={'Token Warrant checkbox'}
                                handleChange={() => setIsTokenWarrant(!isTokenWarrant)}/>
                            : null}
                    </>
                }
            />

            <MultiSelectWrapper
                handleChange={selectTypeOfSeller}
                data={InvAccTypes}
                label={'Type of seller'}
                children={null}
            />
            <RawCheckbox
                value={isDirectSeller}
                label={'I am direct seller'}
                handleChange={() => setIsDirectSeller(() => !isDirectSeller)}
            />
            <RawField
                handleChange={(text) => setTelegram(text)}
                value={telegram}
                label={'Telegram'}
            />
            <RawCheckbox
                value={isReAssigned}
                label={'Re-Assign'}
                handleChange={() => setIsReAssign(() => !isReAssigned)}
            />
            <MultiSelectWrapper
                handleChange={selectTypeOfBuyer}
                data={InvAccTypes}
                label={'Type of buyer'}
                children={null}
            />
            <RawCheckbox
                value={isAdmToBuy}
                label={'Admission to buy'}
                handleChange={() => setIsAdmToBuy(() => !isAdmToBuy)}
            />
            <DatePickerComp/>
            <RawCheckbox
                value={isDataPickerDisabled}
                label={'Deadline → Permanent???'}
                handleChange={() => setIsDataPickerDisabled(() => !isDataPickerDisabled)}
            />
        </VStack>
    )
}
