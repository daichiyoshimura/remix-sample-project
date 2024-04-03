import React, { useState } from 'react';
import { useHttpClient } from '~/hooks/useHttpClient';

import Container from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import ModalTitle from '~/components/ModalContent/ModalTitle';
import ModalDescription from '~/components/ModalContent/ModalDescription';
import MutationModal from '~/components/Modal/MutationModal';

export interface CreateRoomModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({
	isOpen,
	onClose,
}) => {
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
		description:
			'Please try again later, or contact support if the issue persists',
	};

	return (
		<MutationModal
			isOpen={isOpen}
			mutationState={mutationState}
			handleMutation={handleMutation}
			handleClose={handleClose}
			init={init}
			successMessage={successMessage}
			failedMessage={failedMesssage}
		/>
	);
};

export default CreateRoomModal;
