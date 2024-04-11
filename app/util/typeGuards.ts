// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDefined = <T>(value: unknown): value is T => {
	return value != null;
};

export const isString = isDefined<string>;

export const isNumber = isDefined<number>;

export const isBoolean = isDefined<boolean>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isError = (error: unknown): error is Error => {
	return error instanceof Error;
};
