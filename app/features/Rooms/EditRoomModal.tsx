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

const editRoomSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64)
		.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces'),
});

type EditRoomSchema = z.infer<typeof editRoomSchema>;

export type EditRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
	roomId: string;
	state?: MutationState;
};

export const EditRoomModal: React.FC<EditRoomModalProps> = (
	{ isOpen, onClose, roomId, state = 'init' },
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

	const validate = (body: EditRoomSchema): string[] => {
		const result = editRoomSchema.safeParse(body);
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
				<TitleText title={'Edit Room'} />
				<DescriptionText
					description={`
							Please enter only alphanumeric characters in this field. 
							It is limited to a maximum length of 64 characters. 
							The use of symbols such as underscores, hyphens, and spaces is not permitted.
						`}
				/>
				<Form action={`/rooms/${roomId}`} method="PATCH">
					<TextInput
						name="name"
						value={inputValue}
						onChange={onChange}
						placeholder="name"
						required
					/>
					<ErrorTextList textList={errorMessageList} />
					<Container alignment="right">
						<Button onClick={handleClose}>do not create</Button>
						<Button type="submit" color="safe" disabled={!isValid}>
							create
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
				description={'The room is edited'}
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
