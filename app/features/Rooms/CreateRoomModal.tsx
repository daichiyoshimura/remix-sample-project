import { z } from 'zod';
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

const createRoomSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64)
		.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces'),
});

type CreateRoomSchema = z.infer<typeof createRoomSchema>;

export type CreateRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ isOpen, onClose }) => {
	const [errorMessageList, setErrorMessageList] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(false);
	const [mutationState, resetMutationStatus, sendRequest] = useHttpClient();

	const onChange = (inputValue: string) => {
		setInputValue(inputValue);
		const body = { name: inputValue };
		setIsValid(validate(body));
	};

	const validate = (body: CreateRoomSchema): boolean => {
		const result = createRoomSchema.safeParse(body);
		if (result.success) {
			setErrorMessageList([]);
			return true;
		}
		setErrorMessageList(
			result.error.issues.map((issue) => {
				return issue.message;
			}),
		);
		return false;
	};

	const handleMutation = async () => {
		const body = { name: inputValue };
		sendRequest<CreateRoomSchema>({
			path: 'rooms',
			method: 'POST',
			body: body,
		});
	};

	const handleClose = () => {
		resetMutationStatus();
		setInputValue('');
		setIsValid(false);
		setErrorMessageList([]);
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
					onChange={onChange}
					placeholder="room name"
					required
				/>
				{errorMessageList.length > 0 &&
					errorMessageList.map((message, index) => (
						<div key={index} className="text-sm text-red-500 mb-4">
							{message}
						</div>
					))}
				<Container alignment="right">
					<Button onClick={handleClose}>do not create</Button>
					<Button onClick={handleMutation} disabled={!isValid} color="safe">
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
