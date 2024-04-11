import { z } from 'zod';
import { useState } from 'react';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { isDefined } from '@util';
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
import { validateZodObject } from '@util/validator';

const deleteRoomSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64)
		.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces'),
});

export type DeleteRoomModalProps = {
	isOpen: boolean;
	onClose: () => void;
	roomId: string;
	name: string;
};

export const DeleteRoomModal: React.FC<DeleteRoomModalProps> = (
	{ isOpen, onClose, roomId, name },
) => {
	const [inputValue, setInputValue] = useState<string>('');
	const { state } = useNavigation();
	const actionData = useActionData<RoomPageActionResponses>();
	const isDefinedActionData = isDefined<RoomPageActionResponses>(actionData);
	const serverErrorMessageList = isDefinedActionData ? [actionData.message] : [];
	const [isValid, errorMessageList] = validateZodObject(deleteRoomSchema, { name: inputValue });

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
						placeholder={name}
						required
					/>
					<ErrorTextList textList={errorMessageList} />
					<ErrorTextList textList={serverErrorMessageList} />
					<Container alignment="right">
						<Button onClick={handleClose}>Do not delete</Button>
						<Button
							type="submit"
							color="caution"
							disabled={!(isValid && inputValue === name)}
						>
							Delete
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
