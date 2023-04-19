type YourBalanceProps = {
	amountEth?: string
	token?: TokenIconSymbolProps["token"]
}
export const YourBalance: React.FC<
	React.PropsWithChildren<YourBalanceProps>
> = (props) => (
	<span style={{ display: "inline-flex", gap: "6px" }}>
		<BaseText tag="span" color={["gray"]}>
			Your balance:{" "}
		</BaseText>
		<span>
			{props.amountEth ? (
				<LongEthValueView amountEth={props.amountEth} />
			) : (
				"loading..."
			)}
		</span>

		{props.token && <TokenIconSymbol token={props.token} />}
	</span>
)
