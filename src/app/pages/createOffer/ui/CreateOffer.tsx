import {HStack, VStack} from "@chakra-ui/react";
import {useForm, UseFormProps} from "@shared/ui-kit";
import {YupProjectInfoShema} from "../../../../features/ProjectInfo/consts";
import {YupTokenInfoShema} from "../../../../features/TokenInfo/consts";
import {ProjectInfo} from "../../../../features/ProjectInfo";
import {Summary} from "../../../../features/Summary";
import {TokenInfo} from "../../../../features/TokenInfo";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@app/store";
import {hasAllProperties} from "@app/pages/createOffer/lib/utils";
import _ from "lodash";
import {TokenInfoSafe} from "../../../../features/TokenInfoSafe";

export const CreateOffer = observer(() => {
    const {SellOfferStore} = useStore();
    const {setBasicInfo, setStepOneSuccess, setStepOneWasOnSuccess, stepOneWasOnSuccess, stepOneSuccess} = SellOfferStore;
    const schema = YupProjectInfoShema.concat(YupTokenInfoShema);

    const form = useForm({
        schema, defaultValues: {
            typesOfBuyer: [],
            typesOfSeller: []
        }
    });

    const data = form.watch();

    useEffect(() => {
        const hasAllFieldsDirty = hasAllProperties(form.formState.dirtyFields, ['projectName', 'projectWebsite', 'telegram'])
        console.log('hasAllFieldsDirty',hasAllFieldsDirty, '_.isEmpty(form.formState.errors)',_.isEmpty(form.formState.errors))
        if (hasAllFieldsDirty && _.isEmpty(form.formState.errors)) {
            setBasicInfo(data)
            setStepOneSuccess(true)
            setStepOneWasOnSuccess(true)
        } else {
            setBasicInfo({})
            setStepOneSuccess(false)
        }

    }, [data])


    // const prevTargetFDV = usePrevious(target_fdv);
    // const prevPricePerEq = usePrevious(price_per_equity);
    //
    // useEffect(() => {
    //     if (target_fdv && price_per_equity) {
    //         if (prevTargetFDV !== target_fdv) {
    //             setValue('price_per_equity', (Number(target_fdv) + 1).toString())
    //         }
    //         if (prevPricePerEq !== price_per_equity) {
    //             setValue('target_fdv', (Number(price_per_equity) + 2).toString())
    //         }
    //     }
    // }, [data])


    return (
        <HStack
            justifyContent={'center'}
            mt={'20px'}
            gap={'20px'}
        >
            <VStack>
                <ProjectInfo
                    // @ts-ignore
                    form={form}
                />

                {stepOneWasOnSuccess || stepOneSuccess ?
                <>{data.lotType === "SAFE" ?
                    <TokenInfoSafe
                        // @ts-ignore
                        form={form}
                    />
                    :
                    <TokenInfo
                        // @ts-ignore
                        form={form}
                    />
                }</>
                    :
                    null
                }

            </VStack>
            <VStack
                h={'100%'}
                alignSelf={'flex-start'}
            >
                <Summary/>
            </VStack>

        </HStack>
    )
})
