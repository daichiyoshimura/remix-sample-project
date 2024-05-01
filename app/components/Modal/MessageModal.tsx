import { DescriptionText, Modal, TextButton, TitleText } from '@components';
import { MessageModalLayout } from '@layouts';

export type MessageModalProps = {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
};

export const MessageModal = ({ title, description, isOpen, onClose }: MessageModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<MessageModalLayout
				title={<TitleText title={title} />}
				description={<DescriptionText description={description} />}
				buttons={<TextButton onClick={onClose} caption={'close'} />}
			/>
		</Modal>
	);
};
