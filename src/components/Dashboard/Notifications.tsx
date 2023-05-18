import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { Center, Flex } from "@chakra-ui/react"
import React from "react"

type NotificationsProps = {}

export const NotificationsHydrator: React.FC<NotificationsProps> = ({}) => {
	// let { subscribedAlready, data } = useNotificationEnabledInfo()
	let subscribedAlready = false
	return <div></div>
}

    subscribedAlready?: boolean
    loading?: boolean
}
export const NotificationsContainer: React.FC<NotificationsContainerProps> = ({}) => {
	return (
		<PageWrapper
			header={
				<PageHeader
					subTitle="Enable notifications to make sure you don't miss the best deals."
					title="Notifications"
				/>
			}
		>
			<Center>
				<Flex direction={"row"}>
				
				</Flex>
			</Center>
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
		() => value.split("").map((x) => <PinInputField />),
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
