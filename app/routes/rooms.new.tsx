import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Box from '../components/Box/Box';
import NewRoomForm, { FormData } from '../components/NewRoomForm/NewRoomForm';
import ContentArea from '~/components/ContentArea/ContentArea';
import ButtonContainer from '~/components/ButtonContainer/ButtonContainer';
import LinkButton from '~/components/LinkButton/LinkButton';
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
				<ButtonContainer>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					>
						Create Room
					</Button>
				</ButtonContainer>
			</ContentArea>
			<Footer />
		</>
	);
};

export default NewRoomPage;
