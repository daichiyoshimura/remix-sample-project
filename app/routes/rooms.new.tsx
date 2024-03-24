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
			<Header currentPageTitle="New Room" />
			<Box className="mx-auto mt-16">
				<NewRoomForm onSubmit={handleSubmit} />
			</Box>
			<Footer />
		</div>
	);
};

export default NewRoomPage;
