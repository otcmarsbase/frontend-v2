import React from 'react'

import Eng from './dictionary/en.json'
import Rus from './dictionary/ru.json'

export const baseLocalization = {
    Eng,
    Rus,
}

export type Dict = typeof baseLocalization.Eng

export const LocalizationContext = React.createContext<Dict>(
    baseLocalization.Eng
)

export function useTranslation(): Dict
export function useTranslation<T extends keyof Dict>(key: T): Dict[T]
export function useTranslation<T extends keyof Dict>(key?: T) {
    const l10n: Dict = React.useContext(LocalizationContext)
    if (typeof key === 'undefined') return l10n
    return l10n[key]
}