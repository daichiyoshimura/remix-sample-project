import { renderHook, act } from '@testing-library/react';
import { useBinaryState } from '@hooks/useBinaryState';

describe('useBinaryState', () => {
	it('should toggle state correctly', () => {
		const { result } = renderHook(() => useBinaryState(false));

		expect(result.current[0]).toBe(false); // Initial state should be false

		act(() => {
			result.current[1](); // Toggle state
		});

		expect(result.current[0]).toBe(true); // State should be true after toggle

		act(() => {
			result.current[1](); // Toggle state again
		});

		expect(result.current[0]).toBe(false); // State should be false again after second toggle
	});
});
