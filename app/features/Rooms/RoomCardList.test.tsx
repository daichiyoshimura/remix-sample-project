import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RoomCardList from './RoomCardList';

describe('RoomCardList', () => {
	it('renders list of rooms correctly', () => {
		const rooms = [
			{ id: '1', name: 'Room 1', createdAt: '2024-03-31' },
			{ id: '2', name: 'Room 2', createdAt: '2024-04-01' },
		];

		const { getByText } = render(
			<MemoryRouter>
				<RoomCardList rooms={rooms} />
			</MemoryRouter>,
		);

		expect(getByText('Room 1')).toBeInTheDocument();
		expect(getByText('Room 2')).toBeInTheDocument();
		expect(getByText('Created at: 2024-03-31')).toBeInTheDocument();
		expect(getByText('Created at: 2024-04-01')).toBeInTheDocument();
	});
});
