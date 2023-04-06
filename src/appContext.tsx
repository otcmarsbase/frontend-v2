import React from "react"

type AppState = {}

type Messages = {}

const Context = React.createContext<{ state: AppState; msgs: Messages }>({
	msgs: {},
	state: {},
})

