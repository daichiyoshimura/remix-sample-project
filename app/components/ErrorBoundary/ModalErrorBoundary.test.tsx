import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ModalErrorBoundary } from '@components';

describe('ModalErrorBoundary', () => {
	it('renders error message correctly', () => {
		const { getByText } = render(
			<MemoryRouter>
				<ModalErrorBoundary />
			</MemoryRouter>,
		);

		expect(getByText('Error')).toBeInTheDocument();
		expect(getByText('Unexpected Error (Code: C)')).toBeInTheDocument();
	});
});
