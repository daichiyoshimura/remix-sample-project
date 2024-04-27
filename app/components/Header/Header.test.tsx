import { render } from '@testing-library/react';
import { Header } from '@components';

describe('Header', () => {
	it('renders title correctly', async () => {
		const { getByText } = render(<Header />);
		const cardContent = getByText('Awsome App');
		expect(cardContent).toBeDefined();
	});
});
