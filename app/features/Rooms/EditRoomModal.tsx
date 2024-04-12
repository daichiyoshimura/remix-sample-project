import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Form, useActionData, useNavigation, useRevalidator } from '@remix-run/react';
import { isDefined } from '@util';
import { RoomProfilePageActionResponses } from '@actions';
import {
	Button,
	Container,
	DescriptionText,
	TitleText,
	TextInput,
	ErrorTextList,
	LoadingIcon,
	Modal,
} from '@components';
import { validateZodObject } from '@util/validator';

const editRoomSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64)
		.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces'),
});

export type EditRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
	roomId: string;
};

export const EditRoomModal: React.FC<EditRoomModalProps> = ({ isOpen, onClose, roomId }) => {
	const [inputValue, setInputValue] = useState<string>('');
	const [mutationState, setMutationState] = useState<'init' | 'success' | 'failed'>('init');
	const { state } = useNavigation();
	const { revalidate } = useRevalidator();
	const actionData = useActionData<RoomProfilePageActionResponses>();

	useEffect(() => {
		const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
		if (!hasActionData) return;
		if (actionData.success) {
			setMutationState('success');
			return;
		}
		setMutationState('failed');
	}, [actionData]);

	const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData ? [actionData.message] : [];
	const [isValid, errorMessageList] = validateZodObject(editRoomSchema, { name: inputValue });

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const handleClose = () => {
		revalidate();
		setMutationState('init');
		setInputValue('');
		onClose();
	};

	const render = () => {
		if (state === ('loading' || 'submitting')) {
			return <LoadingIcon />;
		}

		if (state === 'idle' && mutationState === 'success') {
			return (
				<>
					<TitleText title={'Success'} />
					<DescriptionText description={'The Room is edited'} />
					<Container alignment="right">
						<Button onClick={handleClose}>close</Button>
					</Container>
				</>
			);
		}

		return (
			<>
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
					<ErrorTextList textList={serverErrorMessageList} />
					<Container alignment="right">
						<Button onClick={handleClose}>Do not save</Button>
						<Button type="submit" color="safe" disabled={!isValid}>
							Save
						</Button>
					</Container>
				</Form>
			</>
		);
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			{render()}
		</Modal>
	);
};
