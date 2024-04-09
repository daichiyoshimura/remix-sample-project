import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Form, useNavigation } from '@remix-run/react';
import { MutationState, useMutationState, useMutationSwitcher } from '@hooks';
import {
	Button,
	Container,
	DescriptionText,
	TitleText,
	TextInput,
	ErrorTextList,
	LoadingIcon,
	Modal,
	MessageModal,
} from '@components';

const deleteRoomSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64)
		.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces'),
});

type DeleteRoomSchema = z.infer<typeof deleteRoomSchema>;

export type DeleteRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
	roomId?: string;
	state?: MutationState;
};

export const DeleteRoomModal: React.FC<DeleteRoomModalProps> = (
	{ isOpen, onClose, roomId = '', state = 'init' },
) => {
	const [inputValue, setInputValue] = useState<string>('');
	const [modalState, setModalState] = useMutationState(state);
	const navigation = useNavigation();

	const onChange = (value: string) => {
		setInputValue(value);
	};

	useEffect(() => {
		console.log(JSON.stringify(navigation));
	}, [navigation]);

	const validate = (body: DeleteRoomSchema): string[] => {
		const result = deleteRoomSchema.safeParse(body);
		if (result.success) {
			return [];
		}
		return result.error.issues.map((issue) => issue.message);
	};

	const handleClose = () => {
		setModalState('init');
		setInputValue('');
		onClose();
	};

	const init = () => {
		const errorMessageList = validate({ name: inputValue });
		const isValid = errorMessageList.length === 0;

		return (
			<Modal isOpen={isOpen} onClose={handleClose}>
				<TitleText title={'Are you sure you want to delete?'} />
				<DescriptionText
					description={`
								To delete, please enter the same name in the textbox below and
								press the delete button.
							`}
				/>
				<Form action={`/rooms/${roomId}`} method="DELETE">
					<TextInput
						name="name"
						value={inputValue}
						onChange={onChange}
						placeholder="name"
						required
					/>
					<ErrorTextList textList={errorMessageList} />
					<Container alignment="right">
						<Button onClick={handleClose}>do not delete</Button>
						<Button type="submit" color="caution" disabled={!isValid}>
							delete
						</Button>
					</Container>
				</Form>
			</Modal>
		);
	};

	const loading = () => {
		return (
			<Modal isOpen={isOpen} onClose={handleClose}>
				<LoadingIcon />
			</Modal>
		);
	};

	const success = () => {
		return (
			<MessageModal
				title={'Success'}
				description={'The Room is deleted'}
				isOpen={isOpen}
				onClose={handleClose}
			/>
		);
	};

	const failure = () => {
		return (
			<MessageModal
				title={'Failed'}
				description={'Please try again later, or contact support if the issue persists'}
				isOpen={isOpen}
				onClose={handleClose}
			/>
		);
	};

	return useMutationSwitcher(modalState, init, loading, success, failure);
};
