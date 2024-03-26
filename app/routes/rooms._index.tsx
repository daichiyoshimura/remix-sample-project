import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomCardList, {
	RoomCardListProps,
} from '~/components/RoomCardList/RoomCardList';
import Header from '~/components/Header/Header';
import Box from '~/components/Box/Box';
import Footer from '~/components/Footer/Footer';
import LinkButton from '~/components/LinkButton/LinkButton';
import ContentArea from '~/components/ContentArea/ContentArea';
import ButtonContainer from '~/components/ButtonContainer/ButtonContainer';
import { GetRoomsMock } from '~/loaders/rooms';

export const loader: LoaderFunction = async () => {
	const roomCardListProps: RoomCardListProps = await GetRoomsMock({
		accountId: '1',
	});
	return roomCardListProps;
};

const RoomsPage = () => {
	const { rooms } = useLoaderData<RoomCardListProps>();

	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomCardList rooms={rooms} />
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
