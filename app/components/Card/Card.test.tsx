import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
	it('renders children correctly', async () => {
		const { getByText } = render(<Card>Hello</Card>);
		const cardContent = getByText('Hello');
		expect(cardContent).toBeDefined();
	});
});
