import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
	it('renders children correctly', async () => {
		const { getByText } = render(<Container>Hello</Container>);
		const cardContent = getByText('Hello');
		expect(cardContent).toBeDefined();
	});
});
