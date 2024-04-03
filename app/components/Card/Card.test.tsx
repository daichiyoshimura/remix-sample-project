import { render } from '@testing-library/react';
import { Card } from '@components';

describe('Card', () => {
	it('renders children correctly', async () => {
		const { getByText } = render(<Card>Hello</Card>);
		const cardContent = getByText('Hello');
		expect(cardContent).toBeDefined();
	});
});
