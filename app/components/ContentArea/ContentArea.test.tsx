import { render } from '@testing-library/react';
import ContentArea from './ContentArea';

describe('ContentArea', () => {
	it('renders children correctly', async () => {
		const { getByText } = render(<ContentArea>Hello</ContentArea>);
		const cardContent = getByText('Hello');
		expect(cardContent).toBeDefined();
	});
});
