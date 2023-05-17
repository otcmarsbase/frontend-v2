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
