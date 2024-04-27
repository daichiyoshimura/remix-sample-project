import { MappedTypes } from '@util';
import { isStageDev, httpHandler } from '@server/util';

export type PartisipantAttribute = {
	name: string;
};

export type Participant = MappedTypes<
	{
		id: string;
	} & PartisipantAttribute
>;

type GetParticipantRequest = {
	id: string;
	roomId: string;
};

type GetParticipantResponse = Participant;

export const getParticipant = async (
	{ id, roomId }: GetParticipantRequest,
): Promise<GetParticipantResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'John',
		};
	}

	return await httpHandler<GetParticipantResponse>({
		method: 'GET',
		url: `/participants/${id}`,
		queryParams: {
			id: id,
			roomId: roomId,
		},
	});
};

type GetParticipantListRequest = {
	roomId: string;
};

type GetParticipantListResponse = MappedTypes<{
	participants: Participant[];
}>;

export const getParticipantList = async (
	{ roomId }: GetParticipantListRequest,
): Promise<GetParticipantListResponse> => {
	if (isStageDev()) {
		return {
			participants: [
				{ id: '1', name: 'John' },
				{ id: '2', name: 'Emma' },
				{ id: '3', name: 'Kate' },
			],
		};
	}
	return await httpHandler<GetParticipantListResponse>({
		method: 'GET',
		url: '/rooms',
		queryParams: {
			roomId: roomId,
		},
	});
};
