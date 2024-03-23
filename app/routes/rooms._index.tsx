import type { LoaderFunction } from '@remix-run/node';
import RoomList from '../components/RoomList';
import { json, useLoaderData } from '@remix-run/react';
import { RoomProfileProps } from '~/components/RoomProfile';

export const loader: LoaderFunction = async () => {
	// ここでデータを取得するロジックを追加（APIからデータを取得するなど）
	const rooms: RoomProfileProps[] = [
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
	];
	return json({ rooms });
};

const RoomsPage = () => {
	const { rooms } = useLoaderData<typeof loader>();

	return (
		<div>
			<h1>Rooms</h1>
			<RoomList rooms={rooms} />
		</div>
	);
};

export default RoomsPage;
