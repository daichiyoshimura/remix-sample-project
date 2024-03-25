import type { LoaderFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import { RoomProfileProps } from '~/components/RoomProfile/RoomProfile';
import RoomList from '../components/RoomCardList/RoomCardList';
import Header from '../components/Header/Header';
import Box from '../components/Box/Box';
import Footer from '~/components/Footer/Footer';
import LinkButton from '../components/LinkButton/LinkButton';
import ContentArea from '~/components/ContentArea/ContentArea';
import ButtonContainer from '~/components/ButtonContainer/ButtonContainer';

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
				<ButtonContainer>
					<LinkButton to="/rooms/new">Create New Room</LinkButton>
				</ButtonContainer>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
