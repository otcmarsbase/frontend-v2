import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { ALCHEMY_API_KEY } from '@/vite-env'

const { chains, provider } = configureChains(
	[mainnet, polygon, optimism, arbitrum],
	[alchemyProvider({ apiKey: ALCHEMY_API_KEY}), publicProvider()]
)

const { connectors } = getDefaultWallets({
	appName: 'My RainbowKit App',
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

export const RainbowKitWrapper: React.FCC = ({ children }) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
		</WagmiConfig>
	)
}
