import { useState } from 'react';

export const useBinaryState = (
	init: boolean,
): { state: boolean; on: () => void; off: () => void } => {
	const [state, setState] = useState<boolean>(init);
	const on = () => {
		setState(true);
	};
	const off = () => {
		setState(false);
	};
	return { state: state, on: on, off: off };
};
