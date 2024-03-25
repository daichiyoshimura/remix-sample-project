import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomProfile, {
	RoomProfileProps,
} from '../components/RoomProfile/RoomProfile';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ContentArea from '~/components/ContentArea/ContentArea';
import Box from '~/components/Box/Box';
import LinkButton from '~/components/LinkButton/LinkButton';
import Button from '~/components/Button/Button';
import ButtonContainer from '~/components/ButtonContainer/ButtonContainer';

export const loader: LoaderFunction = async ({ params }) => {
	const id = params.id as string; // paramsからidを取得
	// ここでidに基づいて部屋の詳細データを取得するロジックを追加
	const roomProfileProps: RoomProfileProps = {
		id,
		name: `Room ${id}`,
		createdAt: '2024-03-24 00:53:00',
		createdBy: 'Owner',
	}; // サンプルデータ

	return roomProfileProps;
};

const RoomProfilePage = () => {
	const roomProfileProps: RoomProfileProps = useLoaderData();

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={roomProfileProps.id}
						name={roomProfileProps.name}
						createdAt={roomProfileProps.createdAt}
						createdBy={roomProfileProps.createdBy}
					/>
				</Box>
				<ButtonContainer>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
						color="red"
					>
						Delete This Room
					</Button>
				</ButtonContainer>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
