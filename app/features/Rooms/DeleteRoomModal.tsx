import { useState } from 'react';
import { useHttpClient } from '@hooks/useHttpClient';
import {
	Button,
	Container,
	MutationModal,
	DescriptionText,
	TitleText,
	TextInput,
} from '@components';

export type DeleteRoomModalProps = {
	isOpen: boolean;
	name: string;
	onClose: () => void;
	roomId: string;
};

export const DeleteRoomModal: React.FC<DeleteRoomModalProps> = (
	{ isOpen, name, onClose, roomId },
) => {
	const [inputValue, setInputValue] = useState('');
	const [mutationState, resetMutationState, sendRequest] = useHttpClient();

	const handleMutation = async () =>
		sendRequest<Record<string, never>>({
			path: roomId,
			method: 'DELETE',
		});

	const handleClose = () => {
		resetMutationState();
		setInputValue('');
		onClose();
	};

	const mutationContent = () => {
		return (
			<>
				<TitleText title={'Are you sure you want to delete?'} />
				<DescriptionText
					description={`
								To delete, please enter the same name in the textbox below and
								press the delete button.
							`}
				/>
				<TextInput
					value={inputValue}
					onChange={setInputValue}
					placeholder={name}
					required
				/>
				<Container alignment="right">
					<Button onClick={handleClose}>do not delete</Button>
					<Button onClick={handleMutation} color="caution" disabled={inputValue !== name}>
						delete
					</Button>
				</Container>
			</>
		);
	};

	const successMessage = {
		title: 'Success',
		description: 'The room is deleted',
	};

	const failedMesssage = {
		title: 'Failed',
		description: 'Please try again later, or contact support if the issue persists',
	};

	return (
		<MutationModal
			isOpen={isOpen}
			mutationState={mutationState}
			handleMutation={handleMutation}
			handleClose={handleClose}
			mutationContent={mutationContent}
			successMessage={successMessage}
			failedMessage={failedMesssage}
		/>
	);
};
