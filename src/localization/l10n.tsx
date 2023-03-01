import React from 'react'

import Eng from './dictionary/en.json'
import Rus from './dictionary/ru.json'

export const baseLocalization = {
    Eng,
    Rus,
}

type Dict = typeof baseLocalization.Eng

export const LocalizationContext = React.createContext<Dict>(
    baseLocalization.Eng
)

