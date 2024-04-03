import { render } from '@testing-library/react';
import { Header } from '@components';

describe('Header', () => {
	it('renders title correctly', async () => {
		const { getByText } = render(<Header currentPageTitle={'Hello'} />);
		const cardContent = getByText('Hello');
		expect(cardContent).toBeDefined();
	});
});
