import React from "react"

type AppState = {}

type Messages = {}

const Context = React.createContext<{ state: AppState; msgs: Messages }>({
	msgs: {},
	state: {},
})

export const useAppContext = React.useContext(Context)

export const AppContextProvider: React.FCC = ({ children }) => {
	const [state, setState] = React.useState<AppState>({})

	return (
		<Context.Provider value={{ msgs: {}, state }}>
			{children}
		</Context.Provider>
	)
}
