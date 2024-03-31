import { callBackendAPI } from './httpclient.server';

interface GetParticipantsQueryParams {
	roomId: string;
}

interface GetParticipantsResponseBody {
	participants: Participant[];
}

interface Participant {
	id: string;
	name: string;
	part: string;
}

export async function GetParticipants({
	roomId,
}: GetParticipantsQueryParams): Promise<GetParticipantsResponseBody> {
	try {
		// バックエンドAPIのエンドポイント
		const endpoint = '/participants';

		// クエリパラメータの組み立て
		const queryParams = {
			roomId: roomId,
		};

		// HTTP GETリクエストを送信して参加者データを取得
		const responseData = await callBackendAPI<GetParticipantsResponseBody>(
			'GET',
			endpoint,
			undefined, // リクエストボディは不要なのでundefinedを渡す
			queryParams, // クエリパラメータを渡す
		);

		return responseData;
	} catch (error) {
		console.error('参加者データの取得に失敗しました:', error);
		throw error;
	}
}

export async function GetParticipantsMock({
	roomId,
}: GetParticipantsQueryParams): Promise<GetParticipantsResponseBody> {
	return {
		participants: [
			{ id: '1', name: 'John', part: 'Tp' },
			{ id: '2', name: 'Emma', part: 'Sax' },
			{ id: '3', name: 'Kate', part: 'Pf' },
		],
	};
}
