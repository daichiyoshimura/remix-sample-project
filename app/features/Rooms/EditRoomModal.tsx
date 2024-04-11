import { z } from 'zod';
import { useState } from 'react';
import { Form, useActionData, useNavigation, useRevalidator } from '@remix-run/react';
import { RoomPageActionResponses } from '@actions';
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
};

export const EditRoomModal: React.FC<EditRoomModalProps> = ({ isOpen, onClose, roomId }) => {
	const [inputValue, setInputValue] = useState<string>('');
	const navigation = useNavigation();
	const { revalidate } = useRevalidator();
	const actionData = useActionData<RoomPageActionResponses>();
	const serverErrorMessageList = actionData != null ? [actionData.message] : [];

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const validate = (body: EditRoomSchema): string[] => {
		const result = editRoomSchema.safeParse(body);
		if (result.success) {
			return [];
		}
		return result.error.issues.map((issue) => issue.message);
	};

	const handleClose = () => {
		revalidate();
		setInputValue('');
		onClose();
	};

	const render = () => {
		if (navigation.state === ('loading' || 'submitting')) {
			return <LoadingIcon />;
		}

		if (navigation.state === 'idle' && actionData != null) {
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

	const errorMessageList = validate({ name: inputValue });
	const isValid = errorMessageList.length === 0;

	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			{render()}
		</Modal>
	);
};
