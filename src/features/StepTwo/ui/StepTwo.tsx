import {
    VStack,
} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {RawField} from "@shared/ui-kit/components/RawFIeld/RawField";
import {RawCheckbox} from "@shared/ui-kit/components/RawCheckbox/RawCheckbox";
import {UseFormReturn} from "react-hook-form";
import {FC} from "react";
import {TokenInfoFields} from "../consts";
import {SaftPriceInfo} from "../../PriceInfo/SaftPriceInfo/SaftPriceInfo";

export const StepTwo:FC<{form: UseFormReturn }> = observer((props) => {
        const {register, getValues, formState, setValue} = props.form;
        const {errors} = formState;

        return (
            <VStack bg={'skyblue'}>
                <RawField
                    register={{...register('investmentRound')}}
                    errors={errors}
                    id={'investmentRound'}
                    value={getValues('investmentRound')}
                    label={TokenInfoFields.INVESTMENT_ROUND}
                />

                <RawField
                    register={{...register('roundFDV'), type: 'number'}}
                    errors={errors}
                    id={'roundFDV'}
                    value={getValues('roundFDV')}
                    label={TokenInfoFields.ROUND_FDV}
                />
                <RawField
                    register={{...register('contractValue'), type: 'number'}}
                    errors={errors}
                    id={'contractValue'}
                    value={getValues('contractValue')}
                    label={TokenInfoFields.CONTRACT_VALUE}
                />
                <RawField
                    register={{...register('lockupPeriod'), type: 'number'}}
                    errors={errors}
                    id={'lockupPeriod'}
                    value={getValues('lockupPeriod')}
                    label={TokenInfoFields.LOOKUP_PERIOD}
                />
                <RawCheckbox
                    handleChange={(id,value)=>setValue(id,value)}
                    id={'alreadyOver'}
                    value={getValues('alreadyOver')}
                    label={TokenInfoFields.ALREADY_OVER}
                />
                <RawField
                    register={{...register('vestingPeriod'), type: 'number'}}
                    errors={errors}
                    id={'vestingPeriod'}
                    value={getValues('vestingPeriod')}
                    label={TokenInfoFields.VESTING_PERIOD}
                />
                <SaftPriceInfo
                    form={props.form}
                    ids={['targetFDV', 'pricePerEquity']}
                    label={'Price information'}
                    TokenInfoFields={TokenInfoFields}
                    helperText={'You must enter any 3 numbers, then is automatically calculated.'}
                />
            </VStack>
        )
    }
)
