import React from "react"
import { createClient } from "urql"
import { QueryClient } from "@tanstack/react-query"
import { Provider } from "urql"

import { QueryClientProvider } from "@tanstack/react-query"

const GraphqlContext: React.FCC = ({ children }) => {
	return (
		<Provider value={client}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</Provider>
	)
}

export const client = createClient({
	url: "https://hasura.otcmarsbase.io/v1/graphql",
	exchanges: [],
})

export const queryClient = new QueryClient()
