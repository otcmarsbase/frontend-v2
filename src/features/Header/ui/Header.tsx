import {HTMLAttributeAnchorTarget, ReactNode, useEffect, useState} from 'react';
import {HStack, Box, Image, Divider, VStack, Link} from '@chakra-ui/react';
import LogoPng from '../assets/logo.png';
import {ModalController, router} from "@app/logic";
import {TypeOfOffer} from "../../Modals/TypeOfOffer/TypeOfOffer";
import {CreateOffer} from "@app/pages/offers/create/CreateOffer";


export type HeaderMenuItem = {
    label: string;
    href?: { url: string; target?: HTMLAttributeAnchorTarget };
    onClick?: () => void;
};

export interface HeaderProps {
    menuItems: HeaderMenuItem[];
    rightContent: ReactNode;
    logoHref?: string;
}

export const Header = ({
                           menuItems,
                           logoHref = '#',
                           rightContent,
                       }: HeaderProps) => {


    async function handleClick({label}) {
        console.log('label',label)
        if (label === 'Create offer') {
             const typeOfDeal = await ModalController.create(TypeOfOffer, {});
            console.log('typeOfDeal',typeOfDeal)
             router.navigateComponent(CreateOffer, {typeOfDeal})
        }
        // /offers


        // const [typeOfDeal, setTypeOfDeal] = useState('Buy');
        // const getTypeOfDeal = () => ModalController.create(TypeOfOffer, {});
        //
        // useEffect(()=>{
        //     const promisfyResult = getTypeOfDeal();
        //     async function loadDataAsync() {
        //         try {
        //             const modalResult = await promisfyResult;
        //             // @ts-ignore
        //             setTypeOfDeal(modalResult)
        //         } catch (e) {
        //             promisfyResult.destroy()
        //         }
        //     }
        //     loadDataAsync()
        //     return () => promisfyResult.destroy();
        // },[])
    }

    return (
        <VStack gap="0">
            <HStack
                width="100%"
                bg="dark.900"
                alignItems="center"
                height="5rem"
                paddingLeft="3.5rem"
                paddingRight="0.75rem"
                justifyContent="space-between"
            >
                <HStack gap="4.5rem">
                    <Link href={logoHref}>
                        <Image width="8rem" src={LogoPng} alt="OTC MarsBase"/>
                    </Link>
                    <HStack gap="3.75rem" color="white">
                        {menuItems.map((item, id) => {
                            const {label, href} = item;
                            return (
                                <Link
                                    href={href?.url}
                                    fontSize="0.6875rem"
                                    textTransform="uppercase"
                                    target={href?.target}
                                    id={href?.url}
                                    fontFamily="menuItem"
                                    onClick={() => handleClick({label})}
                                    key={label}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </HStack>
                </HStack>
                <Box color="white">{rightContent}</Box>
            </HStack>
            <Divider
                height="px"
                bgGradient="linear(203deg, #C74A26 0%, #E24400 45.83%, #981807 100%)"
            />
        </VStack>
    );
};
