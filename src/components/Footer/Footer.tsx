import {
	Box,
	Button,
	Grid,
	GridItem,
	HStack,
	Link,
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
import { Text } from "@/components/Text/Text"
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
		<HStack width={"100%"} justifyContent={"space-between"} pb="10">
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
				<Text size="14" className="text-gray text-right">
					<div>
						{l10n.footer.commit} {GIT_COMMIT} {l10n.footer.version}{" "}
						{APP_VERSION}
					</div>
					{l10n.footer.copyright}
					{new Date().getFullYear()}
				</Text>
			}
			description={
				<Text
					className="text-gray"
					size="14"
					maxWidth={"308px"}
					align="left"
				>
					{l10n.footer.description}
				</Text>
			}
			menuLinks={footerLinks.map(([key, href]) => (
				<Link
					className="!no-underline !text-gray hover:!text-orange-500"
					key={href}
					href={href}
					target={"_blank"}
				>
					<Text size="14">
						{l10n.footer[key as keyof typeof l10n.footer]}
					</Text>
				</Link>
			))}
			socialLinks={
				<HStack gap="10">
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
			title={<Text size="promo-14">{l10n.footer.title}</Text>}
		/>
	)
}
