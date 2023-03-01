import { Join } from "../types";

type SwapParam<Key extends string, T extends `${string}/${Key}${string}`, Value extends string | number> =
	T extends `${infer Prefix}/${Key}${infer Suffix}` ? `${Prefix}/${Value}${Suffix}`
	: T extends `${infer Prefix}/${Key}` ? `${Prefix}/${Value}`
	: T extends `/${Key}${infer Suffix}` ? `${Value}${Suffix}`
	: T extends `/${Key}` ? `${Value}`
	: never

export type RemapBranch<Branch, Prefix extends string> = {
	[K in keyof Branch]:
		Branch extends { _: infer Prefix2 extends string }
			? Branch[K] extends string
			? K extends "_" ? { short: Branch[K], full: Join<[Prefix, Branch[K]]> }
			: { short: Branch[K], full: Join<[Prefix, Prefix2, Branch[K]]> }
			: RemapBranch<Branch[K], Join<[Prefix, Prefix2]>>
		: never
}

export type Remap<Obj, R, W> = {
	[K in keyof Obj]: Obj[K] extends R ? W : R
}

export function routeWithId<
	U extends string,
	V extends string,
	N extends string | number
>(route: `${U}/:id${V}`, id: N): `${U}/${N}${V}`
{
	return route.replace(':id', id + '') as any
}

export function routeWithParam<
	Key extends `:${string}`,
	Route extends `${string}/${Key}${string}`,
	Id extends string | number
>(route: Route, key: Key, id: Id): SwapParam<Key, Route, Id>
{
	return route.replace(key, id + '') as any
}


export const branchToRoute = <
	Prefix extends string,
	Branch extends { _: string }
>(branch: Branch, prefix: Prefix): RemapBranch<Branch, Prefix> =>
{
	let remapped = {} as any
	let prefix2 = branch._
	for (let key in branch)
	{
		let val = branch[key]
		if (typeof val != "string")
			remapped[key] = branchToRoute(val as any, `${prefix}${prefix2}`)
		else
		{
			if (key == "_")
				remapped[key] = {
					short: val,
					full: `${prefix}${val}`
				}
			else
				remapped[key] = {
					short: val,
					full: `${prefix}${prefix2}${val}`
				}
		}
	}
	return remapped
}
