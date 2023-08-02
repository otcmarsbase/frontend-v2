import {PropsWithChildren} from 'react';
import {ModalController, router} from '@app/logic';
import pages from '@app/pages';
import {Box, Container, VStack} from '@chakra-ui/react';
import {
    Header,
    Footer,
    DiscordIcon,
    RedditIcon,
    TelegramIcon,
    LinktreeIcon,
    TwitterIcon,
    MediumIcon,
} from '@shared/ui-kit';
import {observer} from "mobx-react-lite";
import {useStore} from "@app/store";
import {Web3ModalComponent} from "@app/logic/web3Modal";
import {TypeOfOfferModal} from "@shared/ui-kit/components/Modal/TypeOfOffer/TypeOfOfferModal";

export const AppLayout: React.FC<PropsWithChildren<{}>> = observer(({children}) => {
    const copyright = `© All Rights Reserved MarsBase, ${new Date().getFullYear()}`;
    const {SellOfferStore} = useStore();
    const {setTypeOfDeal} = SellOfferStore;

    async function pushToOffers() {
        const typeOfDeal: string = await ModalController.create(TypeOfOfferModal, {});
        setTypeOfDeal(typeOfDeal)
        router.navigateComponent(pages.offers.create, {})
    }

    return (
        <VStack minHeight="100vh" width="100%" gap="0">
            <Box width="100%" flexShrink="0">
                <Header
                    onLogoClick={() => router.navigateComponent(pages.home, {})}
                    menuItems={[
                        {label: '🔥 ZERO-LOCK OFFERS', href: {url: '#'}},
                        {label: 'BEST BID AUCTION'},
                        {label: 'OTC DESK'},
                        {label: 'My Dashboard', href: {url: '/dashboard'}},
                        {
                            label: 'Create offer',
                            onClick: pushToOffers,
                        },
                    ]}
                    rightContent={<Web3ModalComponent/>}
                />
            </Box>
            <Box flex="1" width="100%">
                <Container>{children}</Container>
            </Box>
            <Box width="100%" marginTop="auto">
                <Footer
                    links={[
                        {label: 'About', href: {url: '#'}},
                        {label: 'Security', href: {url: '#'}},
                        {label: 'Fee Structure', href: {url: '#'}},
                        {label: 'API Docs', href: {url: '#'}},
                        {label: 'Support', href: {url: '#'}},
                        {label: 'Cookie Policy', href: {url: '#'}},
                        {label: 'Terms Of Use', href: {url: '#'}},
                        {label: 'Privacy Policy', href: {url: '#'}},
                    ]}
                    about={{
                        title: 'MARSBASE dOTC Desk',
                        description:
                            'A perfect place for crypto whales and retail investors to trade large volumes of any digital asset with no price slippage or market impact.',
                    }}
                    socials={[
                        {
                            icon: DiscordIcon,
                            href: 'https://discord.com/channels/889519633890177074/892286634224132106',
                        },
                        {
                            icon: RedditIcon,
                            href: 'https://www.reddit.com/r/MarsbaseCryptoOTC/',
                        },
                        {icon: TelegramIcon, href: 'https://t.me/otcmarsbase'},
                        {icon: LinktreeIcon, href: 'https://linktr.ee/MARSBASE'},
                        {icon: TwitterIcon, href: 'https://twitter.com/MARSBASEio'},
                        {icon: MediumIcon, href: 'https://marsbaseotc.medium.com/'},
                    ]}
                    copyright={copyright}
                />
            </Box>
        </VStack>
    );
});
