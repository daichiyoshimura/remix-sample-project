// rooms.new.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import NewRoomForm, { FormData } from '../components/NewRoomForm'; // FormData をインポート

const NewRoomPage = () => {
	const handleSubmit = (formData: FormData) => {
		// フォームデータの送信ロジックを追加
		console.log(formData);
	};

	return (
		<div>
			<Header currentPageTitle="Create Room" />
			<Box>
				<NewRoomForm onSubmit={handleSubmit} />
			</Box>
			<Footer copyRights="2024 All Rights Reserved" />
		</div>
	);
};

export default NewRoomPage;
