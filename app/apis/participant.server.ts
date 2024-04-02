import { isStageDev } from './util/env.server';
import { httpHandler } from './util/httpHandler.server';

type GetParticipantRequest = {
	id: string;
	roomId: string;
};

type Partisipant = {
	id: string;
	name: string;
	part: string;
};

type GetParticipantResponse = Partisipant;

export const getParticipant = async ({
	id,
	roomId,
}: GetParticipantRequest): Promise<GetParticipantResponse> => {
	if (isStageDev()) {
		return {
			id: '1',
			name: 'John',
			part: 'Tp',
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

type GetParticipantListResponse = {
	prticipants: Partisipant[];
};

export const getParticipantList = async ({
	roomId,
}: GetParticipantListRequest): Promise<GetParticipantListResponse> => {
	if (isStageDev()) {
		return {
			prticipants: [
				{ id: '1', name: 'John', part: 'Tp' },
				{ id: '2', name: 'Emma', part: 'Sax' },
				{ id: '3', name: 'Kate', part: 'Pf' },
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
