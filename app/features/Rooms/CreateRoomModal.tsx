import { useState } from 'react';
import { useHttpClient } from '@hooks/useHttpClient';
import {
	Button,
	Container,
	MutationModal,
	ModalDescription,
	ModalTitle,
	TextInput,
} from '@components';

export type CreateRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ isOpen, onClose }) => {
	const [inputValue, setInputValue] = useState('');
	const [mutationState, resetMutationStatus, sendRequest] = useHttpClient();

	const handleMutation = async () => {
		type ReqBody = {
			name: string;
		};
		sendRequest<ReqBody>({
			path: 'rooms',
			method: 'POST',
			body: { name: inputValue },
		});
	};

	const handleClose = () => {
		resetMutationStatus();
		setInputValue('');
		onClose();
	};

	const init = () => {
		return (
			<>
				<ModalTitle title={'Create Room'} />
				<ModalDescription
					description={`
							Please enter only alphanumeric characters in this
							field. It is limited to a maximum length of 64
							characters. The use of symbols such as underscores,
							hyphens, and spaces is not permitted.
						`}
				/>
				<TextInput
					value={inputValue}
					onChange={setInputValue}
					placeholder="room name"
					required
				/>
				<Container alignment="right">
					<Button onClick={handleClose}>do not create</Button>
					<Button
						onClick={handleMutation}
						disabled={inputValue.length === 0}
						color="safe"
					>
						create
					</Button>
				</Container>
			</>
		);
	};

	const successMessage = {
		title: 'Success',
		description: 'The Room is created',
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
			mutationContent={init}
			successMessage={successMessage}
			failedMessage={failedMesssage}
		/>
	);
};
