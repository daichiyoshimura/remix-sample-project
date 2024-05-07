import { useState } from 'react';
import { Form, Navigation, useActionData, useOutletContext } from '@remix-run/react';
import { useModalState } from '@hooks';
import { isDefined } from '@util';
import {
	CautionTextButton,
	DescriptionText,
	LoadingIcon,
	ModalErrorBoundary,
	MutationModal,
	TextButton,
	TextInput,
	TitleText,
} from '@components';
import { MessageModalLayout, ModalFormLayout, ModalLayout } from '@layouts';
import { roomProfilePageAction } from '@server/actions';

export const action = roomProfilePageAction;

export const ErrorBoundary = ModalErrorBoundary;

const DeleteRoomModal = () => {
	const [isOpen, onClose] = useModalState(`/rooms/${'1'}`);

	const { state } = useOutletContext<Navigation>();

	const actionData = useActionData<typeof action>();

	const [inputName, setInputName] = useState('');

	const handleClose = () => {
		setInputName('');
		onClose();
	};

	const render = () => {
		if (isDefined(actionData)) {
			return (
				<MessageModalLayout
					title={<TitleText title={'Success'} />}
					description={<DescriptionText description={'The Room is deleted'} />}
					buttons={<TextButton onClick={handleClose} caption={'Close'} />}
				/>
			);
		}

		return (
			<ModalLayout>
				<TitleText title={'Are you sure you want to delete?'} />
				<DescriptionText
					description={`
								To delete, please enter the same name in the textbox below and
								press the delete button.
							`}
				/>
				<Form action={`/rooms/${'1'}/delete`} method="DELETE">
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

export default DeleteRoomModal;
