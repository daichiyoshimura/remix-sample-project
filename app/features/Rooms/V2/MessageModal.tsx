import { Button, Container, DescriptionText, Modal, TitleText } from '@components';

export type MessageModalProps = {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
};

export const MessageModal: React.FC<MessageModalProps> = (
	{ title, description, isOpen, onClose },
) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<TitleText title={title} />
			<DescriptionText description={description} />
			<Container alignment="right">
				<Button onClick={onClose}>close</Button>
			</Container>
		</Modal>
	);
};
