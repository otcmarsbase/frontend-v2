import { useEffect, useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export const LoginRequired: React.FCC<{
	showLoginWindowByDefault?: boolean
	loggedIn?: boolean
}> = ({ children, showLoginWindowByDefault, loggedIn }) => {
	// let { loggedIn, openLoginWindow } = useConnectedAddress()
	let [windowShown, setWindowShown] = useState(false)

	let openLoginWindow = () => {}
	useEffect(() => {
		if (!loggedIn && showLoginWindowByDefault && !windowShown) {
			openLoginWindow()
			setWindowShown(true)
		}
	}, [
		loggedIn,
		showLoginWindowByDefault,
		windowShown,
		openLoginWindow,
		setWindowShown,
	])

	return loggedIn ? <>{children}</> : <ConnectButton />
}
