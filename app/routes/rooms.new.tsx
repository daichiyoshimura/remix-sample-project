import { useState } from 'react';
import { Form, Navigation, useActionData, useNavigate, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { validate, roomNameRule, isDefined } from '@util';
import {
	DescriptionText,
	ErrorTextList,
	LoadingIcon,
	ModalErrorBoundary,
	MutationModal,
	SafeTextButton,
	TextButton,
	TextInput,
	TitleText,
} from '@components';
import { MessageModalLayout, ModalFormLayout, ModalLayout } from '@layouts';
import { roomListPageAction } from '@server/actions';

export const action = roomListPageAction;

export const ErrorBoundary = ModalErrorBoundary;

const CreateRoomModal = () => {
	const [isOpen, onClose] = useModalState('/rooms');

	const { state } = useOutletContext<Navigation>();

	const [inputName, setInputName] = useState('');
	const [isNameValid, nameErrorMessageList] = validate<string>(roomNameRule, inputName);

	const handleClose = () => {
		setInputName('');
		onClose();
	};

	const navigate = useNavigate();
	const createdRoom = useActionData<typeof action>();

	const render = () => {
		if (isDefined(createdRoom)) {
			return (
				<MessageModalLayout
					title={<TitleText title={'Create Room'} />}
					description={<DescriptionText description={`Success!`} />}
					buttons={
						<TextButton
							onClick={() => {
								navigate(`/rooms/${createdRoom.id}`);
							}}
							caption={'OK'}
						/>
					}
				/>
			);
		}

		return (
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
				<Form action="/rooms/new" method="POST">
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
		);
	};

	return (
		<MutationModal
			isOpen={isOpen}
			onClose={handleClose}
			state={state}
			inLoading={<LoadingIcon />}
		>
			{render()}
		</MutationModal>
	);
};

export default CreateRoomModal;
