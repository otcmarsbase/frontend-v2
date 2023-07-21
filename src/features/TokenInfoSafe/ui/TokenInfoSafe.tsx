import {
    Box,
    VStack,
} from "@chakra-ui/react";
import {useForm} from '@shared/ui-kit';
import * as yup from 'yup';
import {FC, useEffect, useRef} from "react";
import {observer} from "mobx-react-lite";
import {RawField} from "@shared/ui-kit/components/RawFIeld/RawField";
import {SaftPriceInfo} from "../../PriceInfo/SaftPriceInfo/SaftPriceInfo";
import {UseFormReturn} from "react-hook-form";

export const TokenInfoSafeFields = {
    INVESTMENT_ROUND: 'Investment round',
    ROUND_FDV: 'Round FDV',
    PRICE_PER_EQUITY: 'Price per 0,01% equity'
}

export const TokenInfoSafe:FC<{form: UseFormReturn }> = observer((props) => {
    const {register, getValues, formState, setValue} = props.form;
    const {errors} = formState;

        return (
            <VStack bg={'skyblue'}>

                <RawField
                    register={register}
                    errors={errors}
                    id={'investmentRound'}
                    value={getValues('investmentRound')}
                    label={TokenInfoSafeFields.INVESTMENT_ROUND}
                />

                <SaftPriceInfo
                    form={props.form}
                    ids={['roundFDV', 'pricePerEquity']}
                    label={'Price information'}
                    TokenInfoFields={TokenInfoSafeFields}
                    helperText={'You must enter any 3 numbers, then is automatically calculated.'}
                />
            </VStack>
        )
    }
)
