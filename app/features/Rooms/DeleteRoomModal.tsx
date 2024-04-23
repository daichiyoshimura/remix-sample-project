import { z } from 'zod';
import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { isDefined } from '@util';
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
import { RoomProfilePageActionResponses } from '@server/actions';
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

export const DeleteRoomModal = ({ isOpen, onClose, roomId, name }: DeleteRoomModalProps) => {
	const [inputValue, setInputValue] = useState<string>('');
	const { state } = useOutletContext<Navigation>();
	const actionData = useActionData<RoomProfilePageActionResponses>();
	const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];
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
