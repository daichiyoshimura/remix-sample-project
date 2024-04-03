import React, { useState } from 'react';
import { useHttpClient } from '~/hooks/useHttpClient';

import Container from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import ModalTitle from '~/components/ModalContent/ModalTitle';
import ModalDescription from '~/components/ModalContent/ModalDescription';
import ModalMessage from '~/components/ModalContent/ModalMessage';
import MutationModal from '~/components/Modal/MutationModal';

export interface EditRoomModalProps {
	isOpen: boolean;
	name: string;
	onClose: () => void;
	roomId: string;
}

const EditRoomModal: React.FC<EditRoomModalProps> = ({
	isOpen,
	name,
	onClose,
	roomId,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [mutationState, resetMutationState, sendRequest] = useHttpClient();
	type ReqBody = {
		name: string;
	};
	const handleMutation = async () =>
		sendRequest<ReqBody>({
			path: roomId,
			method: 'PATCH',
			body: { name: inputValue },
		});

	const handleClose = () => {
		resetMutationState();
		setInputValue('');
		onClose();
	};

	const init = () => {
		return (
			<>
				<ModalTitle title={'Edit'} />
				<ModalDescription
					description={`
						    Please enter only alphanumeric characters in this field. 
							It is limited to a maximum length of 64 characters. 
							The use of symbols such as underscores, hyphens, and spaces is not permitted.
						`}
				/>
				<TextInput
					value={inputValue}
					onChange={setInputValue}
					placeholder={name}
					required
				/>
				<Container alignment="right">
					<Button onClick={handleClose}>Do not save</Button>
					<Button
						onClick={handleMutation}
						disabled={
							inputValue === name || inputValue.length === 0
						}
						color="safe"
					>
						Save
					</Button>
				</Container>
			</>
		);
	};

	const successMessage = {
		title: 'Success',
		description: 'The room is edited',
	};

	const failedMesssage = {
		title: 'Failed',
		description:
			'Please try again later, or contact support if the issue persists',
	};

	return (
		<MutationModal
			isOpen={isOpen}
			onClose={onClose}
			mutationState={mutationState}
			handleMutation={handleMutation}
			handleClose={handleClose}
			init={init}
			successMessage={successMessage}
			failedMessage={failedMesssage}
		/>
	);
};

export default EditRoomModal;
