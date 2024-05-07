import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined, roomNameRule, validate } from '@util';
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
import { roomProfilePageAction } from '@server/actions';

export const action = roomProfilePageAction;

export const ErrorBoundary = ModalErrorBoundary;

const EditRoomModal = () => {
	const [isOpen, onClose] = useModalState(`/rooms/${'1'}`);

	const { state } = useOutletContext<Navigation>();

	const [inputName, setInputName] = useState('');
	const [isNameValid, nameErrorMessageList] = validate<string>(roomNameRule, inputName);

	const handleClose = () => {
		setInputName('');
		onClose();
	};

	const actionData = useActionData<typeof action>();
	const render = () => {
		if (isDefined(actionData)) {
			return (
				<MessageModalLayout
					title={<TitleText title={'Success'} />}
					description={<DescriptionText description={'The Room is edited'} />}
					buttons={<TextButton onClick={handleClose} caption={'Close'} />}
				/>
			);
		}

		return (
			<ModalLayout>
				<TitleText title={'Edit Room'} />
				<DescriptionText
					description={`
							Please enter only alphanumeric characters in this field. 
							It is limited to a maximum length of 64 characters. 
							The use of symbols such as underscores, hyphens, and spaces is not permitted.
						`}
				/>
				<Form action={`/rooms/${'1'}/edit`} method="PATCH">
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

export default EditRoomModal;
