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

export type PostfixMap<T extends {}, Postfix extends string> = {
	[K in keyof T as `${Extract<K, string | number>}${Postfix}`]: T[K]
}

export type Writeable<T> = { -readonly [P in keyof T]: T[P] }
