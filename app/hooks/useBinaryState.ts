import { useState } from 'react';

export const useBinaryState = (init: boolean): [boolean, () => void] => {
	const [flag, setFlag] = useState(init);
	const toggle = () => {
		setFlag(!flag);
	};
	return [flag, toggle];
};
