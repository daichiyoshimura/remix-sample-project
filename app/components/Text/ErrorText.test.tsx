import { render } from '@testing-library/react';
import { ErrorText } from '@components';

describe('ErrorText component', () => {
	it('renders error text correctly', () => {
		const errorMessage = 'This is an error message';
		const { getByText } = render(<ErrorText value={errorMessage} />);
		expect(getByText(errorMessage)).toBeInTheDocument();
	});
});
