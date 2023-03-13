import { DeepWriteable, Join, ReplaceAll } from '../types'

type ParseParams<K, Result> =
	K extends `${string}:${infer String}/${infer Suffix}`
		? ParseParams<
				Suffix,
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
		: { [K in keyof Result]: string | number }

/**
 * @example
 * type T = ExtractParams<'sad/:abcd/:a/:b'>
 * T is { abcd: string | number; a: string | number; b: string | number }
 */
type ExtractParams<K> = ParseParams<K, {}>
type Tree = { path: string; children?: Tree[] }

/**
 * @example
 * type T = ReplaceParams<'sad/:abcd/:a/:b', { a: '1'; b: '2'; abcd: '3' }>
 *
 * T is "sad/3/1/2"
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
						ReplaceAll<Join<Prefix<Head>, '/'>, '//', '/'>
					>,
					...Tail
				],
				Ans
		  >
		: FlatRoutesConfig<
				Tail,
				Ans & {
					[key in ReplaceAll<
						Join<Prefix<Head>, '/'>,
						'//',
						'/'
					>]: Prefix<Head>
				}
		  >
	: {
			[Key in Exclude<keyof Ans, symbol | number>]: <
				Params extends ExtractParams<Key>,
				ParamsEmpty = keyof Params extends never ? true : false
			>(
				...args: ParamsEmpty extends true ? [] : [Params]
			) => ReplaceParams<Key, Params>
	  }

const format = (head: Tree, prefix: string) => ({ frame: head, prefix })

/**
 * transforms react router tree to flat object with typed route params
 * @example
 * const routes = [
 * 	  {
 * 		path: 'path/',
 * 		children: [
 * 			{
 * 				path: 'nested/:id',
 * 				element: <Component/>
 * 			}
 *       ]
 *    }
 * ]
 * const flattenRoutes = flatRoutes(routes)
 * flattenRoutes['path/nested/:id']({ id: '1' }) // 'path/nested/1'
 *
 */
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
			ans[prefix] = (params) => routeWithParams(prefix, params || {})
		}
	}
	return ans
}

/**
 * @example
 * joins two strings
 * 1) 'a', '/b' -> 'a/b'
 * 2) 'a/', '/b' -> 'a/b'
 * 3) 'a', 'b' -> 'a/b'
 */
const slashJoin = <S1 extends string, S2 extends string>(
	a: S1,
	b: S2
): ReplaceAll<Join<[S1, S2], '/'>, '//', '/'> => {
	return [a, b].join('/').replace(/\/{2,}/g, '/') as any
}

/**
 * @example
 * replaces params in string
 * 1) routeWithParams('a/:b', { b: '1' }) -> 'a/1'
 * 2) routeWithParams('a/:b/:c', { b: '1', c: '2' }) -> 'a/1/2'
 */
export const routeWithParams = <
	T extends string,
	Keys extends ExtractParams<T>
>(
	str: T,
	keys: Keys
) => {
	return Object.keys(keys).reduce(
		//@ts-ignore
		(acc, x) => acc.replace(`:${x}`, keys[x]),
		str
	) as ReplaceParams<T, Keys>
}
