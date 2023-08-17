import {WalletConnectButton} from "@app/logic/walletConnector";
import {Heading, HStack, MenuItem, Select} from "@chakra-ui/react";
import {EnglishIcon} from "@shared/assets/lang/EnglishIcon";
import {NotifsIcon} from "@shared/assets/NotifsIcon";
import {Dropdown, KebabMenuIcon} from "@shared/ui-kit";

const CommunityMock = [
    {
        label: 'Dev community',
        value: 'dev'
    },
    {
        label: 'Twitter',
        value: 'twitter'
    }
]
export function HeaderRightContent() {
    let commun = 'Community'
    return (
        <HStack>
            <Dropdown
                items={[
                    {children: 'Dev', as: 'a', href: '#'},
                    {children: 'Twitter', as: 'a', href: '#'},
                    {children: 'Facebook', as: 'a', href: '#'},
                ]}
            >
                <HStack>
                    Community
                </HStack>
            </Dropdown>

            <Heading variant='h4' fontWeight='400' color='dark.50' whiteSpace='nowrap'>
                How it works?
            </Heading>
            <WalletConnectButton/>
            <HStack padding='0.69rem' bg='rgba(37, 38, 40, 0.50)' borderRadius='0.5rem'>
                <NotifsIcon w='1.125rem' h='1.125rem'/>
            </HStack>
            <HStack padding='0.69rem' bg='rgba(37, 38, 40, 0.50)' borderRadius='0.5rem'>
                <EnglishIcon w='1.125rem' h='1.125rem'/>
            </HStack>
            <HStack>


            <Dropdown
                items={[
                    {children: 'Account'},
                    {children: 'Settings'},
                    {children: 'Log out'},
                ]}
            >
                <HStack>
                <KebabMenuIcon
                    // top="1.5rem"
                    // left="2rem"
                    w="2rem"
                    color="dark.200"
                    transition="all 0.3s"
                    _hover={{color: 'orange.500'}}
                    h="2rem"
                />
                </HStack>
            </Dropdown>
            </HStack>
        </HStack>
    )
}
