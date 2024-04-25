import { renderHook, act } from '@testing-library/react';
import { useModalState } from '@hooks/useModalState';

const navigateMock = vi.fn();
vi.mock('@remix-run/react', () => ({
	useNavigate: () => navigateMock,
}));

describe('useModalState', () => {
	it('should return updated isOpen state as true after mount', () => {
		const { result } = renderHook(() => useModalState('/'));

		const [isOpen] = result.current;
		expect(isOpen).toBe(true);
	});

	it('should return updated isOpen state as false after calling handleClose', () => {
		const { result } = renderHook(() => useModalState('/'));
		const [, handleClose] = result.current;

		act(() => {
			handleClose();
		});

		const [isOpen] = result.current;
		expect(isOpen).toBe(false);
	});

	it('should navigate to the specified route after calling handleClose', () => {
		const { result } = renderHook(() => useModalState('/target-route'));
		const [, handleClose] = result.current;

		act(() => {
			handleClose();
		});

		expect(navigateMock).toHaveBeenCalledWith('/target-route');
	});
});
