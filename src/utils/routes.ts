import { DeepWriteable, Join } from '../types'

type ParseParams<K, Result> =
	K extends `${string}:${infer String}/${infer Tail}`
		? ParseParams<
				Tail,
				Result & {
					[key in String]: string
				}
		  >
		: K extends `${string}:${infer String}`
		? ParseParams<
				'',
				Result & {
					[key in String]: string
				}
		  >
		: { [K in keyof Result]: string }

type ExtractParams<K> = ParseParams<K, {}>
type Tree = { path: string; children?: Tree[] }

/**
 * ReplaceParams<'sad/:abcd/:a/:b', { a: '1'; b: '2'; abcd: '3' }> // should be "sad/3/1/2"
 */
type ReplaceParams<
	T extends string,
	Params extends Record<string, string>
> = T extends `${infer Prefix}:${infer Key extends Exclude<
	keyof Params,
	symbol
>}/${infer Suffix}`
	? ReplaceParams<`${Prefix}${Params[Key]}/${Suffix}`, Params>
	: T extends `${infer Prefix}:${infer Key extends Exclude<
			keyof Params,
			symbol
	  >}`
	? `${Prefix}${Params[Key]}`
	: T
type MapHeadToStackFrame<A extends Tree[], Prefix extends string> = {
	[K in keyof A]: { prefix: Prefix; frame: A[K] }
}

type StackFrame = {
	frame: Tree
	prefix: string
}

type Prefix<Head extends StackFrame> = [Head['prefix'], Head['frame']['path']]

type FlatRoutesConfig<
	Stack extends StackFrame[],
	Ans extends Record<string, string>
> = Stack extends [
	infer Head extends StackFrame,
	...infer Tail extends StackFrame[]
]
	? Head['frame']['children'] extends Tree[]
		? FlatRoutesConfig<
				[
					...MapHeadToStackFrame<
						[...Head['frame']['children']],
						Join<Prefix<Head>>
					>,
					...Tail
				],
				Ans
		  >
		: FlatRoutesConfig<
				Tail,
				Ans & {
					[key in Join<Prefix<Head>>]: Prefix<Head>
				}
		  >
	: { [Key in keyof Ans]: (params: ExtractParams<Key>) => string }

const format = (head: Tree, prefix: string) => ({ frame: head, prefix })

export const flatRoutes = <
	T extends Tree[],
	Flatten = FlatRoutesConfig<MapHeadToStackFrame<DeepWriteable<T>, ''>, {}>
>(
	routes: T
): Flatten => {
	//@ts-ignore
	const stack = [...routes.map((x) => format(x, ''))]
	const ans = {} as Flatten
	while (stack.length) {
		const curr = stack.pop()!
		const prefix = slashJoin(curr.prefix, curr.frame.path)
		if (curr.frame.children) {
			stack.push(...curr.frame.children.map((x) => format(x, prefix)))
		} else {
			//@ts-ignore
			ans[prefix] = (params) => routeWithParams(prefix, params)
		}
	}
	return ans
}

const slashJoin = (a: string, b: string): string => {
	if (a[a.length - 1] !== '/' && b[0] !== '/') return `${a}/${b}` as any
	return (a + b).replace(/\/{2,}/, '/') as any
}

export const routeWithParams = <T extends string>(
	str: T,
	keys: ExtractParams<T>
): string => {
	//@ts-ignore
	return Object.keys(keys).reduce((acc, x) => acc.replace(`:${x}`, keys[x]), str)
}


/**
 * joins two strings
 * examples: 
 * 1) 'a', '/b' -> 'a/b'
 * 2) 'a/', '/b' -> 'a/b'
 * 3) 'a', 'b' -> 'a/b'
 */
type SlashJoin<S extends string[]> = S extends [
	infer S1 extends string,
	infer S2 extends string
]
	? S1 extends `${infer A}/`
		? S2 extends `/${infer B}`
			? `${A}/${B}`
			: `${A}/${S2}`
		: S2 extends `/${infer B}`
		? `${S1}/${B}`
		: `${S1}/${S2}`
	: never
