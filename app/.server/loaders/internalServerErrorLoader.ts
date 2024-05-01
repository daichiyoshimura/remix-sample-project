import { TypedResponse, json } from '@remix-run/node';
import { MessageWithSuccess, isError } from '@util';

export type InternalSeverErrorLoaderResponse = MessageWithSuccess;

export const internalServerErrorLoader = async (
	error: unknown,
): Promise<TypedResponse<InternalSeverErrorLoaderResponse>> => {
	const logMessage = isError(error) ? error.message : 'unexpected error';
	return json(
		{
			success: false,
			message: 'Please try again later, or contact support if the issue persists',
		},
		500,
	);
};
