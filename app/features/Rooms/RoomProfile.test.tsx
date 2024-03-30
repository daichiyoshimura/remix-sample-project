import { render } from '@testing-library/react';
import RoomProfile from './RoomProfile';

describe('RoomProfile', () => {
	it('renders room profile correctly', () => {
		const onClick = vi.fn();
		const room = {
			id: '1',
			name: 'Room 1',
			createdAt: '2024-03-31',
		};

		const { getByText, getByRole } = render(
			<RoomProfile {...room} onClick={onClick} />,
		);

		expect(getByText('Room 1')).toBeDefined();
		expect(getByText('ID: 1')).toBeDefined();
		expect(getByText('Created At: 2024-03-31')).toBeDefined();
		expect(getByRole('button')).toBeDefined();
	});
});
