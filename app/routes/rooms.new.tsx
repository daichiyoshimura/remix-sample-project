import { z } from 'zod';
import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined, validate } from '@util';
import {
	DescriptionText,
	ErrorTextList,
	FlexEnd,
	LoadingIcon,
	ModalErrorBoundary,
	MutationModal,
	SafeTextButton,
	TextButton,
	TextInput,
	TitleText,
	VerticalFlexStart,
} from '@components';
import { RoomListPageActionResponses } from '@server/actions';

export const ErrorBoundary = ModalErrorBoundary;

const nameRule = z
	.string()
	.min(1)
	.max(64)
	.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces');

const CreateRoomModal = () => {
	const [isOpen, onClose] = useModalState('/rooms');

	const { state } = useOutletContext<Navigation>();

	const actionData = useActionData<RoomListPageActionResponses>();
	const hasActionData = isDefined<RoomListPageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [inputName, setInputName] = useState('');
	const [isNameValid, nameErrorMessageList] = validate(nameRule, inputName);

	const handleClose = () => {
		setInputName('');
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
							value={inputName}
							onChange={setInputName}
							placeholder="RoomName"
							required
						/>
						<ErrorTextList textList={nameErrorMessageList} />
						<ErrorTextList textList={serverErrorMessageList} />
						<FlexEnd>
							<TextButton onClick={handleClose} caption={'Do not create'} />
							<SafeTextButton
								type={'submit'}
								disabled={!isNameValid}
								caption={'Create'}
							/>
						</FlexEnd>
					</VerticalFlexStart>
				</Form>
			</VerticalFlexStart>
		</MutationModal>
	);
};

export default CreateRoomModal;
