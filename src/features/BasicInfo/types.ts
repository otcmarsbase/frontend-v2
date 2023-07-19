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
export type ShemaTypes = 'ProjectName' | 'ProjectWebsite' | 'lotType' | 'Telegram' | 'isReAssigned' | 'isDirectSeller' | 'isAdmToBuy' | 'isDataPickerDisabled' | 'isTokenWarrant' | 'typesOfSeller' | 'typesOfBuyer' | 'deadlineDate'
export interface IRawFieldProps {
    value: any,
    id:ShemaTypes,
    register: any;
    label: string;
    errors: any;
    handleChange: (name:ShemaTypes,value:string)=>void
}
export interface IRawCheckboxProps {
    handleChange: (name:ShemaTypes,value: boolean) => void,
    value: boolean,
    label: string,
    register: any;
    id: ShemaTypes
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
    children:ReactNode,
    id?: ShemaTypes,
    errors?: any;

}
