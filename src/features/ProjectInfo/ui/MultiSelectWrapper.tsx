import {Box, Button, ButtonGroup, FormControl, FormErrorMessage, HStack} from "@chakra-ui/react";
import {ReactNode} from "react";

export interface IInvAccProps {
    data: string[],
    label: string,
    children:ReactNode,
    id?: any,
    errors?: any;
    handleChange: (id:string, value: string)=>void
}

export const MultiSelectWrapper = ({data, label, children, errors, handleChange, id}: IInvAccProps) => {
    return (
        <FormControl>
            <Box>{label}</Box>
            <ButtonGroup>
                {data.map(item => <Button
                    key={item}
                    id={item}
                    onClick={(e)=>handleChange(id,e.currentTarget.id)}
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
        </FormControl>
    )
}
