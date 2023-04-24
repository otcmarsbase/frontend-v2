import React from "react"
import { Box, Button, Flex, Grid, VStack } from "@chakra-ui/react"
import { AnimatedProgress } from "@/components/AnimatedProgress/AnimatedProgress"
import { Text } from "@/components/Text/Text"
import { BackButton } from "@/components/BackButton/BackButton"
import { OfferTypeIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import { RightArrowIcon } from "@/icons"
import clsx from "clsx"
type CreateOfferDetailsProps = {
	approved?: boolean
}

export const CreateOfferDetails: React.FC<CreateOfferDetailsProps> = ({
	approved,
}) => {
	const getStep = (): Steps => {
		if (approved) return "accept"
		return "approve"
	}
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
						{/* <CurrencyIcon src={"ETH"}>{`1 ETH = `}</CurrencyIcon>
						<CurrencyIcon src={""}>{"Alice"}</CurrencyIcon> */}
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

			<Flex className="pt-10">
				<StepDisplay
					buttons={{
						accept: {
							text: "Accept",
							onClick: () => {},
						},
						approve: {
							text: "Approve",
							onClick: () => {},
						},
					}}
					step={getStep()}
				/>
			</Flex>
		</Box>
	)
}

type Steps = "accept" | "approve"
type StepDisplayProps = {
	step: Steps
	disabled?: boolean
	loading?: boolean
	buttons: Record<Steps, { text: string; onClick: () => void }>
}
const StepDisplay: React.FC<StepDisplayProps> = ({
	step,
	disabled,
	loading,
	buttons,
}) => {
	const steps = ["approve", "accept"] as const
	return (
		<Box className="grow">
			<Flex gap={"20px"}>
				{steps.map((x) => {
					return (
						<Button
							onClick={buttons[x].onClick}
							w={"full"}
							isDisabled={
								step !== x ||
								(loading && step === x) ||
								disabled
							}
						>
							{buttons[x].text}
						</Button>
					)
				})}
			</Flex>
			<Flex
				gap={"12px"}
				justifyContent="center"
				alignItems="center"
				pt={"4"}
			>
				<Step active={step === "approve"} text={"Step 1"} />
				<Arrow />
				<Step active={step === "accept"} text={"Step 2"} />
			</Flex>
		</Box>
	)
}

const Step: React.FC<{ active?: boolean; text: string }> = ({
	active,
	text,
}) => {
	return (
		<Box
			className={clsx(
				"rounded-2xl px-2",
				active ? "bg-orange-500" : "bg-dark-200 opacity-20"
			)}
		>
			{text}
		</Box>
	)
}
const Arrow: React.FC = () => {
	const line = () => (
		<div className="w-[70px] bg-[rgba(113,138,167,0.1)] h-[1px]"></div>
	)
	return (
		<Flex className="justify-center items-center gap-3">
			{line()}
			<Flex className="justify-center items-center bg-[rgba(113,138,167,0.2)] rounded-full p-2">
				<RightArrowIcon boxSize={"10px"} />
			</Flex>
			{line()}
		</Flex>
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
					<H3>{"Check offer details"}</H3>
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
			<H3>{"Creating your offer"}</H3>
			<BodyText color="grey">
				Please wait for a few moments. Colonizing Mars may take a
				while...
			</BodyText>
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
				<LeadText color="white">{title}</LeadText>
				<BodyText color="grey">{subTitle}</BodyText>
			</VStack>
			<VStack alignItems={"end"}>
				<Text size="16" fontWeight={"bold"}>
					{value}
				</Text>
				{additionalValue ? (
					<BodyText color="grey">{additionalValue}</BodyText>
				) : (
					""
				)}
			</VStack>
		</Flex>
	)
}
