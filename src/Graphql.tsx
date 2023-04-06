import React from "react"
import { createClient } from "urql"
import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query"

export const client = createClient({
    url: "https://hasura.otcmarsbase.io/v1/graphql",
    exchanges: []
})

export const queryClient = new QueryClient()
