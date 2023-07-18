import {IInvAccProps, IInvAccType} from "../types";
import {Box, Button, ButtonGroup, HStack} from "@chakra-ui/react";

export const MultiSelectWrapper = ({handleChange, data, label, children}: IInvAccProps) => {
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
