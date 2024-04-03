import React, { useState } from 'react';
import { useHttpClient } from '~/hooks/useHttpClient';

import Container from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import ModalTitle from '~/components/ModalContent/ModalTitle';
import ModalDescription from '~/components/ModalContent/ModalDescription';
import MutationModal from '~/components/Modal/MutationModal';
import ModalMessage from '~/components/ModalContent/ModalMessage';

export interface DeleteRoomModalProps {
	isOpen: boolean;
	name: string;
	onClose: () => void;
	roomId: string;
}

const DeleteRoomModal: React.FC<DeleteRoomModalProps> = ({
	isOpen,
	name,
	onClose,
	roomId,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [mutationState, resetMutationState, sendRequest] = useHttpClient();

	const handleMutation = async () =>
		sendRequest<{}>({
			path: roomId,
			method: 'DELETE',
		});

	const handleClose = () => {
		resetMutationState();
		setInputValue('');
		onClose();
	};

	const init = () => {
		return (
			<>
				<ModalTitle title={'Are you sure you want to delete?'} />
				<ModalDescription
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
					<Button
						onClick={handleMutation}
						color="caution"
						disabled={inputValue !== name}
					>
						delete
					</Button>
				</Container>
			</>
		);
	};

	const success = () => {
		return (
			<>
				<ModalMessage
					title={'Success'}
					description={'The room is deleted'}
					handleClose={handleClose}
				/>
			</>
		);
	};

	const failed = () => {
		return (
			<>
				<ModalMessage
					title={'Failed to create room'}
					description={
						'Please try again later, or contact support if the issue persists'
					}
					handleClose={handleClose}
				/>
			</>
		);
	};

	return (
		<MutationModal
			isOpen={isOpen}
			onClose={onClose}
			mutationState={mutationState}
			handleMutation={handleMutation}
			handleClose={handleClose}
			init={init}
			success={success}
			failed={failed}
		/>
	);
};

export default DeleteRoomModal;
