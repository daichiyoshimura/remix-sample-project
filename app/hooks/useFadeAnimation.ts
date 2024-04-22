import { useEffect, useState } from 'react';
import { useNavigation } from '@remix-run/react';

export const useFadeAnimation = (): (() => string) => {
	const [navigationState, setNavigationState] = useState<string>('idle');
	const { state } = useNavigation();
	useEffect(() => {
		setNavigationState(state);
	}, [state]);

	const calculateFadeClass = () => {
		if (navigationState === 'idle') {
			return 'animate-fade-in';
		}
		if (navigationState === 'submitting') {
			return 'animate-fade-out';
		}
		return '';
	};

	return calculateFadeClass;
};
