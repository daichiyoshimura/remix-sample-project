import { z } from 'zod';
import { useState } from 'react';
import { useHttpClient } from '@hooks/useHttpClient';
import {
	Button,
	Container,
	MutationModal,
	DescriptionText,
	TitleText,
	TextInput,
	ErrorTextList,
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
	const [inputValue, setInputValue] = useState<string>('');
	const [mutationState, resetMutationStatus, sendRequest] = useHttpClient();

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const validate = (body: CreateRoomSchema): string[] => {
		const result = createRoomSchema.safeParse(body);
		if (result.success) {
			return [];
		}
		return result.error.issues.map((issue) => issue.message);
	};

	const handleMutation = async () => {
		sendRequest<CreateRoomSchema>({
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
		const errorMessageList = validate({ name: inputValue });
		const isValid = errorMessageList.length === 0;

		return (
			<>
				<TitleText title={'Create Room'} />
				<DescriptionText
					description={`
							Please enter only alphanumeric characters in this
							field. It is limited to a maximum length of 64
							characters. The use of symbols such as underscores,
							hyphens, and spaces is not permitted.
						`}
				/>
				<TextInput
					name="name"
					value={inputValue}
					onChange={onChange}
					placeholder="room name"
					required
				/>
				<ErrorTextList textList={errorMessageList} />
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
