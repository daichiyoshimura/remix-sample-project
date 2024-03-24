// rooms.new.tsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import NewRoomForm, { FormData } from '../components/NewRoomForm'; // FormData をインポート
import ContentArea from '~/components/ContentArea';

const NewRoomPage = () => {
	const handleSubmit = (formData: FormData) => {
		// フォームデータの送信ロジックを追加
		console.log(formData);
	};

	return (
		<>
			<Header currentPageTitle="Create Room" />
			<ContentArea>
				<Box>
					<NewRoomForm onSubmit={handleSubmit} />
				</Box>
			</ContentArea>
			<Footer />
		</>
	);
};

export default NewRoomPage;
