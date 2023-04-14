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
	OfferTypeIndicator,
	FinishScreen,
	CreateOfferLoading,
	ProgressAnimationBody,
	DetailsName,
	BadgeText,
	DetailsValue,
} from "@otcmarsbase/react-components"
import { Box, Flex, VStack } from "@chakra-ui/react"
import { AnimatedProgress } from "@/components/AnimatedProgress/AnimatedProgress"
import { BaseText } from "@/components/Text/BaseText"
type CreateOfferDetailsProps = {}

export const CreateOfferDetails: React.FC<CreateOfferDetailsProps> = ({}) => {
	return (
		<Box>
			<DetailsHeading
				onLinkClick={() => {}}
				linkText={"Go back to edit"}
				linkIcon={""}
				type={true ? "static" : "dynamic"}
			/>

			<DetailsItem
				title={"name"}
				value={"value"}
				subTitle={"discount"}
				additionalValue={`≈asdasd}`}
			/>

			<DetailsBoardSell
				name={"Offer size"}
				info={"The amount you would like to exchange"}
				value={`12 ETH`}
				additionalValue={`≈`}
			/>

			<DetailsBoardSell
				name={true ? "Premium" : "Discount"}
				info={
					true
						? "Reduced price you set for an asset"
						: "Increased price you set for an asset"
				}
				value={`100%`}
				additionalValue={"additionalVlue"}
			/>

			<DetailsBoardSell
				name={"Open price"}
				info={"Market price at the time of offer creation"}
				value={
					<>
						<CurrencyIcon src={"ETH"}>{`1 ETH = `}</CurrencyIcon>
						<CurrencyIcon src={""}>{"Alice"}</CurrencyIcon>
					</>
				}
			/>

			<DetailsBoardSell
				name={"Deadline"}
				info={"The execution date and time"}
				value={new Date().toString()}
			/>

			<DetailsBoardSell
				name={"Min bid"}
				info={"The minimum amount participants can place to your offer"}
				value={null}
				additionalValue={null}
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
		onLinkClick: any
		linkIcon?: string
		linkText: string
		type: "static" | "dynamic"
	}>
> = (props) => {
	return (
		<GridStyles justify="space-between">
			<ContainerDefault>
				<GridStyles gap="12px">
					<H3>{"Check offer details"}</H3>
					<OfferTypeIndicator type={props.type} />
				</GridStyles>

				<GridStyles direction="row" align="center">
					<BodyText color="grey">
						{
							"Verify that all parameters are set the way you want them"
						}
					</BodyText>
				</GridStyles>
			</ContainerDefault>

			<DetailsHeadingLink
				onClick={props.onLinkClick}
				icon={props.linkIcon}
			>
				{props.linkText}
			</DetailsHeadingLink>
		</GridStyles>
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
