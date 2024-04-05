import { ActionError, LoaderError } from '@util';


export const isDefined = <T>(value: T | undefined): value is T => {
	return value !== undefined;
};

export const isString = isDefined<string>;

export const isNumber = isDefined<number>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isLoaderError = (error: any): error is LoaderError => {
	return error instanceof LoaderError;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isActionError = (error: any): error is ActionError => {
	return error instanceof ActionError;
};