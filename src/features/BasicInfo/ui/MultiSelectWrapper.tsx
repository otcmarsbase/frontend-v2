import {IInvAccProps, IInvAccType} from "../types";
import {Box, Button, ButtonGroup, FormErrorMessage, HStack} from "@chakra-ui/react";

export const MultiSelectWrapper = ({handleChange, data, label, children, errors, id}: IInvAccProps) => {
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
                </Button>)
                }
                {errors[id] ?
                    <FormErrorMessage>{errors[id].message}</FormErrorMessage>
                    :
                    <Box height={'25px'}
                    />
                }
                {children}
            </ButtonGroup>
        </HStack>
    )
}
