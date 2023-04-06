import React from "react"

type AppState = {}

type Messages = {}

const Context = React.createContext<{ state: AppState; msgs: Messages }>({
	msgs: {},
	state: {},
})

export const useAppContext = React.useContext(Context)

export const AppContextProvider: React.FCC = ({ children }) => {
	return <Context.Provider value={}>{children}</Context.Provider>
}
