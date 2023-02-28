import * as React from '@types/react'

declare module 'react' {
	export type FCC<T = {}> = React.FC<PropsWithChildren<T>>
}
