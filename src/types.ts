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

export type DeepTypeRecord<T> = { [key: string]: T | DeepTypeRecord<T> }

export type Prefixed<T extends DeepTypeRecord<string>, Prefix extends string> = {
	[key in keyof T]: T[key] extends string ? `${Prefix}${T[key]}` : Prefixed<Exclude<T[key], string>, Prefix>
}