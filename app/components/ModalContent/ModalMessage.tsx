import { Button, Container, DescriptionText, TitleText } from '@components';

export type ModalMessageProps = {
	title: string;
	description: string;
	handleClose: () => void;
};

export const ModalMessage: React.FC<ModalMessageProps> = ({ title, description, handleClose }) => {
	return (
		<>
			<TitleText title={title} />
			<DescriptionText description={description} />
			<Container alignment="right">
				<Button onClick={handleClose}>close</Button>
			</Container>
		</>
	);
};
