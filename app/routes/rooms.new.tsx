import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Box from '../components/Box/Box';
import NewRoomForm, { FormData } from '../components/NewRoomForm/NewRoomForm';
import ContentArea from '~/components/ContentArea/ContentArea';
import Container from '~/components/Container/Container';
import LinkButton from '~/components/Button/LinkButton';
import Button from '~/components/Button/Button';

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
				<Container>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					>
						Create Room
					</Button>
				</Container>
			</ContentArea>
			<Footer />
		</>
	);
};

export default NewRoomPage;
