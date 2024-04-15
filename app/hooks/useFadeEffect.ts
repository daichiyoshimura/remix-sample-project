import { useEffect, useState } from 'react';
import { useNavigation } from '@remix-run/react';

export const useFadeEffect = (): string => {
	const { state: navState } = useNavigation();
	const [fadeClass, setFadeClass] = useState<string>('');
	useEffect(() => {
		if (navState === 'idle' && fadeClass !== 'animate-fade-in') {
			setFadeClass('animate-fade-in');
		}
		if (navState === 'loading' && fadeClass !== 'animate-fade-out') {
			setFadeClass('animate-fade-out');
		}
	}, [navState, fadeClass]);
	return fadeClass;
};
