import { render } from '@testing-library/react';
import RoomCardList from './RoomCardList';

describe('RoomCardList', () => {
	it('renders list of rooms correctly', () => {
		const rooms = [
			{ id: '1', name: 'Room 1', createdAt: '2024-03-31' },
			{ id: '2', name: 'Room 2', createdAt: '2024-04-01' },
		];

		const { getByText } = render(<RoomCardList rooms={rooms} />);

		expect(getByText('Room 1')).toBeDefined();
		expect(getByText('Room 2')).toBeDefined();
		expect(getByText('Created at: 2024-03-31')).toBeDefined();
		expect(getByText('Created at: 2024-04-01')).toBeDefined();
	});
});
