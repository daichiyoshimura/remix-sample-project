import { z } from 'zod';
import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined, validateZodObject } from '@util';
import {
	Button,
	DescriptionText,
	ErrorTextList,
	FlexEnd,
	LoadingIcon,
	ModalErrorBoundary,
	MutationModal,
	TextInput,
	TitleText,
	VerticalFlexStart,
} from '@components';
import { RoomListPageActionResponses } from '@server/actions';

export const ErrorBoundary = ModalErrorBoundary;

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

const CreateRoomModal = () => {
	const [isOpen, onClose] = useModalState('/rooms');

	const [inputValue, setInputValue] = useState<string>('');

	const { state } = useOutletContext<Navigation>();
	const actionData = useActionData<RoomListPageActionResponses>();
	const hasActionData = isDefined<RoomListPageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [isValid, errorMessageList] = validateZodObject(createRoomSchema, { name: inputValue });

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const handleClose = () => {
		setInputValue('');
		onClose();
	};

	return (
		<MutationModal
			isOpen={isOpen}
			onClose={handleClose}
			state={state}
			inLoading={<LoadingIcon />}
		>
			<VerticalFlexStart>
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
					<VerticalFlexStart>
						<TextInput
							name="name"
							value={inputValue}
							onChange={onChange}
							placeholder="name"
							required
						/>
						<ErrorTextList textList={errorMessageList} />
						<ErrorTextList textList={serverErrorMessageList} />
						<FlexEnd>
							<Button onClick={handleClose}>Do not create</Button>
							<Button type="submit" color="safe" disabled={!isValid}>
								Create
							</Button>
						</FlexEnd>
					</VerticalFlexStart>
				</Form>
			</VerticalFlexStart>
		</MutationModal>
	);
};

export default CreateRoomModal;
