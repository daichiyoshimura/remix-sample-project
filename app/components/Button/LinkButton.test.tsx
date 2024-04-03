import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
	it('navigates to the correct endpoint when clicked', async () => {
		const { getByRole } = render(
			<MemoryRouter>
				<LinkButton to="/">Link Text</LinkButton>
			</MemoryRouter>,
		);
		const linkButton = getByRole('link');
		fireEvent.click(linkButton);

		await new Promise((resolve) => setTimeout(resolve, 500));

		expect(window.location.pathname).toBe('/');
	});
});
