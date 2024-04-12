import { TypedResponse, json } from '@remix-run/node';
import { MessageWithSuccess, writeErrorLog } from '@util';

export type ValidationErrorActionActionResponse = MessageWithSuccess;

export const validationErrorAction = async (
	message: string,
): Promise<TypedResponse<ValidationErrorActionActionResponse>> => {
	writeErrorLog({ message: message });
	return json({ success: false, message: message }, 400);
};
