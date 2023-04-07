import {
	Box,
	Button,
	Grid,
	GridItem,
	HStack,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react"
import React from "react"
import {
	DiscordIcon,
	LinktreeIcon,
	MediumIcon,
	RedditIcon,
	TelegramIcon,
	TwitterIcon,
} from "@/icons"
import { BaseText } from "@/components/Text/BaseText"
import { links } from "@/utils/links"
import { useTranslation } from "@/localization/l10n"
import { APP_VERSION, GIT_COMMIT } from "@/vite-env"

type FooterProps = {
	title: React.ReactNode
	description: React.ReactNode
	socialLinks: React.ReactNode
	copyRight: React.ReactNode
	menuLinks: React.ReactNode[]
}

const FooterLayout: React.FC<FooterProps> = ({
	copyRight,
	description,
	socialLinks,
	title,
	menuLinks,
}) => {
	return (
		<HStack width={"100%"} justifyContent={"space-between"}>
			<HStack>
				<Grid
					templateColumns="repeat(2, 1fr)"
					templateRows={"repeat(4, 1fr)"}
					gap={2}
				>
					{menuLinks}
				</Grid>
				<VStack>
					<Box width={"100%"} textAlign={"left"}>
						{title}
					</Box>
					{description}
				</VStack>
			</HStack>
			<VStack alignItems={"end"}>
				{socialLinks}
				{copyRight}
			</VStack>
		</HStack>
	)
}
const footerLinks = Object.entries(links.footer)
const socialIcons = [
	[DiscordIcon, links.social.discord],
	[RedditIcon, links.social.reddit],
	[TelegramIcon, links.social.telegram],
	[LinktreeIcon, links.social.linktree],
	[TwitterIcon, links.social.twitter],
	[MediumIcon, links.social.medium],
] as const
export const Footer: React.FC = () => {
	const l10n = useTranslation()
	return (
		<FooterLayout
			copyRight={
				<>
					<div>
						{l10n.footer.commit} {GIT_COMMIT} {l10n.footer.version}{" "}
						{APP_VERSION}
					</div>
					{l10n.footer.copyright}
					{new Date().getFullYear()}
				</>
			}
			description={
				<BaseText maxWidth={"308px"} align="left">
					{l10n.footer.description}
				</BaseText>
			}
			menuLinks={footerLinks.map(([key, href]) => (
				<Link key={href} href={href} target={"_blank"}>
					{l10n.footer[key as keyof typeof l10n.footer]}
				</Link>
			))}
			socialLinks={
				<HStack>
					{socialIcons.map(([Icon, href]) => (
						<div
							key={href}
							onClick={() => window.open(href, "_blank")}
						>
							<Icon />
						</div>
					))}
				</HStack>
			}
			title={<BaseText>{l10n.footer.title}</BaseText>}
		/>
	)
}
