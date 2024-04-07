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

export type EditRoomModalProps = {
	isOpen: boolean;
	name: string;
	onClose: () => void;
	roomId: string;
};

export const EditRoomModal: React.FC<EditRoomModalProps> = ({ isOpen, name, onClose, roomId }) => {
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

	const mutationContent = () => {
		return (
			<>
				<TitleText title={'Edit'} />
				<DescriptionText
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
						disabled={inputValue === name || inputValue.length === 0}
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
