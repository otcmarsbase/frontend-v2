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
