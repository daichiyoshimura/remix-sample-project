import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RoomProfile } from '@features';

describe('RoomProfile', () => {
	it('renders room profile correctly', () => {
		const room = {
			id: '1',
			name: 'Room 1',
			createdAt: '2024-03-31',
		};

		const { getByText, getByRole } = render(
			<MemoryRouter>
				<RoomProfile {...room} />
			</MemoryRouter>,
		);

		expect(getByText('Room 1')).toBeDefined();
		expect(getByText('ID: 1')).toBeDefined();
		expect(getByText('Created At: 2024-03-31')).toBeDefined();
		expect(getByRole('button')).toBeDefined();
	});
});
