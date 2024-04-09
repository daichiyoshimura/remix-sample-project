import { LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Participant, Room, getParticipantList, getRoom } from '@api';
import { MappedTypes, isString, writeRequestLog, writeErrorLog, isLoaderError } from '@util';
import { MutationTimes } from '@util/server';

export type RoomLoaderRequest = Participant;

export type RoomLoaderResponse = MappedTypes<
	{
		participants: Participant[];
	} & Room &
		MutationTimes
>;

export const roomLoader = async (
	{ request, params }: LoaderFunctionArgs,
): Promise<TypedResponse<RoomLoaderResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';

		const getRoomReqeuest = { id: roomId, accountId: accountId };
		const getRoomResponse = await getRoom(getRoomReqeuest);

		const getParticipantListRequest = { roomId: roomId };
		const getParticipantListResponse = await getParticipantList(getParticipantListRequest);

		const response = {
			...getRoomResponse,
			...getParticipantListResponse,
		};
		writeRequestLog({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: { accountId: accountId, roomId: roomId },
			response: response,
		});
		return json(response, 200);
	} catch (error) {
		const message = isLoaderError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		throw json(response, 500);
	}
};
