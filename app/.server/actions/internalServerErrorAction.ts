import { TypedResponse, json } from '@remix-run/node';
import { MessageWithSuccess, isError, writeErrorLog } from '@util';

export type InternalSeverErrorActionResponse = MessageWithSuccess;

export const internalServerErrorAction = async (
	error: unknown,
): Promise<TypedResponse<InternalSeverErrorActionResponse>> => {
	const logMessage = isError(error) ? error.message : 'unexpected error';
	writeErrorLog({ message: logMessage });
	return json(
		{
			success: false,
			message: 'Please try again later, or contact support if the issue persists',
		},
		500,
	);
};
