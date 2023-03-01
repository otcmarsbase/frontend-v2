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