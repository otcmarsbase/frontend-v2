export type Join<
	S extends string[],
	Separator extends string = ''
> = S extends [string]
	? S[0]
	: S extends [string, ...infer Tail]
	? Tail extends string[]
		? `${S[0]}${Separator}${Join<Tail, Separator>}`
		: `${S[0]}`
	: never
