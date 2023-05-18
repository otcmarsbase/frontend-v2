import { appRoutes } from "@/AppRoutes"
import { Footer } from "@/components/Footer/Footer"
import { Image } from "@/components/Image/Image"
import { useTranslation } from "@/localization/l10n"
import { links, navlinks } from "@/utils/links"
import { Box, HStack, VStack, Link as ChakraLink } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { MobileMenu } from "@/components/MobileMenu/MobileMenu"
import { DesktopView } from "@/components/DesktopView"
import { MobileFooter } from "@/components/MobileFooter/MobileFooter"
import { Text } from "@/components/Text/Text"

type PageWrapperProps = {
	header?: React.ReactNode
}

export const Container: React.FCC = ({ children }) => {
	return <div className="px-5 w-full flex flex-col flex-grow">{children}</div>
}
export const PageWrapper: React.FCC<PageWrapperProps> = ({
	header,
	children,
}) => {
	const l10n = useTranslation()
	return (
		<VStack minHeight={"100vh"} height={"100%"}>
			<Flex direction={"column"} style={{ width: "100%" }}>
				<Box
					w={"full"}
					py={5}
					position={"relative"}
					_before={{
						content: `""`,
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						bg: "gradientBrightOrange",
						height: "1px",
					}}
					 
				>
					<Container>
						<Header
							menuLinks={navlinks(l10n.navbar.links)}
							supportLinks={[
								{
									href: links.general.aboutMarsbase,
									text: l10n.navbar.support.about,
								},
								{
									href: links.general.helpCenter,
									text: l10n.navbar.support.helpCenter,
								},
								{
									href: links.general.community,
									text: l10n.navbar.support.community,
								},
							]}
						/>
					</Container>
				</Box>
				{header}
			</Flex>
			<Container>
				{children}
				<Box w={"100%"}>
					<DesktopView>
						<Footer />
					</DesktopView>
					<MobileFooter />
				</Box>
			</Container>
		</VStack>
	)
}

type SupportLink = {
	href: string
	text: string
}
const Header: React.FCC<{
	menuLinks: NavLink[]
	supportLinks: SupportLink[]
}> = ({ menuLinks, supportLinks }) => {
	return (
		<HStack justifyContent={"space-between"} w={"100%"}>
			<Link to={appRoutes["/"]()}>
				<HeaderLogo />
			</Link>
			<DesktopView>
				<HStack>
					<Navbar menuLinks={menuLinks} />
					<HeaderSupport supportLinks={supportLinks} />
					<HStack>
						<ConnectButton></ConnectButton>
					</HStack>
				</HStack>
			</DesktopView>
			<MobileMenu></MobileMenu>
		</HStack>
	)
}

type NavLink = { path: string; name: string; auth?: boolean }
type NavbarProps = {
	menuLinks: NavLink[]
}
type LinkProps = {
	href: string
	text: string
}
const SupportLink: React.FCC<LinkProps> = ({ href, text }) => {
	return (
		<Box>
			<ChakraLink target={"_blank"} href={href} opacity="0.6">
				<Text size="10">{text}</Text>
			</ChakraLink>
		</Box>
	)
}

type HeaderSupportProps = {
	supportLinks: SupportLink[]
}
const HeaderSupport: React.FC<HeaderSupportProps> = ({ supportLinks }) => {
	return (
		<HStack>
			{supportLinks.map((x) => (
				<SupportLink key={x.href} {...x} />
			))}
		</HStack>
	)
}
const Navbar: React.FCC<NavbarProps> = ({ children, menuLinks }) => {
	return (
		<HStack wrap={"wrap"}>
			{menuLinks.map((x) => (
				<NavMenuLink
					key={x.name + x.path}
					title={x.name}
					to={x.path}
					onClick={() => {}}
				/>
			))}
		</HStack>
	)
}
const HeaderLogo: React.FC = ({}) => {
	return (
		<Image
			src="data:image/png;base64,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"
			alt=""
		/>
	)
}

type NavMenuLinkProps = {
	to: string
	onClick: (e: React.MouseEvent<HTMLElement>) => void
	title: string
}
const NavMenuLink: React.FC<NavMenuLinkProps> = ({ onClick, to, title }) => {
	return (
		<Link to={to} onClick={onClick}>
			<Text size="promo-10" fontWeight={"bold"}>
				{title}
			</Text>
		</Link>
	)
}
