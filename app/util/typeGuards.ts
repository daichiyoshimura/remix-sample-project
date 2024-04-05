import { ActionError, LoaderError } from '@util';

export const isDefined = <T>(value: T | undefined): value is T => {
	return value !== undefined;
};

export const isString = isDefined<string>;

export const isNumber = isDefined<number>;

export const isLoaderError = (error: any): error is LoaderError => {
	return error instanceof LoaderError;
};

export const isActionError = (error: any): error is ActionError => {
	return error instanceof ActionError;
};
