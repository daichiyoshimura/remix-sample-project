import { Button, Container, ModalDescription, ModalTitle } from '@components';

export type ModalMessageProps = {
	title: string;
	description: string;
	handleClose: () => void;
};

export const ModalMessage: React.FC<ModalMessageProps> = ({ title, description, handleClose }) => {
	return (
		<>
			<ModalTitle title={title} />
			<ModalDescription description={description} />
			<Container alignment="right">
				<Button onClick={handleClose}>close</Button>
			</Container>
		</>
	);
};
