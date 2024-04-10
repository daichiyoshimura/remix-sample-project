import { ActionError, LoaderError } from '@util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDefined = <T>(value: any): value is T => {
	return (value as T) !== undefined && value !== null;
};

export const isString = isDefined<string>;

export const isNumber = isDefined<number>;

export const isBoolean = isDefined<boolean>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isLoaderError = (error: any): error is LoaderError => {
	return error instanceof LoaderError;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isActionError = (error: any): error is ActionError => {
	return error instanceof ActionError;
};
