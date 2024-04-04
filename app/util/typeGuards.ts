export const isDefined = <T>(value: T | undefined): value is T => {
	return value !== undefined;
};

export const isString = isDefined<string>;

export const isNumber = isDefined<number>;