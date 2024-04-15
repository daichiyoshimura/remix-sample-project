import { LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Participant, Room, getParticipantList, getRoom } from '@api';
import { MappedTypes, isString, writeRequestLog } from '@util';
import { InternalSeverErrorLoaderResponse, internalServerErrorLoader } from '@loaders';
import { MutationTimes } from '@util/server';

export type RoomProfilePageLoaderRequest = Participant;

type Participants = {
	participants: Participant[];
};

export type RoomProfilePageLoaderResponse =
	| MappedTypes<Participants & Room & MutationTimes>
	| InternalSeverErrorLoaderResponse;

export const roomProfilePageLoader = async (
	{ request, params }: LoaderFunctionArgs,
): Promise<TypedResponse<RoomProfilePageLoaderResponse>> => {
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
		return internalServerErrorLoader(error);
	}
};
