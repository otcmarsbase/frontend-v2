export const TokenApproximatelyEquals: React.FCC<
	TokenApproximatelyEqualsProps
> = (props) => {
	let style = useMemo(
		(): React.CSSProperties => ({
			gap: props.size == "big" ? "1em" : "0.5em",
			fontSize: props.size == "big" ? "1.5em" : "1em",
			fontWeight: props.size == "big" ? "bold" : "inherit",
		}),
		[props.size]
	)

	return (
		<Flex align={props.align} style={style}>
			{props.leftToken}
			<span>{APPROXIMATELY_EQUALS_SYMBOL}</span>
			{props.rightToken}
		</Flex>
	)
}

