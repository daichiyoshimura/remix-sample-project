import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Box from './Box';

describe('renders children correctly', () => {
	it('is Hello World', () => {
		render(<Box>Hello World</Box>);
		const childElement = screen.getByText('Hello World');
		expect(childElement).toBe('Hello World');
	});
});
