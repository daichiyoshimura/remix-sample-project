import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { useModalState } from '@hooks';
import { MessageModal } from '@components';

export const ModalErrorBoundary = () => {
	const error = useRouteError();
	const [isOpen, handleClose] = useModalState('../');

	const description = (error: unknown): string => {
		const [message, code] = ((): [string, string] => {
			if (isRouteErrorResponse(error)) {
				return [error.statusText, 'A'];
			} else if (error instanceof Error) {
				return [error.message, 'B'];
			}
			return ['Unexpected Error', 'C'];
		})();
		return `${message} (Code: ${code})`;
	};

	return (
		<MessageModal
			title={'Error'}
			description={description(error)}
			isOpen={isOpen}
			onClose={handleClose}
		/>
	);
};
