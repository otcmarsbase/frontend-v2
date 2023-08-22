import React, {FC, PropsWithChildren, ReactNode} from "react";

import {Heading, HStack} from "@chakra-ui/react";

export interface IRowChip {
    label: string,
    children: ReactNode
}

export const RowChip: FC<PropsWithChildren<IRowChip>> = ({label, children}) => {
    return (
        <HStack>
            <Heading variant='h5' color='dark.50' fontWeight='600'>
                {label}
            </Heading>
            <Heading>
                {children}
            </Heading>
        </HStack>
    )
}
