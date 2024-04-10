import { TypedResponse, json } from '@remix-run/node';
import { Message, writeErrorLog } from '@util';

export type ValidationErrorActionActionResponse = Message;

export const validationErrorAction = async (
	message: string,
): Promise<TypedResponse<ValidationErrorActionActionResponse>> => {
	const response = { message: message };
	writeErrorLog(response);
	return json(response, 404);
};
