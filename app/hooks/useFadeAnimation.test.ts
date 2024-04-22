import { renderHook } from '@testing-library/react';
import { useFadeAnimation } from '@hooks/useFadeAnimation';

const useNavigation = vi.hoisted(() => {
	return vi.fn(() => ({
		state: 'idle',
		location: undefined,
		formMethod: undefined,
		formAction: undefined,
		formEncType: undefined,
		formData: undefined,
		json: undefined,
		text: undefined,
	}));
});

vi.mock('@remix-run/react', () => ({
	useNavigation,
}));

describe('useFadeAnimation', () => {
	it('returns correct fade animation class when state is idle', () => {
		useNavigation.mockReturnValue({
			state: 'idle',
			location: undefined,
			formMethod: undefined,
			formAction: undefined,
			formEncType: undefined,
			formData: undefined,
			json: undefined,
			text: undefined,
		});
		const { result } = renderHook(() => useFadeAnimation());
		expect(result.current()).toBe('animate-fade-in');
	});

	it('returns correct fade animation class when state is submitting', () => {
		useNavigation.mockReturnValue({
			state: 'submitting',
			location: undefined,
			formMethod: undefined,
			formAction: undefined,
			formEncType: undefined,
			formData: undefined,
			json: undefined,
			text: undefined,
		});
		const { result } = renderHook(() => useFadeAnimation());
		expect(result.current()).toBe('animate-fade-out');
	});

	it('returns correct fade animation class when state is loading', () => {
		useNavigation.mockReturnValue({
			state: 'loading',
			location: undefined,
			formMethod: undefined,
			formAction: undefined,
			formEncType: undefined,
			formData: undefined,
			json: undefined,
			text: undefined,
		});
		const { result } = renderHook(() => useFadeAnimation());
		expect(result.current()).toBe('');
	});

	it('returns empty string when state is neither idle nor submitting', () => {
		useNavigation.mockReturnValue({
			state: 'unknown',
			location: undefined,
			formMethod: undefined,
			formAction: undefined,
			formEncType: undefined,
			formData: undefined,
			json: undefined,
			text: undefined,
		});
		const { result } = renderHook(() => useFadeAnimation());
		expect(result.current()).toBe('');
	});
});
