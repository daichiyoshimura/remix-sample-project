import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined, validateRoomName } from '@util';
import {
	DescriptionText,
	ErrorTextList,
	LoadingIcon,
	ModalErrorBoundary,
	ModalFormLayout,
	ModalLayout,
	MutationModal,
	SafeTextButton,
	TextButton,
	TextInput,
	TitleText,
} from '@components';
import { RoomListPageActionResponses } from '@server/actions';

export const ErrorBoundary = ModalErrorBoundary;

const CreateRoomModal = () => {
	const [isOpen, onClose] = useModalState('/rooms');

	const { state } = useOutletContext<Navigation>();

	const actionData = useActionData<RoomListPageActionResponses>();
	const hasActionData = isDefined<RoomListPageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [inputName, setInputName] = useState('');
	const [isNameValid, nameErrorMessageList] = validateRoomName(inputName);

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
			<ModalLayout>
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
								<TextButton onClick={handleClose} caption={'Do not create'} />
								<SafeTextButton
									type={'submit'}
									disabled={!isNameValid}
									caption={'Create'}
								/>
							</>
						}
					/>
				</Form>
			</ModalLayout>
		</MutationModal>
	);
};

export default CreateRoomModal;
