import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { useModalState } from '@hooks';
import { MessageModal } from '@components';
import { ServerErrorResponseBody } from '@server/util';

export const ModalErrorBoundary = () => {
	const [isOpen, handleClose] = useModalState('../');

	const error = useRouteError();
	const description = (error: unknown): string => {
		const [message, code] = ((): [string, string] => {
			if (isRouteErrorResponse(error)) {
				const { code, message } = error.data as ServerErrorResponseBody;
				return [message, code];
			} else if (error instanceof Error) {
				return [error.message, 'Client-General'];
			}
			return ['Unexpected Error', 'Client-Fatal'];
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
