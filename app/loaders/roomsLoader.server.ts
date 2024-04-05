import { LoaderFunction, LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Room, getRoomList } from '@api';
import { MappedTypes, Message, isString, writeErrorLog, writeRequestLog } from '@util';
import { MutationTimes } from '@util/server';

export type RoomsLoaderResponse = MappedTypes<
	{
		rooms?: (Room & MutationTimes)[];
	} & Message
>;

export const roomsLoader: LoaderFunction = async (
	{ request, params }: LoaderFunctionArgs,
): Promise<TypedResponse<RoomsLoaderResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const getRoomListRequest = { accountId: accountId };
		const getRoomListResponse = await getRoomList(getRoomListRequest);
		writeRequestLog({
			path: `/rooms`,
			method: request.method,
			request: getRoomListRequest,
			response: getRoomListResponse,
		});
		return json(getRoomListResponse, 200);
	} catch (error) {
		const err = error instanceof Error ? error : new Error('unexpected error');
		writeErrorLog({ message: err.message });
		return json({ message: err.message }, 500);
	}
};
