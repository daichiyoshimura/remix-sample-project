import { callBackendAPI } from './httpclient';

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

		// クエリパラメータの組み立て
		const queryParams = {
			roomId: roomId,
		};

		// HTTP GETリクエストを送信して部屋のデータを取得
		const responseData = await callBackendAPI<GetRoomResponseBody>(
			'GET',
			endpoint,
			queryParams,
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
	return {
		id: roomId,
		name: `Room ${roomId}`,
		createdAt: '2024-03-24 00:53:00',
		createdBy: 'Owner',
	};
}

interface GetRoomsQueryParams {
	accountId: string;
}

interface GetRoomsResponseBody {
	rooms: Room[];
}

interface Room {
	id: string;
	name: string;
	createdAt: string;
	createdBy: string;
}

export async function GetRooms({
	accountId,
}: GetRoomsQueryParams): Promise<GetRoomsResponseBody> {
	try {
		// バックエンドAPIのエンドポイント
		const endpoint = `/rooms`;

		// HTTP GETリクエストを送信して部屋のデータを取得
		const responseData = await callBackendAPI<GetRoomsResponseBody>(
			'GET',
			endpoint,
		);

		return responseData;
	} catch (error) {
		console.error('部屋データの取得に失敗しました:', error);
		throw error;
	}
}

export async function GetRoomsMock({
	accountId,
}: GetRoomsQueryParams): Promise<GetRoomsResponseBody> {
	return {
		rooms: [
			{
				id: '1',
				name: 'Room 1',
				createdAt: '2024-03-24 00:51:00',
				createdBy: 'owner',
			},
			{
				id: '2',
				name: 'Room 2',
				createdAt: '2024-03-24 00:51:00',
				createdBy: 'owner',
			},
			{
				id: '3',
				name: 'Room 3',
				createdAt: '2024-03-24 00:51:00',
				createdBy: 'owner',
			},
		],
	};
}
