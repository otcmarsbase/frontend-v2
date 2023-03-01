export type Remap<Obj, R, W> = {
	[K in keyof Obj]: Obj[K] extends R ? W : R
}