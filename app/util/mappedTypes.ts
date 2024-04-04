export type MappedTypes<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: MappedTypes<O[K]> }
		: never
	: T;
