import {ConnectBtn} from "@app/logic/web3Modal/ConnectButton";
import {initWagmiClient} from "@app/logic/web3Modal/lib/initWagmiClient";
import {WagmiConfig} from 'wagmi';

export const Web3ModalComponent = () => {
    const wagmiConfig = initWagmiClient();
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <ConnectBtn/>
            </WagmiConfig>
        </>
    );
};
