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
	Modal,
	ModalErrorBoundary,
	SafeTextButton,
	TextButton,
	TextInput,
	TitleText,
	VerticalFlexStart,
} from '@components';
import { RoomProfilePageActionResponses } from '@server/actions';

export const ErrorBoundary = ModalErrorBoundary;

// TODO: duplicates
const nameRule = z
	.string()
	.min(1)
	.max(64)
	.regex(/^[^\W_]*$/, 'alphanumeric characters only, excluding symbols and spaces');

const EditRoomModal = () => {
	const [isOpen, onClose] = useModalState(`/rooms/${'1'}`);

	const { state } = useOutletContext<Navigation>();

	const actionData = useActionData<RoomProfilePageActionResponses>();
	const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [inputName, setInputName] = useState('');
	const [isNameValid, nameErrorMessageList] = validate(nameRule, inputName);

	const handleClose = () => {
		setInputName('');
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
					<FlexEnd>
						<TextButton onClick={handleClose} caption={'Close'} />
					</FlexEnd>
				</>
			);
		}

		return (
			<>
				<VerticalFlexStart>
					<TitleText title={'Edit Room'} />
					<DescriptionText
						description={`
							Please enter only alphanumeric characters in this field. 
							It is limited to a maximum length of 64 characters. 
							The use of symbols such as underscores, hyphens, and spaces is not permitted.
						`}
					/>
					<Form action={`/rooms/${'1'}`} method="PATCH">
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
								<TextButton onClick={handleClose} caption={'Do not save'} />
								<SafeTextButton
									type={'submit'}
									disabled={!isNameValid}
									caption={'Save'}
								/>
							</FlexEnd>
						</VerticalFlexStart>
					</Form>
				</VerticalFlexStart>
			</>
		);
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			{render()}
		</Modal>
	);
};

export default EditRoomModal;
