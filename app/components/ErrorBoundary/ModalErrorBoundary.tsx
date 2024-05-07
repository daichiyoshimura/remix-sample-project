import { useRouteError } from '@remix-run/react';
import { useErrorDescription, useModalState } from '@hooks';
import { MessageModal } from '@components';

export const ModalErrorBoundary = () => {
	const [isOpen, handleClose] = useModalState('../');

	const error = useRouteError();
	const description = useErrorDescription();

	return (
		<MessageModal
			title={'Error'}
			description={description(error)}
			isOpen={isOpen}
			onClose={handleClose}
		/>
	);
};
