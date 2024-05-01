import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined, validateRoomName } from '@util';
import {
	DescriptionText,
	ErrorTextList,
	LoadingIcon,
	MessageModalLayout,
	Modal,
	ModalErrorBoundary,
	ModalFormLayout,
	ModalLayout,
	SafeTextButton,
	TextButton,
	TextInput,
	TitleText,
} from '@components';
import { RoomProfilePageActionResponses } from '@server/actions';

export const ErrorBoundary = ModalErrorBoundary;

const EditRoomModal = () => {
	const [isOpen, onClose] = useModalState(`/rooms/${'1'}`);

	const { state } = useOutletContext<Navigation>();

	const actionData = useActionData<RoomProfilePageActionResponses>();
	const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [inputName, setInputName] = useState('');
	const [isNameValid, nameErrorMessageList] = validateRoomName(inputName);

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
				<MessageModalLayout
					title={<TitleText title={'Success'} />}
					description={<DescriptionText description={'The Room is edited'} />}
					buttons={<TextButton onClick={handleClose} caption={'Close'} />}
				/>
			);
		}

		return (
			<>
				<ModalLayout>
					<TitleText title={'Edit Room'} />
					<DescriptionText
						description={`
							Please enter only alphanumeric characters in this field. 
							It is limited to a maximum length of 64 characters. 
							The use of symbols such as underscores, hyphens, and spaces is not permitted.
						`}
					/>
					<Form action={`/rooms/${'1'}`} method="PATCH">
						<ModalFormLayout
							inputs={
								<>
									<TextInput
										name="name"
										value={inputName}
										onChange={setInputName}
										placeholder="RoomName"
										required
									/>
									<ErrorTextList textList={nameErrorMessageList} />
									<ErrorTextList textList={serverErrorMessageList} />
								</>
							}
							buttons={
								<>
									<TextButton onClick={handleClose} caption={'Do not save'} />
									<SafeTextButton
										type={'submit'}
										disabled={!isNameValid}
										caption={'Save'}
									/>
								</>
							}
						/>
					</Form>
				</ModalLayout>
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
