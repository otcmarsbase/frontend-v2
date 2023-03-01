export type Remap<Obj, R, W> = {
	[K in keyof Obj]: Obj[K] extends R ? W : R
}

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
