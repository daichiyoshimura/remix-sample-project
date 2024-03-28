import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
	it('renders children correctly', async () => {
		const { getByText } = render(<Button>Hello</Button>);
		const button = getByText('Hello');
		expect(button).toBeDefined();
	});

	it('calls onClick function when clicked', async () => {
		const onClickMock = vi.fn(); // モック関数を作成
		const { getByText } = render(
			<Button onClick={onClickMock}>Click me</Button>,
		);
		const button = getByText('Click me');
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalled();
	});

	it('is disabled when disabled prop is true', async () => {
		const { getByText } = render(<Button disabled>Disabled Button</Button>);
		const button = getByText('Disabled Button') as HTMLButtonElement;
		expect(button.disabled).toBeTruthy();
	});
});
