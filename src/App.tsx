import { AppContextProvider } from "@/appContext"
import { routes } from "@/AppRoutes"
import { RainbowKitWrapper } from "@/RainbowKit"
import React from "react"
import { BrowserRouter, useRoutes } from "react-router-dom"

type AppProps = {}

export const App: React.FC<AppProps> = ({}) => {
	return (
		<BrowserRouter>
			<RainbowKitWrapper>
				<AppContextProvider>
					<AppRoutes />
				</AppContextProvider>
			</RainbowKitWrapper>
		</BrowserRouter>
	)
}
const AppRoutes: React.FC = () => useRoutes(routes as any)
