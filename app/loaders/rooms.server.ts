import { callBackendAPI } from './httpclient.server';

interface GetRoomUrlParams {
	roomId: string;
}

interface GetRoomResponseBody {
	id: string;
	name: string;
	createdAt: string;
	createdBy: string;
}

export async function GetRoom({
	roomId,
}: GetRoomUrlParams): Promise<GetRoomResponseBody> {
	try {
		// バックエンドAPIのエンドポイント
		const endpoint = `/rooms/${roomId}`;

		// HTTP GETリクエストを送信して部屋のデータを取得
		const responseData = await callBackendAPI<GetRoomResponseBody>(
			'GET',
			endpoint,
		);

		return responseData;
	} catch (error) {
		console.error('部屋データの取得に失敗しました:', error);
		throw error;
	}
}

export async function GetRoomMock({
	roomId,
}: GetRoomUrlParams): Promise<GetRoomResponseBody> {
	const mockResponseData: GetRoomResponseBody = {
		id: roomId,
		name: `Room ${roomId}`,
		createdAt: '2024-03-24 00:53:00',
		createdBy: 'Owner',
	};
	return mockResponseData;
}
