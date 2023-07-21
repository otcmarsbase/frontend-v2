import {
    Box, Button, FormControl, FormLabel, HStack, Input,
    VStack,
} from "@chakra-ui/react";
import {FC} from "react";
import {UseFormReturn} from "react-hook-form";
import {ButtonLabelsByLotType, InputVarsByLotType, StepThreeFields} from "../consts";
import {ILotType} from "../../StepOne/types";

export const StepThree: FC<{
    form: UseFormReturn,
    lotType: ILotType,
    handleRecountValues: (id: string, value: string) => void
}> = (props) => {
    const {form, lotType, handleRecountValues} = props;
    const {getValues} = form;
    return (
        <VStack
        bg={'orange'}
        >
            <Box>
                Pricing model
            </Box>
            <VStack>
                <HStack>
                    <Button>
                        {ButtonLabelsByLotType[lotType].leftBtnLabel}
                    </Button>
                    <Button>
                        {ButtonLabelsByLotType[lotType].rightBtnLabel}
                    </Button>
                </HStack>
                {
                    InputVarsByLotType[lotType].map(item=>{
                        return <FormControl>
                            <FormLabel>{item.fieldLabel}</FormLabel>
                            <Input placeholder={'Amount'}
                                   value={getValues(item.id)}
                                   type={'number'}
                                   id={item.id}
                                   onChange={(e) => handleRecountValues(e.currentTarget.id, e.currentTarget.value)}
                            />
                        </FormControl>
                    })
                }


            </VStack>

        </VStack>
    )
}

