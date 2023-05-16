import { useHighlight } from "@chakra-ui/react"
import React, { ReactElement } from "react"

export const APPROXIMATELY_EQUALS_SYMBOL = "\u2248"

export const openExternalUrl = (url: string) => window.open(url, "_blank")

/**
 * Formats a string with the given params
 * @param template The string to format
 * @param params The params to use
 * @returns The formatted string
 * @example
 * format("Hello {0}!", "World") // "Hello World!"
 */
export const format = (template: string, ...params: string[]) =>
	params.reduce((acc, cur, i) => {
		return acc.replaceAll(`{${i}}`, cur)
	}, template)

/**
 * A component that highlights a string
 * @param template The string to highlight
 * @param components The components to use
 * @param query The query to use
 * @returns The highlighted string
 * @example
 * <HighlightComponent
 *     components={[(key) => <TelegramIcon />]}
 *     query={["{0}"]}
 *     template={"link to {0} telegram"}
 * />
 * // "link to <TelegramIcon /> telegram"
 */
export const HighlightComponent: React.FC<{
	template: string
	components: ((key: string) => any)[]
	query: string[]
}> = ({ components, query, template }) => {
	const chunks = useHighlight({
		query: query,
		text: template,
	})
	const matchedChunks = chunks.filter((chunk) => chunk.match)
	const matchedIdx = (text: string) =>
		matchedChunks.findIndex((x) => x.text === text)
	return (
		<>
			{chunks.map((chunk, i) => {
				if (chunk.match) {
					return components[matchedIdx(chunk.text)](chunk.text)
				}
				return chunk.text
			})}
		</>
	)
}

export const either =
	<Left extends any, Right extends Exclude<any, Left>>(
		isLeft: (value: Left | Right) => value is Left,
		left: (value: Left) => ReactElement,
		right: (value: Exclude<Right, Left>) => ReactElement
	): React.FC<{ value: Left | Right }> =>
	(props) => {
		return isLeft(props.value) ? left(props.value) : right(props.value)
	}

export const removeTrailingZeros = (num: number | string): string => {
	if (typeof num == "number") num = num + ""

	if (num.indexOf(".") == -1) return num

	num = num.replace(/0+$/, "")
	if (!num) return "0"

	return num
}

// TODO: понять че тут написано и переписать
export const separateThousands = (
	num: number | string,
	separator: string = "\u00A0",
	removeTrailingDecimalZeroes = false
): string => {
	if (typeof num == "number") num = num + ""

	let [whole, dec] = num.split(".")

	if (removeTrailingDecimalZeroes) dec = dec?.replace(/0+$/, "")

	let p1 = whole.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
	let p2 = typeof dec === "undefined" ? "" : `.${dec}`

	return `${p1}${p2}`
}

export const calculateProfit = (
	amountAliceUsd: number,
	amountBobUsd: number
): { type: "discount" | "premium"; amount: number } => {
	if (!amountBobUsd)
		return {
			type: "discount",
			amount: -1,
		}

	if (!amountAliceUsd)
		return {
			type: "premium",
			amount: 0,
		}

	if (amountAliceUsd >= amountBobUsd)
		return {
			type: "discount",
			amount: -1 + amountBobUsd / amountAliceUsd,
		}

	return {
		type: "premium",
		amount: amountBobUsd / amountAliceUsd - 1,
	}
}
