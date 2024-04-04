import { MappedTypes } from '@util/mappedTypes';
import { isStageDev } from '../util/server/env.server';
import { MessageResponse, httpHandler, MutationTimes } from '../util/server/httpHandler.server';

export type RoomAttributes = {
	name: string;
};

export type Room = {
	id: string;
} & RoomAttributes;

type GetRoomRequest = {
	id: string;
	accountId: string;
};

type GetRoomResponse = MappedTypes<Room & MutationTimes>;

export const getRoom = async ({ id, accountId }: GetRoomRequest): Promise<GetRoomResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'Room 1',
			createdAt: '2024-03-24 00:51:00',
			updatedAt: '2024-03-24 00:51:00',
		};
	}
	return await httpHandler<GetRoomResponse>({
		method: 'GET',
		url: `/rooms/${id}`,
		queryParams: {
			accountId: accountId,
		},
	});
};

type GetRoomListRequest = {
	accountId: string;
};

type GetRoomListResponse = {
	rooms: (Room & MutationTimes)[];
};

export const getRoomList = async (
	{ accountId }: GetRoomListRequest,
): Promise<GetRoomListResponse> => {
	if (isStageDev()) {
		return {
			rooms: [
				{
					id: '1',
					name: 'Room 1',
					createdAt: '2024-03-24 00:51:00',
					updatedAt: '2024-03-24 00:51:00',
				},
				{
					id: '2',
					name: 'Room 2',
					createdAt: '2024-03-24 00:51:00',
					updatedAt: '2024-03-24 00:51:00',
				},
				{
					id: '3',
					name: 'Room 3',
					createdAt: '2024-03-24 00:51:00',
					updatedAt: '2024-03-24 00:51:00',
				},
			],
		};
	}

	return await httpHandler<GetRoomListResponse>({
		method: 'GET',
		url: '/rooms',
		queryParams: {
			accountId: accountId,
		},
	});
};

type PostRoomRequest = MappedTypes<{
	accountId: string;
	roomAttributes: RoomAttributes;
}>;

type PostRoomResponse = MappedTypes<Room>;

export const postRoom = async (body: PostRoomRequest): Promise<PostRoomResponse> => {
	if (isStageDev()) {
		return {
			id: 'cr1',
			name: 'CreatedRoom',
		};
	}

	return await httpHandler<PostRoomResponse>({
		method: 'POST',
		url: '/rooms',
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

export const patchRoom = async (body: PatchRoomRequest): Promise<PatchRoomResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'Room 1',
		};
	}

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

export const deleteRoom = async (body: DeleteRoomRequest): Promise<DeleteRoomResponse> => {
	if (isStageDev()) {
		return {
			message: 'success',
		};
	}
	return await httpHandler<DeleteRoomResponse>({
		method: 'DELETE',
		url: `/rooms/${body.id}`,
		body: body,
	});
};
