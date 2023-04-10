export const openExternalUrl = (url: string) => window.open(url, "_blank")

export const format = (template: string, ...params: string[]) =>
	params.reduce((acc, cur, i) => {
		return acc.replaceAll(`{${i}}`, cur)
	}, template)
