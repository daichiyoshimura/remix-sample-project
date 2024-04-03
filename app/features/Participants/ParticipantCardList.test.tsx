import { render } from '@testing-library/react';
import ParticipantCardList from './ParticipantCardList';

describe('ParticipantCardList', () => {
	it('renders correctly', () => {
		const participants = [
			{ id: '1', name: 'John Doe', part: 'Guest' },
			{ id: '2', name: 'Jane Smith', part: 'Admin' },
		];
		const { getByText } = render(<ParticipantCardList participants={participants} />);
		expect(getByText('John Doe')).toBeDefined();
		expect(getByText('<Guest>')).toBeDefined();
		expect(getByText('Jane Smith')).toBeDefined();
		expect(getByText('<Admin>')).toBeDefined();
	});
});
