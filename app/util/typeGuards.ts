export const isDefined = <T>(value: T | null | undefined): value is NonNullable<T> => {
	return value != null;
};

export const isString = isDefined<string>;

export const isNumber = isDefined<number>;

export const isBoolean = isDefined<boolean>;
