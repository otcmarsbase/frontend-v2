import { useTranslation } from "@/localization/l10n"
import React from "react"
import {
	ActiveStepDisplay,
	CreateOfferDetails,
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
} from "@otcmarsbase/react-components"
import { Flex } from "@chakra-ui/react"
import { AnimatedProgress } from "@/components/AnimatedProgress/AnimatedProgress"
import { BaseText } from "@/components/Text/BaseText"
type CreateOfferStep2Props = {}

export const CreateOfferStep2: React.FC<CreateOfferStep2Props> = ({}) => {
	const t = useTranslation()
	return (
		<CreateOfferDetails>
			<DetailsHeading
				onLinkClick={() => {}}
				linkText={"TEXT"}
				linkIcon={""}
				type={true ? "static" : "dynamic"}
			/>

			<DetailsBoardSell
				name={"name"}
				info={"discount"}
				value={null}
				additionalValue={`≈asdasd}`}
			/>

			<DetailsBoardSell
				name={t["Create offer"].title_2_line}
				info={t["Create offer"].sub_title_2_line}
				value={`12 ETH`}
				additionalValue={`≈`}
			/>

			<DetailsBoardSell
				name={
					true
						? t["Create offer"].title_3_line.premium
						: t["Create offer"].title_3_line.discount
				}
				info={
					true
						? t["Create offer"].sub_title_3_line.premium
						: t["Create offer"].sub_title_3_line.discount
				}
				value={`100%`}
				additionalValue={"additionalVlue"}
			/>

			<DetailsBoardSell
				name={t["Create offer"].title_4_line}
				info={t["Create offer"].sub_title_4_line}
				value={
					<>
						<CurrencyIcon src={"ETH"}>{`1 ETH = `}</CurrencyIcon>
						<CurrencyIcon src={""}>{"Alice"}</CurrencyIcon>
					</>
				}
			/>

			<DetailsBoardSell
				name={t["Create offer"].title_5_line}
				info={t["Create offer"].sub_title_5_line}
				value={new Date().toString()}
			/>

			<DetailsBoardSell
				name={t["Create offer"].title_6_line}
				info={t["Create offer"].sub_title_6_line}
				value={null}
				additionalValue={null}
			/>

			<TransactionDetails>
				<ActiveStepDisplay
					status={false ? "step1" : "step2"}
					onApprove={() => {}}
					onAccept={() => {}}
				/>
			</TransactionDetails>
		</CreateOfferDetails>
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
	const t = useTranslation()

	return (
		<GridStyles justify="space-between">
			<ContainerDefault>
				<GridStyles gap="12px">
					<H3>{t["Create offer"].step_2_title}</H3>
					<OfferTypeIndicator type={props.type} />
				</GridStyles>

				<GridStyles direction="row" align="center">
					<BodyText color="grey">
						{t["Create offer"].step_2_sub_title}
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
