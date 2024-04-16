import { useReducer } from 'react';

export const useBinaryState = (init: boolean): [boolean, React.DispatchWithoutAction] => {
	return useReducer((state: boolean) => {
		return !state;
	}, init);
};
