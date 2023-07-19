import {
    Button,
    VStack,
} from "@chakra-ui/react";
import _ from "lodash";
import {DatePickerComp} from "src/features/DataPicker";
import {useForm} from '@shared/ui-kit';
import * as yup from 'yup';
import {
    Fields,
    ILotType,
    InvAccTypes, LotTypes, ShemaTypes
} from "../types";
import {RawField} from "./RawField";
import {MultiSelectWrapper} from "./MultiSelectWrapper";
import {RawCheckbox} from "./RawCheckbox";
import {useEffect} from "react";
import {useStore} from "@app/store";
import {observer} from "mobx-react-lite";

const schema = yup.object({
    ['ProjectName']: yup.string().required(`Project Name is required`),
    ['ProjectWebsite']: yup.string().required(`Project Website is required`),
    ['lotType']: yup.string().oneOf(LotTypes).required(`Need to select at least one`),
    ['typesOfSeller']: yup.array(),
    ['typesOfBuyer']: yup.array(),
    ['Telegram']: yup.string().required(`Telegram is required`),
    ['isReAssigned']: yup.boolean(),
    ['deadlineDate']: yup.string(),
    ['isDirectSeller']: yup.boolean(),
    ['isAdmToBuy']: yup.boolean(),
    ['isDataPickerDisabled']: yup.boolean(),
    ['isTokenWarrant']: yup.boolean()
});

function hasAllProperties(obj, props) {
    for (let i = 0; i < props.length; i++) {
        if (!obj.hasOwnProperty(props[i]))
            return false;
    }
    return true;
}

export const BasicInfo = observer(() => {

        const {SellOfferStore} = useStore();
        const {
            register,
            getValues,
            setValue,
            watch,
            handleSubmit,
            formState: {errors, isValid, isDirty, dirtyFields},
        } = useForm({
            schema, defaultValues: {
                typesOfBuyer: [],
                typesOfSeller: [],
                lotType: 'SAFE' as ILotType
            }
        });

        const data = watch();
        // const ProjectNameField = getFieldState('ProjectName')
        //     const ProjectNameField = getFieldState('ProjectName')

    // const onSubmit = (data,e) => console.log('dad', data, e)
    // useEffect(() => {
    //     // TypeScript users
    //     // const subscription = watch(() => handleSubmit(onSubmit)())
    //     const subscription = watch(handleSubmit(onSubmit));
    //     return () => subscription.unsubscribe();
    // }, [handleSubmit, watch]);

        useEffect(() => {
            //validation??
            const hasAllFieldsDirty = hasAllProperties(dirtyFields, ['ProjectName', 'ProjectWebsite', 'Telegram'])
            if (hasAllFieldsDirty &&  _.isEmpty(errors)) {
                console.log('set data to store',data)
                SellOfferStore.setBasicInfo(data)
                SellOfferStore.setStepOneSuccess(true)
            }else{
                SellOfferStore.setBasicInfo({})
                SellOfferStore.setStepOneSuccess(false)
            }
        }, [data])

        const selectTypeOfSeller = (accType) => {
            const currentSelletTypes = getValues('typesOfSeller')
            if (_.includes(currentSelletTypes, accType)) {
                setValue('typesOfSeller', _.without(currentSelletTypes, accType));
            } else {
                setValue('typesOfSeller', _.concat(currentSelletTypes, accType));
            }
        }

        function selectTypeOfBuyer(accType) {
            const currentBuyerTypes = getValues('typesOfBuyer');
            if (_.includes(currentBuyerTypes, accType)) {
                setValue('typesOfBuyer', _.without(currentBuyerTypes, accType));
            } else {
                setValue('typesOfBuyer', _.concat(currentBuyerTypes, accType));
            }
        }

        return (
            <VStack>
                <Button
                    onClick={() => console.log('invAccType', isValid, errors, isDirty, dirtyFields)}>
                    checker dev
                </Button>
                <RawField
                    register={register}
                    errors={errors}
                    handleChange={(id, value) => setValue(id, value)}
                    // isRequired={isRequired}
                    id={'ProjectName'}
                    value={getValues(Fields.PROJECT_NAME as ShemaTypes)}
                    label={Fields.PROJECT_NAME}
                />
                <RawField
                    register={register}
                    errors={errors}
                    id={'ProjectWebsite'}
                    handleChange={(id, value) => setValue(id, value)}
                    // isRequired={isRequired}
                    value={getValues(Fields.PROJECT_WEBSITE as ShemaTypes)}
                    label={Fields.PROJECT_WEBSITE}
                />
                <MultiSelectWrapper
                    handleChange={(value)=>setValue('lotType', value)}
                    data={LotTypes}
                    errors={errors}
                    id={'lotType'}
                    label={'Type of lot'}
                    children={
                        <>
                            {data.lotType === ILotType.SAFE ?
                                <RawCheckbox
                                    register={register}
                                    id={'isTokenWarrant'}
                                    value={getValues('isTokenWarrant')}
                                    label={'Token Warrant checkbox'}
                                    handleChange={(id,value) => setValue(id,value)}/>
                                : null}
                        </>
                    }
                />

                <MultiSelectWrapper
                    handleChange={selectTypeOfSeller}
                    data={InvAccTypes}
                    id={'typesOfSeller'}
                    errors={errors}
                    label={'Type of seller'}
                    children={null}
                />
                <RawCheckbox
                    register={register}
                    id={'isDirectSeller'}
                    value={getValues('isDirectSeller')}
                    label={'I am direct seller'}
                    handleChange={(id, value) => setValue(id, value)}
                />
                <RawField
                    register={register}
                    errors={errors}
                    id={'Telegram'}
                    handleChange={(id, value) => setValue(id, value)}
                    value={getValues('Telegram')}
                    label={'Telegram'}
                />
                <RawCheckbox
                    register={register}
                    id={'isReAssigned'}
                    value={getValues('isReAssigned')}
                    label={'Re-Assign'}
                    handleChange={(id, value) => setValue(id, value)}
                />
                <MultiSelectWrapper
                    handleChange={selectTypeOfBuyer}
                    data={InvAccTypes}
                    id={'typesOfBuyer'}
                    errors={errors}
                    label={'Type of buyer'}
                    children={null}
                />
                <RawCheckbox
                    value={getValues('isAdmToBuy')}
                    register={register}
                    id={'isAdmToBuy'}
                    label={'Admission to buy'}
                    handleChange={(id, value) => setValue(id, value)}
                />
                <DatePickerComp
                    handleGetDate={(value) => setValue('deadlineDate', value)}
                />
                <RawCheckbox
                    register={register}
                    id={'isDataPickerDisabled'}
                    value={getValues('isDataPickerDisabled')}
                    label={'Deadline → Permanent???'}
                    handleChange={(id, value) => setValue(id, value)}
                />
            </VStack>
        )
    }
)
