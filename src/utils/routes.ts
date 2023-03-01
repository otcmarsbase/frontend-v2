import { Join } from "../types";

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