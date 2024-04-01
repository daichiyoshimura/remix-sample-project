import { useState } from 'react';

export type requestStatus = 'loading' | 'success' | 'failure' | 'init';
export type setRequestStatus = React.Dispatch<
	React.SetStateAction<requestStatus>
>;

export const useRequestState = (): [
	state: requestStatus,
	setState: setRequestStatus,
] => {
	return useState<requestStatus>('init');
};
