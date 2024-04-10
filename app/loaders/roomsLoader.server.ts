import { LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Room, getRoomList } from '@api';
import { MappedTypes, isString, writeRequestLog } from '@util';
import { InternalSeverErrorActionResponse, internalServerErrorAction } from '@actions';
import { MutationTimes } from '@util/server';

type Rooms = MappedTypes<{
	rooms: (Room & MutationTimes)[];
}>;

export type RoomsLoaderResponse = Rooms | InternalSeverErrorActionResponse;

export const roomsLoader = async (
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
		return internalServerErrorAction(error);
	}
};
