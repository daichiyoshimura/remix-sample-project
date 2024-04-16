import { useNavigation } from '@remix-run/react';

export const useFadeAnimation = (): string => {
	const { state: navState } = useNavigation();

	const calculateFadeClass = () => {
		if (navState === 'idle') {
			return 'animate-fade-in';
		}
		if (navState === 'loading') {
			return 'animate-fade-out';
		}
		return '';
	};

	return calculateFadeClass();
};
