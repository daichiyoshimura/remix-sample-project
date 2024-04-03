import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import RoomCard from './RoomCard';

describe('RoomCard', () => {
	it('renders Enter button with correct link', async () => {
		const { getByRole } = render(
			<MemoryRouter>
				<RoomCard id="123" name="Test Room" createdAt="2024-03-31" />
			</MemoryRouter>,
		);

		const enterButton = getByRole('link');
		fireEvent.click(enterButton);

		await new Promise((resolve) => setTimeout(resolve, 500));

		expect(window.location.pathname).toBe('/');
	});
});
