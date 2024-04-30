import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined } from '@util';
import {
	CautionTextButton,
	DescriptionText,
	ErrorTextList,
	LoadingIcon,
	ModalErrorBoundary,
	ModalFormLayout,
	ModalLayout,
	MutationModal,
	TextButton,
	TextInput,
	TitleText,
} from '@components';
import { RoomProfilePageActionResponses } from '@server/actions';

export const ErrorBoundary = ModalErrorBoundary;

const DeleteRoomModal = () => {
	const [isOpen, onClose] = useModalState(`/rooms/${'1'}`);

	const { state } = useOutletContext<Navigation>();

	const actionData = useActionData<RoomProfilePageActionResponses>();
	const hasActionData = isDefined<RoomProfilePageActionResponses>(actionData);
	const serverErrorMessageList = hasActionData && !actionData.success ? [actionData.message] : [];

	const [inputName, setInputName] = useState('');

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
				<TitleText title={'Are you sure you want to delete?'} />
				<DescriptionText
					description={`
								To delete, please enter the same name in the textbox below and
								press the delete button.
							`}
				/>
				<Form action={`/rooms/${'1'}`} method="DELETE">
					<ModalFormLayout
						inputs={
							<>
								<TextInput
									name="name"
									value={inputName}
									onChange={setInputName}
									placeholder={'RoomName'}
									required
								/>
								<ErrorTextList textList={serverErrorMessageList} />
							</>
						}
						buttons={
							<>
								<TextButton onClick={handleClose} caption={'Do not delete'} />
								<CautionTextButton
									type={'submit'}
									disabled={!(inputName === 'RoomName')}
									caption={'Delete'}
								/>
							</>
						}
					/>
				</Form>
			</ModalLayout>
		</MutationModal>
	);
};

export default DeleteRoomModal;
