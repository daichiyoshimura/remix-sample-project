import { z } from 'zod';
import { useState } from 'react';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { isDefined, validateZodObject } from '@util';
import { RoomListPageActionResponses } from '@actions';
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

const createRoomSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64)
		.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces'),
});

export type CreateRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ isOpen, onClose }) => {
	const [inputValue, setInputValue] = useState<string>('');
	const { state } = useNavigation();
	const actionData = useActionData<RoomListPageActionResponses>();
	const isDefinedActionData = isDefined<RoomListPageActionResponses>(actionData);
	const serverErrorMessageList = isDefinedActionData ? [actionData.message] : [];
	const [isValid, errorMessageList] = validateZodObject(createRoomSchema, { name: inputValue });

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const handleClose = () => {
		setInputValue('');
		onClose();
	};

	const render = () => {
		if (state === ('loading' || 'submitting')) {
			return <LoadingIcon />;
		}

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
				<Form action="/rooms?index" method="POST">
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
						<Button onClick={handleClose}>Do not create</Button>
						<Button type="submit" color="safe" disabled={!isValid}>
							Create
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
