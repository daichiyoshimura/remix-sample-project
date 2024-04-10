import { TypedResponse, json } from '@remix-run/node';
import { Message, isError, writeErrorLog } from '@util';

export type InternalSeverErrorActionResponse = Message;

export const internalServerErrorAction = async (
	error: unknown,
): Promise<TypedResponse<InternalSeverErrorActionResponse>> => {
	const logMessage = isError(error) ? error.message : 'unexpected error';
	writeErrorLog({ message: logMessage });
	return json(
		{
			message: 'Please try again later, or contact support if the issue persists',
		},
		500,
	);
};
