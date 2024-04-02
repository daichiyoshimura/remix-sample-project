import { MessageResponse, httpHandler } from './util/httpHandler.server';

type GetRoomRequest = {
	id: string;
	accountId: string;
};

type Room = {
	id: string;
	name: string;
};

type GetRoomResponse = Room;

export const getRoom = async ({
	id,
	accountId,
}: GetRoomRequest): Promise<GetRoomResponse> => {
	return await httpHandler<GetRoomResponse>({
		method: 'GET',
		url: `/rooms/${id}`,
		queryParams: {
			id: id,
			accountId: accountId,
		},
	});
};

type GetRoomListRequest = {
	accountId: string;
};

type GetRoomListResponse = {
	rooms: Room[];
};

export const getRoomList = async ({
	accountId,
}: GetRoomListRequest): Promise<GetRoomListResponse> => {
	return await httpHandler<GetRoomListResponse>({
		method: 'GET',
		url: '/rooms',
		queryParams: {
			accountId: accountId,
		},
	});
};

type PostRoomRequest = {
	accountId: string;
	room: Room;
};

type PostRoomResponse = Room;

export const postRoom = async (
	body: PostRoomRequest,
): Promise<PostRoomResponse> => {
	return await httpHandler<PostRoomResponse>({
		method: 'POST',
		url: `/rooms`,
		body: body,
	});
};

type PatchRoomRequest = {
	accountId: string;
	room: {
		id: string;
		name: string;
	};
};

type PatchRoomResponse = Room;

export const patchRoom = async (
	body: PatchRoomRequest,
): Promise<PatchRoomResponse> => {
	return await httpHandler<PatchRoomResponse>({
		method: 'PATCH',
		url: `/rooms/${body.room.id}`,
		body: body,
	});
};

type DeleteRoomRequest = {
	id: string;
	accountId: string;
};

type DeleteRoomResponse = MessageResponse;

export const deleteRoom = async (
	body: DeleteRoomRequest,
): Promise<DeleteRoomResponse> => {
	return await httpHandler<DeleteRoomResponse>({
		method: 'DELETE',
		url: `/rooms/${body.id}`,
		body: body,
	});
};
