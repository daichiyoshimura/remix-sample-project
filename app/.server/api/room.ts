import { Message, MappedTypes } from '@util';
import { isStageDev, httpHandler, MutationTimes } from '@server/util';

export type RoomAttributes = {
	name: string;
};

export type Room = MappedTypes<
	{
		id: string;
	} & RoomAttributes
>;

type GetRoomRequest = {
	id: string;
	accountId: string;
};

type GetRoomResponse = MappedTypes<Room & MutationTimes>;

export const getRoom = async ({ id, accountId }: GetRoomRequest): Promise<GetRoomResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'Room1',
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

type GetRoomListRequest = MappedTypes<{
	accountId: string;
}>;

type GetRoomListResponse = MappedTypes<{
	rooms: (Room & MutationTimes)[];
}>;

export const getRoomList = async (
	{ accountId }: GetRoomListRequest,
): Promise<GetRoomListResponse> => {
	if (isStageDev()) {
		return {
			rooms: [
				{
					id: '1',
					name: 'Room1',
					createdAt: '2024-03-24 00:51:00',
					updatedAt: '2024-03-24 00:51:00',
				},
				{
					id: '2',
					name: 'Room2',
					createdAt: '2024-03-24 00:51:00',
					updatedAt: '2024-03-24 00:51:00',
				},
				{
					id: '3',
					name: 'Room3',
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

export const postRoom = async ({ roomAttributes }: PostRoomRequest): Promise<PostRoomResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'CreatedRoom',
		};
	}

	return await httpHandler<PostRoomResponse>({
		method: 'POST',
		url: '/rooms',
		body: roomAttributes,
	});
};

type PatchRoomRequest = MappedTypes<{
	accountId: string;
	room: {
		id: string;
		name: string;
	};
}>;

type PatchRoomResponse = MappedTypes<Room>;

export const patchRoom = async (body: PatchRoomRequest): Promise<PatchRoomResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'Room1',
		};
	}

	return await httpHandler<PatchRoomResponse>({
		method: 'PATCH',
		url: `/rooms/${body.room.id}`,
		body: body,
	});
};

type DeleteRoomRequest = MappedTypes<{
	id: string;
	accountId: string;
}>;

type DeleteRoomResponse = Message;

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
