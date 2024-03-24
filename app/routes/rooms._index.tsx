import type { LoaderFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import { RoomProfileProps } from '~/components/RoomProfile';
import RoomList from '../components/RoomList';
import Header from '../components/Header';
import Box from '../components/Box';
import Footer from '~/components/Footer';
import LinkButton from '../components/LinkButton';
import ContentArea from '~/components/ContentArea';

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
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomList rooms={rooms} />
				</Box>
				<Box>
					<LinkButton to="/rooms/new">Create New Room</LinkButton>
				</Box>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
