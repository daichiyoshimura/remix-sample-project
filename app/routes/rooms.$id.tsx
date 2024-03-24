import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomProfile, { RoomProfileProps } from '../components/RoomProfile';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ContentArea from '~/components/ContentArea';

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
		<div>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<RoomProfile
					id={roomProfileProps.id}
					name={roomProfileProps.name}
					createdAt={roomProfileProps.createdAt}
					createdBy={roomProfileProps.createdBy}
				/>
			</ContentArea>
			<Footer copyRights="2024 All Rights Reserved" />
		</div>
	);
};

export default RoomProfilePage;
