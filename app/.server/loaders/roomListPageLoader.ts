import { LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { MappedTypes, writeRequestLog } from '@util';
import { Room, getRoomList } from '@server/api';
import { MutationTimes, handleServerError } from '@server/util';

export type RoomListLoaderResponse = MappedTypes<{
	rooms: (Room & MutationTimes)[];
}>;

export const roomListPageLoader = async (
	{ request, params }: LoaderFunctionArgs,
): Promise<TypedResponse<RoomListLoaderResponse>> => {
	try {
		/*
		if (!isString(params.accountId)) {
			return handleServerError(new ValidationError('account-id is required'));
		}
		*/
		const getRoomListRequest = { accountId: '' };
		const getRoomListResponse = await getRoomList(getRoomListRequest);

		writeRequestLog({
			path: `/rooms`,
			method: request.method,
			request: getRoomListRequest,
			response: getRoomListResponse,
		});
		return json(getRoomListResponse, 200);
	} catch (error) {
		return handleServerError(error);
	}
};
