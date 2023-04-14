import { useTranslation } from "@/localization/l10n"
import React from "react"
import {
	ActiveStepDisplay,
	CreateOfferDetails as Det,
	// DetailsFromTo,
	// InputContainer,
	// InputName,
	// CurrencyPanel,
	DetailsBoardSell,
	TransactionDetails,
	H3,
	BodyText,
	Clickable,
	DetailsHeadingLink,
	GridStyles,
	CurrencyIcon,
	ContainerDefault,
	FinishScreen,
	CreateOfferLoading,
	ProgressAnimationBody,
	DetailsName,
	BadgeText,
	DetailsValue,
} from "@otcmarsbase/react-components"
import { Box, Flex, Grid, VStack } from "@chakra-ui/react"
import { AnimatedProgress } from "@/components/AnimatedProgress/AnimatedProgress"
import { BaseText } from "@/components/Text/BaseText"
import { BackButton } from "@/components/BackButton/BackButton"
import { OfferTypeIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
type CreateOfferDetailsProps = {}

export const CreateOfferDetails: React.FC<CreateOfferDetailsProps> = ({}) => {
	return (
		<Box>
			<DetailsHeading
				onLinkClick={() => {}}
				linkText={"Go back to edit"}
				type={true ? "static" : "dynamic"}
			/>

			<DetailsItem
				title={"name"}
				value={"value"}
				subTitle={"discount"}
				additionalValue={`≈asdasd}`}
			/>

			<DetailsItem
				title={"Offer size"}
				value={`12 ETH`}
				subTitle={"The amount you would like to exchange"}
				additionalValue={`≈`}
			/>

			<DetailsItem
				title={true ? "Premium" : "Discount"}
				value={`100%`}
				subTitle={
					true
						? "Reduced price you set for an asset"
						: "Increased price you set for an asset"
				}
				additionalValue={`additionalVlue`}
			/>

			<DetailsItem
				title={"Open price"}
				value={
					<>
						<CurrencyIcon src={"ETH"}>{`1 ETH = `}</CurrencyIcon>
						<CurrencyIcon src={""}>{"Alice"}</CurrencyIcon>
					</>
				}
				subTitle={"Market price at the time of offer creation"}
			/>

			<DetailsItem
				title="Deadline"
				subTitle={"The execution date and time"}
				value={new Date().toString()}
			/>

			<DetailsItem
				title="Min bid"
				subTitle={
					"The minimum amount participants can place to your offer"
				}
				value={null}
			/>

			<TransactionDetails>
				<ActiveStepDisplay
					status={false ? "step1" : "none"}
					onApprove={() => {}}
					onAccept={() => {}}
				/>
			</TransactionDetails>
		</Box>
	)
}

const DetailsHeading: React.FC<
	React.PropsWithChildren<{
		onLinkClick: () => void
		linkText: string
		type: "static" | "dynamic"
	}>
> = (props) => {
	return (
		<Flex className="justify-between items-start">
			<Flex direction={"column"}>
				<Grid templateColumns={"auto auto"} gap="12px">
					<BaseText>{"Check offer details"}</BaseText>
					<OfferTypeIndicator type={props.type} />
				</Grid>

				<BodyText color="grey">
					{"Verify that all parameters are set the way you want them"}
				</BodyText>
			</Flex>

			<BackButton label={props.linkText} onClick={props.onLinkClick} />
		</Flex>
	)
}

export const LoadingCreated: React.FC<
	React.PropsWithChildren<{ progress: number }>
> = (props) => {
	return (
		<Flex direction={"column"} textAlign="center" alignItems={"center"}>
			<AnimatedProgress status="lodaing" />
			<BaseText>{"Creating your offer"}</BaseText>
			<BaseText color="grey">
				Please wait for a few moments. Colonizing Mars may take a
				while...
			</BaseText>
		</Flex>
	)
}

const DetailsItem: React.FC<{
	title: React.ReactNode
	subTitle?: React.ReactNode
	value: React.ReactNode
	additionalValue?: React.ReactNode
}> = ({ title, value, additionalValue, subTitle }) => {
	return (
		<Flex className="justify-between items-center py-3 border-b-[1px] border-b-[#151516] border-solid">
			<VStack alignItems={"start"}>
				<BaseText color="white">{title}</BaseText>
				<BaseText color="grey">{subTitle}</BaseText>
			</VStack>
			<VStack alignItems={"end"}>
				<BaseText>{value}</BaseText>
				{additionalValue ? (
					<BodyText color="grey">{additionalValue}</BodyText>
				) : (
					""
				)}
			</VStack>
		</Flex>
	)
}
