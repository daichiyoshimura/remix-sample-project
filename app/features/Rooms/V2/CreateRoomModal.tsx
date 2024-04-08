import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Form, useNavigation } from '@remix-run/react';
import { useMutationState, useMutationSwitcher } from '@hooks';
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
	const [modalState, setModalState] = useMutationState('init');
	const navigation = useNavigation();

	const onChange = (value: string) => {
		setInputValue(value);
	};

	useEffect(() => {
		console.log(JSON.stringify(navigation));
	}, [navigation]);

	const validate = (body: CreateRoomSchema): string[] => {
		const result = createRoomSchema.safeParse(body);
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
				<TitleText title={'Create Room'} />
				<DescriptionText
					description={`
							Please enter only alphanumeric characters in this
							field. It is limited to a maximum length of 64
							characters. The use of symbols such as underscores,
							hyphens, and spaces is not permitted.
						`}
				/>
				<Form action="/rooms" method="POST">
					<TextInput value={inputValue} onChange={onChange} placeholder="name" required />
					<ErrorTextList textList={errorMessageList} />
					<Container alignment="right">
						<Button onClick={handleClose}>do not create</Button>
						<Button type="submit" disabled={!isValid}>
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
				description={'The Room is created'}
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
