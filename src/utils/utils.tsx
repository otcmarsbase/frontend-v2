import { useHighlight } from "@chakra-ui/react"
import React from "react"

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
