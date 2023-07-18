import {ReactNode} from "react";

export const enum IInvAccType {
    INDIVIDUAL = 'Individual',
    VC = 'VC',
    HEDGE_FUND = 'Hedge Fund',
    FAMILY_OFFICE = 'Family Office',
    DAO = 'DAO'
}

export const InvAccTypes: IInvAccType[] = [
    IInvAccType.INDIVIDUAL,
    IInvAccType.VC,
    IInvAccType.HEDGE_FUND,
    IInvAccType.FAMILY_OFFICE,
    IInvAccType.DAO
]

export interface IRawFieldProps {
    handleChange: (value: string) => void,
    value: string,
    label: string
}

export interface IRawCheckboxProps {
    handleChange: (value: boolean) => void,
    value: boolean,
    label: string
}

export const Fields = {
    PROJECT_NAME: 'Project Name',
    PROJECT_WEBSITE: 'Project Website'
}

export const enum ILotType {
    SAFE = 'SAFE',
    SAFT = 'SAFT',
    TOKEN_WARRANT = 'Token Warrant'
}
export const LotTypes = [
    ILotType.SAFE,
    ILotType.SAFT,
    ILotType.TOKEN_WARRANT
]
export interface IRawButtonProps {
    handleChange: (value: ILotType) => void,
    label: string
}
export interface IInvAccProps {
    handleChange: (value: any)=>void,
    data: string[],
    label: string,
    children:ReactNode
}
