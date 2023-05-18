import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import {
	Button,
	Center,
	Circle,
	Code,
	Flex,
	HStack,
	Icon,
	Link,
	PinInput,
	PinInputField,
	Spinner,
	useClipboard,
	VStack,
} from "@chakra-ui/react"
import { FaTelegramPlane } from "react-icons/fa"
import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons"
import React from "react"
import { H2, LeadText } from "@/components/Text/Typography"
import { LoginRequired } from "@/components/LoginRequired/LoginRequired"

type NotificationsProps = {}

export const NotificationsHydrator: React.FC<NotificationsProps> = ({}) => {
	// let { subscribedAlready, data } = useNotificationEnabledInfo()
	// let { token } = useNotificationBotToken()
	let subscribedAlready = false
	return <NotificationsContainer notificationToken="123456" />
}

type NotificationsContainerProps = {
	subscribedAlready?: boolean
	loading?: boolean
	notificationToken?: string
}
export const NotificationsContainer: React.FC<NotificationsContainerProps> = ({
	loading,
	subscribedAlready,
	notificationToken,
}) => {
	return (
		<PageWrapper
			header={
				<PageHeader
					subTitle="Enable notifications to make sure you don't miss the best deals."
					title="Notifications"
				/>
			}
		>
			<Flex className="flex-grow justify-center items-center flex-row">
				<LoginRequired loggedIn showLoginWindowByDefault>
					{loading ? (
						<Spinner size="xl" />
					) : subscribedAlready ? (
						<YoureSubscribed />
					) : (
						<SubscribeToOurTelegramContainer notificationToken={notificationToken} />
					)}
				</LoginRequired>
			</Flex>
		</PageWrapper>
	)
}

const YoureSubscribed: React.FC = () => {
	return (
		<VStack>
			<CheckCircleIcon boxSize="40px" />
			<H2>Success!</H2>
			<LeadText>
				You are subscribed and will receive notifications.
			</LeadText>
		</VStack>
	)
}

export const SubscribeToOurTelegramContainer: React.FC<{
	notificationToken?: string
}> = (props) => {
	let { onCopy, hasCopied } = useClipboard(props.notificationToken || "")
	return (
		<SubscribeToOurTelegram
			token={props.notificationToken}
			botname="otcmarsbase_bot"
			onCopyClick={onCopy}
			hasCopied={hasCopied}
		/>
	)
}

type SubscribeToOurTelegramProps = {
	token?: string
	botname: string
	onCopyClick: () => void
	hasCopied: boolean
}
export const SubscribeToOurTelegram: React.FC<SubscribeToOurTelegramProps> = ({
	token,
	botname,
	...props
}) => {
	return (
		<VStack gap="1rem">
			<Circle
				bgColor="black"
				border={"2px"}
				size="80px"
				justifyContent={"center"}
				alignItems="center"
			>
				<Icon as={FaTelegramPlane} boxSize="40px" mr="8px" />
			</Circle>
			<H2>Subscribe to our Telegram bot</H2>
			<VStack alignItems={"flex-start"} minWidth="40vw" gap="1rem">
				<LeadText>
					1. Find{" "}
					<HighlightedLink href={`https://${botname}.t.me`}>
						@{botname}
					</HighlightedLink>{" "}
					on Telegram
				</LeadText>
				<LeadText>2. Send this code to the bot:</LeadText>
				<Center w="100%" minH="5em">
					{token ? (
						<VStack>
							<PinInputView value={token} />
							<Flex w="100%" justifyContent={"flex-end"}>
								<Button
									leftIcon={<CopyIcon boxSize={"1.5em"} />}
									colorScheme="white"
									variant="link"
									onClick={props.onCopyClick}
								>
									{props.hasCopied ? "Copied!" : "Copy"}
								</Button>
							</Flex>
						</VStack>
					) : (
						<Spinner />
					)}
				</Center>
			</VStack>
		</VStack>
	)
}

const HighlightedLink: React.FCC<{ href: string; sameWindow?: boolean }> = ({
	href,
	sameWindow,
	children,
}) => (
	<Link href={href} target={sameWindow ? "_self" : "_blank"}>
		<Code
			bgColor={"black"}
			color="white"
			fontSize={"1em"}
			textDecoration={"underline"}
		>
			{children}
		</Code>
	</Link>
)

const PinInputView: React.FCC<{
	value: string
}> = ({ value }) => {
	const inputs = React.useMemo(
		() =>
			value
				.split("")
				.map((x) => <PinInputField _disabled={{ opacity: 1 }} />),
		[value]
	)
	return (
		<HStack>
			<PinInput isDisabled defaultValue={value}>
				{inputs}
			</PinInput>
		</HStack>
	)
}
