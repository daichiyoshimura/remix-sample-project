import { z } from 'zod';
import { useState } from 'react';
import {
	Form,
	Navigation,
	useActionData,
	useOutletContext,
	useRevalidator,
} from '@remix-run/react';
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

export const EditRoomModal = ({ isOpen, onClose, roomId }: EditRoomModalProps) => {
	const [inputValue, setInputValue] = useState<string>('');
	const { state } = useOutletContext<Navigation>();
	const { revalidate } = useRevalidator();

	const actionData = useActionData<RoomProfilePageActionResponses>();
	const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [isValid, errorMessageList] = validateZodObject(editRoomSchema, { name: inputValue });

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const handleClose = () => {
		revalidate();
		setInputValue('');
		onClose();
	};

	const render = () => {
		if (state === ('loading' || 'submitting')) {
			return <LoadingIcon />;
		}

		if (state === 'idle' && hasActionData && actionData.success) {
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
